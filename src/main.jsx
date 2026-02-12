import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Silent background preloader - doesn't block rendering
const preloadImagesInBackground = () => {
  const images = [
    new URL('./images/mubbaHome.webp', import.meta.url).href,
    new URL('./images/MubbaAbout.webp', import.meta.url).href,
    new URL('./images/MubbaGear.webp', import.meta.url).href,
    new URL('./images/mubbaTour.webp', import.meta.url).href,
  ]

  images.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

// Start preloading immediately in background
preloadImagesInBackground()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
