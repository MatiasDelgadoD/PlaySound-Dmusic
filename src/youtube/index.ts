export async function getYoutubeVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  const apiUrl = process.env.YOUTUBE_API_URL;
  const maxResults = 6;
try {
  const data = await fetch (
    `${apiUrl}?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&maxResults=${maxResults}`,
  );

  if (!data.ok){
    throw new Error("failet to fetch videos the youtube");
    
  }


  return await data.json();
} catch (error) {
  throw new Error("Error fetching YouTube data");
  }
}