import axios from "axios"

interface UnsplashImage {
  src: string
  id: string
}

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
  },
})

export type { UnsplashImage }
