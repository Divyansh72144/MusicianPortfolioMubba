// Repopulate artist bio with simplified schema - ONE FIELD ONLY
const PROJECT_ID = 'zmwf3iga'
const DATASET = 'production'
const API_VERSION = '2024-02-14'
const WRITE_TOKEN = 'sklYxTzjpWSuhUKzfjsstQKS3OWk5xMCfrdOh0GG0CQ9V5fCr4AwjFGUmJipV1CoGbAXkrz1JzQyjLLpRGJ5Tmstp2YzYrM7cGh8WQpftc7E9w7rV004IwXN3FiF9QnBDSxvJTXlwwVYKsa18A5Uba8n8v2nCUjr8utwTpn6nACWnFvUNbzR'

// First, get existing artist bio and delete it
async function getAndDeleteExisting() {
  const query = `*[_type == "artistBio"]._id`
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}`

  const response = await fetch(url, {
    headers: { 'Authorization': `Bearer ${WRITE_TOKEN}` }
  })

  const data = await response.json()

  if (data.result && data.result.length > 0) {
    console.log('🗑️  Deleting old artist bio...\n')
    const mutations = data.result.map(doc => ({ delete: { id: doc } }))

    await fetch(
      `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WRITE_TOKEN}`
        },
        body: JSON.stringify({ mutations })
      }
    )
  }
}

async function createArtistBio() {
  const artistBio = {
    _type: 'artistBio',
    bio: `Mubba (born Humphrey Mbaruku) is a jazz bassist, songwriter and composer from Tanzania living in Finland.

Since his beginnings, both traditional jazz and African music form an important part of his life. He has been inspired by artists such as Richard Bona, Étienne M'Bapé, Marcus Miller, Tatu N'gane, Jimmy Dludlu, Jonathan Butler, Hugh Masékela, among other greats. Due to these varieties and legendary experience and exposure, his music connects with audiences from different cultures around Africa and other corners of the world as well.

His music fuses African (Tanzania) rhythm and melodies with the spontaneity freedom of jazz improvisation, resistance and movement that ignites the body and awakens the mind.

He has a band called The Afro-Ryan which comprises musicians from Tanzania, Chile, Italy, and Finland.

Career Highlights:
- 2025: African Tour (Sponsored by Goethe Institute) - Performed in Ivory Coast, Kenya, Angola, Congo, and more
- 2024: Sauti za Busara - Performed at Sauti za Busara festival in Zanzibar
- 2024: BC International Jazz Festival - Performed at BC International Jazz Festival in Kenya
- 2024: Evergreen Jazz Festival - Performed at Evergreen Jazz Festival in Tanzania

Albums:
- Time (2023) - Highlights the music that he is doing, available on all digital platforms (Spotify, Apple Music, etc.)
- Echos from the West (TBA) - Second album, currently in production`
  }

  const mutations = [{ create: artistBio }]

  const response = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WRITE_TOKEN}`
      },
      body: JSON.stringify({ mutations })
    }
  )

  if (response.ok) {
    console.log('✅ Artist bio created successfully!')
    console.log('\n📝 Simplified schema - ONE FIELD ONLY:')
    console.log('  ✅ Bio/About (text field with all content)')
    console.log('\n💡 Open Sanity Studio to edit the bio!')
  } else {
    const error = await response.text()
    console.log(`❌ Failed: ${error}`)
  }
}

async function run() {
  await getAndDeleteExisting()
  await createArtistBio()
}

run()
