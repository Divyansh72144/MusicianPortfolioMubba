// Simple Sanity fetch using browser's fetch API with proxy
const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || 'zmwf3iga'
const DATASET = import.meta.env.VITE_SANITY_DATASET || 'production'
const API_VERSION = '2024-02-14'

// Helper function to fetch data from Sanity (via proxy to avoid CORS)
export async function fetchData(query) {
  try {
    // Use proxy in development, direct API in production
    const isDev = import.meta.env.DEV
    const baseUrl = isDev
      ? `/api/sanity/v${API_VERSION}/data/query/${DATASET}`
      : `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`

    const url = `${baseUrl}?query=${encodeURIComponent(query)}`

    const response = await fetch(url)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Sanity API error:', response.status, errorText)
      return null
    }

    const data = await response.json()

    if (data.error) {
      console.error('Sanity API error:', data.error)
      return null
    }

    return data.result
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null
  }
}
