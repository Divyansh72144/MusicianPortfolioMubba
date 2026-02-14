// Fixed version of the seed script
const PROJECT_ID = 'zmwf3iga'
const DATASET = 'production'
const API_VERSION = '2024-02-14'
const WRITE_TOKEN = 'sklYxTzjpWSuhUKzfjsstQKS3OWk5xMCfrdOh0GG0CQ9V5fCr4AwjFGUmJipV1CoGbAXkrz1JzQyjLLpRGJ5Tmstp2YzYrM7cGh8WQpftc7E9w7rV004IwXN3FiF9QnBDSxvJTXlwwVYKsa18A5Uba8n8v2nCUjr8utwTpn6nACWnFvUNbzR'

const tourDates = [
  {
    _type: 'tourDate',
    venue: "Double Tree Hotel",
    location: "Reading Manor, PA",
    date: "2026-03-28T18:00:00.000Z",
    time: "8:00 PM",
    status: "available",
    order: 1
  },
  {
    _type: 'tourDate',
    venue: "Birchmere",
    location: "Alexandria, VA",
    date: "2026-05-22T18:00:00.000Z",
    time: "8:00 PM",
    status: "available",
    order: 2
  },
  {
    _type: 'tourDate',
    venue: "Birchmere",
    location: "Alexandria, VA",
    date: "2026-05-23T18:00:00.000Z",
    time: "8:00 PM",
    status: "available",
    order: 3
  },
  {
    _type: 'tourDate',
    venue: "Rams Head On Stage",
    location: "Annapolis, MD",
    date: "2026-05-24T18:00:00.000Z",
    time: "8:00 PM",
    status: "available",
    order: 4
  },
  {
    _type: 'tourDate',
    venue: "Brian Culbertson's Napa Valley Jazz Getaway 2026",
    location: "Napa, CA",
    date: "2026-06-11T18:00:00.000Z",
    time: "7:00 PM",
    status: "available",
    order: 5
  },
  {
    _type: 'tourDate',
    venue: "Place des Arts - Maison Symphonique",
    location: "Montréal, Canada",
    date: "2026-06-25T19:00:00.000Z",
    time: "7:30 PM",
    status: "available",
    order: 6
  },
  {
    _type: 'tourDate',
    venue: "Cemil Topuzlu Open Air Theatre",
    location: "Şişli, Turkey",
    date: "2026-06-30T20:00:00.000Z",
    time: "9:00 PM",
    status: "available",
    order: 7
  },
  {
    _type: 'tourDate',
    venue: "Városháza tér",
    location: "Budapest, Hungary",
    date: "2026-07-02T19:00:00.000Z",
    time: "8:00 PM",
    status: "available",
    order: 8
  },
  {
    _type: 'tourDate',
    venue: "Amphitheater of the Wolski Cultural Center in Sowiński Park",
    location: "Warszawa, Poland",
    date: "2026-07-03T19:00:00.000Z",
    time: "8:00 PM",
    status: "available",
    order: 9
  },
  {
    _type: 'tourDate',
    venue: "Jazz à Vienne 2026",
    location: "Vienne, France",
    date: "2026-07-04T20:00:00.000Z",
    time: "8:30 PM",
    status: "available",
    order: 10
  }
]

const merchandise = [
  {
    _type: 'merchandise',
    name: 'Time Album Vinyl',
    price: '$35.00',
    category: 'Music',
    description: 'Classic album on high-quality vinyl',
    order: 1
  },
  {
    _type: 'merchandise',
    name: 'Mubba Signature T-Shirt',
    price: '$30.00',
    category: 'Apparel',
    description: 'Official signature t-shirt',
    order: 2
  },
  {
    _type: 'merchandise',
    name: 'Echos from the West CD',
    price: '$15.00',
    category: 'Music',
    description: 'Album on CD',
    order: 3
  },
  {
    _type: 'merchandise',
    name: 'Tour 2024 Hoodie',
    price: '$55.00',
    category: 'Apparel',
    description: 'Comfortable tour hoodie',
    order: 4
  },
  {
    _type: 'merchandise',
    name: 'Renaissance Vinyl',
    price: '$35.00',
    category: 'Music',
    description: 'Renaissance album on vinyl',
    order: 5
  },
  {
    _type: 'merchandise',
    name: 'Bass Legend Cap',
    price: '$25.00',
    category: 'Accessories',
    description: 'Stylish bass legend cap',
    order: 6
  },
  {
    _type: 'merchandise',
    name: 'Free Concert Poster',
    price: '$20.00',
    category: 'Posters',
    description: 'Limited edition concert poster',
    order: 7
  },
  {
    _type: 'merchandise',
    name: 'Mubba Mug',
    price: '$18.00',
    category: 'Accessories',
    description: 'Official tour mug',
    order: 8
  }
]

async function createDocument(doc) {
  const response = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WRITE_TOKEN}`
      },
      body: JSON.stringify({
        mutations: [{ create: doc }]
      })
    }
  )

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Failed: ${response.status} - ${text}`)
  }

  const data = await response.json()
  return data
}

async function seedData() {
  console.log('🌱 Starting to seed Sanity with existing data...\n')

  let successCount = 0
  let errorCount = 0

  // Create tour dates one at a time
  console.log('📅 Creating tour dates...')
  for (const tourDate of tourDates) {
    try {
      const result = await createDocument(tourDate)
      console.log(`  ✓ Created: ${tourDate.venue} - ${tourDate.location}`)
      successCount++
    } catch (error) {
      console.log(`  ✗ Failed: ${tourDate.venue} - ${error.message}`)
      errorCount++
    }
  }

  console.log(`\nTour dates: ${successCount} created, ${errorCount} failed\n`)

  successCount = 0
  errorCount = 0

  // Create merchandise one at a time
  console.log('🛍️  Creating merchandise...')
  for (const item of merchandise) {
    try {
      const result = await createDocument(item)
      console.log(`  ✓ Created: ${item.name}`)
      successCount++
    } catch (error) {
      console.log(`  ✗ Failed: ${item.name} - ${error.message}`)
      errorCount++
    }
  }

  console.log(`\nMerchandise: ${successCount} created, ${errorCount} failed\n`)

  if (errorCount === 0) {
    console.log('🎉 All data seeded successfully!')
    console.log('\n📝 Next steps:')
    console.log('1. Go to https://www.sanity.io/manage')
    console.log('2. Open your studio')
    console.log('3. You should see all your content there!')
  } else {
    console.log('⚠️  Some items failed to create')
    console.log('Check the error messages above')
  }
}

seedData()
