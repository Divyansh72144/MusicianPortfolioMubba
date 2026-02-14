// Populate yellow box announcement
const PROJECT_ID = 'zmwf3iga'
const DATASET = 'production'
const API_VERSION = '2024-02-14'
const WRITE_TOKEN = 'sklYxTzjpWSuhUKzfjsstQKS3OWk5xMCfrdOh0GG0CQ9V5fCr4AwjFGUmJipV1CoGbAXkrz1JzQyjLLpRGJ5Tmstp2YzYrM7cGh8WQpftc7E9w7rV004IwXN3FiF9QnBDSxvJTXlwwVYKsa18A5Uba8n8v2nCUjr8utwTpn6nACWnFvUNbzR'

// First, get existing yellow box and delete it
async function getAndDeleteExisting() {
  const query = `*[_type == "yellowBoxHomepage"]._id`
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}`

  const response = await fetch(url, {
    headers: { 'Authorization': `Bearer ${WRITE_TOKEN}` }
  })

  const data = await response.json()

  if (data.result && data.result.length > 0) {
    console.log('🗑️  Deleting old yellow box...\n')
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

async function createYellowBox() {
  const yellowBox = {
    _type: 'yellowBoxHomepage',
    text: `New album "Echos from the West" coming soon!`
  }

  const mutations = [{ create: yellowBox }]

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
    console.log('✅ Yellow box announcement created successfully!')
    console.log('\n📝 Simplified schema - ONE FIELD ONLY:')
    console.log('  ✅ Announcement Text (text field for homepage)')
    console.log('\n💡 Open Sanity Studio to edit the announcement!')
  } else {
    const error = await response.text()
    console.log(`❌ Failed: ${error}`)
  }
}

async function run() {
  await getAndDeleteExisting()
  await createYellowBox()
}

run()
