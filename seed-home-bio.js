// Populate home bio with SHORT description
const PROJECT_ID = 'zmwf3iga'
const DATASET = 'production'
const API_VERSION = '2024-02-14'
const WRITE_TOKEN = 'sklYxTzjpWSuhUKzfjsstQKS3OWk5xMCfrdOh0GG0CQ9V5fCr4AwjFGUmJipV1CoGbAXkrz1JzQyjLLpRGJ5Tmstp2YzYrM7cGh8WQpftc7E9w7rV004IwXN3FiF9QnBDSxvJTXlwwVYKsa18A5Uba8n8v2nCUjr8utwTpn6nACWnFvUNbzR'

// First, get existing home bio and delete it
async function getAndDeleteExisting() {
  const query = `*[_type == "homeBio"]._id`
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}`

  const response = await fetch(url, {
    headers: { 'Authorization': `Bearer ${WRITE_TOKEN}` }
  })

  const data = await response.json()

  if (data.result && data.result.length > 0) {
    console.log('🗑️  Deleting old home bio...\n')
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

async function createHomeBio() {
  const homeBio = {
    _type: 'homeBio',
    bio: `Humphrey Mubba (born Humphrey Mbaruku) is a jazz bassist, songwriter and composer from Tanzania living in Finland. Both traditional jazz and African music form an important part of his life. His music fuses African rhythm and melodies with the spontaneity and freedom of jazz improvisation, igniting the body and awakening the mind.`
  }

  const mutations = [{ create: homeBio }]

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
    console.log('✅ Home bio created successfully!')
    console.log('\n📝 Simplified schema - ONE FIELD ONLY:')
    console.log('  ✅ Short Bio (text field for home page)')
    console.log('\n💡 Open Sanity Studio to edit the home bio!')
  } else {
    const error = await response.text()
    console.log(`❌ Failed: ${error}`)
  }
}

async function run() {
  await getAndDeleteExisting()
  await createHomeBio()
}

run()
