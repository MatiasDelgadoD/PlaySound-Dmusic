import { getYoutubeVideos } from "./index"
import YoutubeSlider from "./youtubeslider"

export default async function YoutubeWindows() {
  //const safeVideos = videos?.items ?? []

  const videos = await getYoutubeVideos()
  return (
    
    <YoutubeSlider videos={videos.items} />
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

