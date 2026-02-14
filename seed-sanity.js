// Script to populate Sanity with existing data from the website
// Run this with: node seed-sanity.js

// You'll need a token with WRITE permissions
// Get one from: https://www.sanity.io/manage

const PROJECT_ID = 'zmwf3iga'
const DATASET = 'production'
const API_VERSION = '2024-02-14'

// You need to replace this with a WRITE token (not just a viewer token)
const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN || 'YOUR_WRITE_TOKEN_HERE'

// Existing tour dates from TourWidget.jsx
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

// Existing merchandise from ShopPage.jsx
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

// Site settings
const siteSettings = {
  _type: 'siteSettings',
  title: 'Marcus Miller',
  description: 'Official website of Marcus Miller - Tour dates, music, merchandise, and more.',
  newsletterTitle: 'Stay Updated',
  newsletterText: 'Subscribe to get the latest news, tour dates, and exclusive content.'
}

async function createDocument(document) {
  const mutations = [{
    create: document
  }]

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

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Failed to create document: ${error}`)
  }

  return await response.json()
}

async function seedData() {
  if (WRITE_TOKEN === 'YOUR_WRITE_TOKEN_HERE') {
    console.error('❌ ERROR: You need to set a write token!')
    console.log('\n📝 To get a write token:')
    console.log('1. Go to https://www.sanity.io/manage')
    console.log('2. Click on your project (zmwf3iga)')
    console.log('3. Go to API → Tokens')
    console.log('4. Create a new token with "Editor" permissions')
    console.log('5. Set it as environment variable: export SANITY_WRITE_TOKEN=your_token_here')
    console.log('6. Run: node seed-sanity.js')
    return
  }

  console.log('🌱 Starting to seed Sanity with existing data...\n')

  try {
    // Create tour dates
    console.log('📅 Creating tour dates...')
    for (const tourDate of tourDates) {
      const result = await createDocument(tourDate)
      console.log(`  ✓ Created: ${tourDate.venue} - ${tourDate.location}`)
    }
    console.log(`\n✅ Created ${tourDates.length} tour dates!\n`)

    // Create merchandise
    console.log('🛍️  Creating merchandise...')
    for (const item of merchandise) {
      const result = await createDocument(item)
      console.log(`  ✓ Created: ${item.name}`)
    }
    console.log(`\n✅ Created ${merchandise.length} merchandise items!\n`)

    // Create site settings
    console.log('⚙️  Creating site settings...')
    const result = await createDocument(siteSettings)
    console.log('✅ Created site settings!\n')

    console.log('🎉 All data seeded successfully!')
    console.log('\n📝 Next steps:')
    console.log('1. Go to https://www.sanity.io/manage')
    console.log('2. Open your studio')
    console.log('3. You should see all your content there!')
    console.log('4. Upload product images for each merchandise item')

  } catch (error) {
    console.error('❌ Error seeding data:', error.message)
    process.exit(1)
  }
}

seedData()
