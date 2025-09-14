import { getYoutubeVideos } from "./index"
import YoutubeSlider from "./youtubeslider"

export default async function YoutubeWindows() {
  const videos = await getYoutubeVideos()
  return (
    <YoutubeSlider videos={videos.items} />
  )
}
