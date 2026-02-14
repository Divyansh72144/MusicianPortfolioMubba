// GROQ queries for Sanity

export const MERCHANDISE_QUERY = `*[_type == "merchandise"] | order(order asc) {
  _id,
  name,
  price,
  category,
  image {
    asset->{
      _id,
      url
    }
  },
  imageUrl,
  description,
  order
}`

export const TOUR_DATES_QUERY = `*[_type == "tourDate" && date >= now()] | order(date asc) {
  _id,
  venue,
  location,
  date,
  time,
  ticketUrl,
  status,
  order
}`

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  title,
  description,
  logo {
    asset->{
      _id,
      url
    }
  },
  tourImage {
    asset->{
      _id,
      url
    }
  },
  newsletterTitle,
  newsletterText
}`

export const MERCHANDISE_BY_ID_QUERY = (id) => `*[_type == "merchandise" && _id == "${id}"][0]`

export const MUSIC_VIDEOS_QUERY = `*[_type == "musicVideo"] | order(order asc) {
  _id,
  title,
  description,
  videoType,
  youtubeUrl,
  vimeoUrl,
  embedCode,
  thumbnail {
    asset->{
      _id,
      url
    }
  },
  order
}`

export const ARTIST_BIO_QUERY = `*[_type == "artistBio"][0] {
  _id,
  bio
}`

export const HOME_BIO_QUERY = `*[_type == "homeBio"][0] {
  _id,
  bio
}`

export const YELLOW_BOX_QUERY = `*[_type == "yellowBoxHomepage"][0] {
  _id,
  text
}`
