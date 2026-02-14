// Seed music videos into Sanity
const PROJECT_ID = 'zmwf3iga'
const DATASET = 'production'
const API_VERSION = '2024-02-14'
const WRITE_TOKEN = 'sklYxTzjpWSuhUKzfjsstQKS3OWk5xMCfrdOh0GG0CQ9V5fCr4AwjFGUmJipV1CoGbAXkrz1JzQyjLLpRGJ5Tmstp2YzYrM7cGh8WQpftc7E9w7rV004IwXN3FiF9QnBDSxvJTXlwwVYKsa18A5Uba8n8v2nCUjr8utwTpn6nACWnFvUNbzR'

const musicVideos = [
  {
    _type: 'musicVideo',
    title: 'Humphrey Mubba - KWETU MASHARIKI',
    description: 'Kwetu Mashariki is a song telling the real story about Africa focusing on specific country Tanzania that has so many incredible things like Mount Kilimanjaro, Serengeti National park and so many tourists sites. Despite all this beautiful sites this songs talks about three common enemy that the people are facing which are diseases, alot of ignorance and poverty.',
    videoType: 'youtube',
    youtubeUrl: 'https://www.youtube.com/watch?v=NmwDP-a36mQ',
    order: 1
  },
  {
    _type: 'musicVideo',
    title: 'Humphrey Mubba - SUBLIMITY',
    description: 'I have experienced some of enjoyable, beautiful moments in my life that i cannot be able to explain. All of this moments are wrapped up in this song and i hope it will make you remember some moments in your life.',
    videoType: 'youtube',
    youtubeUrl: 'https://www.youtube.com/watch?v=umA0Nb9IZ1M',
    order: 2
  },
  {
    _type: 'musicVideo',
    title: 'Humphrey Mubba - DARAJA',
    description: 'Daraja is a Swahili word that means bridge. This song talks about two people meeting in a bridge and both of them they have a common goal that they are supposed to accomplish. The song explains that having a certain desire or wish without putting in the work then it is just a dream and nothing else. Enjoy some good music.',
    videoType: 'youtube',
    youtubeUrl: 'https://www.youtube.com/watch?v=f0wxCrTMKh8',
    order: 3
  },
  {
    _type: 'musicVideo',
    title: 'Humphrey Mubba - NAUGULIA',
    description: 'Nauglia is a swahili song that talks alot about love and how love at first sight makes someone feel. Enjoy!',
    videoType: 'youtube',
    youtubeUrl: 'https://www.youtube.com/watch?v=2F4bgNYu6qE',
    order: 4
  },
  {
    _type: 'musicVideo',
    title: 'Humphrey Mubba - BROKEN STRING',
    description: 'The bitterest tears shed over graves are for words left unsaid and deeds left undone',
    videoType: 'youtube',
    youtubeUrl: 'https://www.youtube.com/watch?v=xdEO6FcbBj4',
    order: 5
  },
  {
    _type: 'musicVideo',
    title: 'Humphrey Mubba - HESABU',
    description: 'Hesabu is a powerful tune that reminds every tanzania of the song that we were taught in school in order to love mathematics. In this peace Hesabu is used in the same way but specifically to direct the person in life.',
    videoType: 'youtube',
    youtubeUrl: 'https://www.youtube.com/watch?v=0yEr5uy_GJ0',
    order: 6
  }
]

async function createVideo(video) {
  const mutations = [{ create: video }]

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
    const text = await response.text()
    throw new Error(`Failed: ${response.status} - ${text}`)
  }

  return await response.json()
}

async function seedMusicVideos() {
  console.log('🎬 Adding music videos to Sanity...\n')

  let successCount = 0
  let errorCount = 0

  for (const video of musicVideos) {
    try {
      await createVideo(video)
      console.log(`✅ Created: ${video.title}`)
      successCount++
    } catch (error) {
      console.log(`✗ Failed: ${video.title} - ${error.message}`)
      errorCount++
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`  Created: ${successCount}`)
  console.log(`  Failed: ${errorCount}`)

  if (errorCount === 0) {
    console.log(`\n🎉 All ${successCount} music videos added to Sanity!`)
    console.log(`\nNext:`)
    console.log(`1. Open Sanity Studio (http://localhost:3333)`)
    console.log(`2. Go to "Music Video" section`)
    console.log(`3. You'll see all 6 videos there`)
    console.log(`4. Edit/add more videos anytime!`)
  }
}

seedMusicVideos()
