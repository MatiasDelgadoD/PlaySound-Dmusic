import { getYoutubeVideos } from "./index"
import YoutubeSlider from "./youtubeslider"

export default async function YoutubeWindows() {
  const videos = await getYoutubeVideos()
  const safeVideos = videos?.items ?? []
  return (
    
    <YoutubeSlider videos={safeVideos} />
  )
}


// import { getYoutubeVideos } from "./index"
// import YoutubeSlider from "./youtubeslider"

// export default async function YoutubeWindows() {
//   const videos = await getYoutubeVideos()

//   // fallback para evitar error
//   const safeVideos = videos?.items ?? []

//   return (
//     <YoutubeSlider videos={safeVideos} />
//   )
// }

