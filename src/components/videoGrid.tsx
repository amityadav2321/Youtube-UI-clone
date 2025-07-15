import { VideoCard } from "@/components/videoCard";

const BASE_VIDEOS = [
  {
    title: "Squid Game: Season 3 | Hindi Official",
    description: "Trailer | Netflix India",
    thumb: "thumb1.jpg",
    channel: "channel1.png",
    channelname: "Netflix India",
    views: "12.3M Views",
    timestamp: "4 days ago",
  },
  {
    title: "Jhol | Coke Studio Pakistan",
    description: "Season 15 | Maanu x Annural Khalid",
    thumb: "thumb2.jpg",
    channel: "channel2.png",
    channelname: "Coke Studio",
    views: "122.3M Views",
    timestamp: "4 months ago",
  },
  {
    title: "Jetha Jasoos",
    description: "Taarak Mehta Ka Ooltah Chashmah",
    thumb: "thumb3.jpg",
    channel: "channel3.png",
    channelname: "Sony LIV",
    views: "4.3M Views",
    timestamp: "3 months ago",
  },
  {
    title: "How Does LLM Work",
    description: "Code Implementation",
    thumb: "thumb4.jpg",
    channel: "channel4.png",
    channelname: "Rohit Negi",
    views: "9.1K Views",
    timestamp: "5 days ago",
  },
  {
    title: "Super Amazing Jungle Survival Tools",
    description: "जंगल में जाओ तो ये गैजेट्स ले जाना मत भूलना",
    thumb: "thumb5.jpg",
    channel: "channel5.png",
    channelname: "Crazy XYZ",
    views: "369k Views",
    timestamp: "3 hours ago",
  },
  {
    title: "Jethalal ne Tod Di Party Sharty Ki Bottle!",
    description: "Taarak Mehta Ka Ooltah Chashmah",
    thumb: "thumb6.jpg",
    channel: "channel3.png",
    channelname: "Sony LIV",
    views: "2.3M Views",
    timestamp: "2 months ago",
  },
];

// Repeat the base videos 3 times (18 cards total)
const VIDEOS = [...BASE_VIDEOS, ...BASE_VIDEOS, ...BASE_VIDEOS];

export const VideoGrid = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {VIDEOS.map((video, idx) => (
        <div key={idx}>
          <VideoCard
            title={video.title}
            description={video.description}
            thumb={video.thumb}
            channel={video.channel}
            channelname={video.channelname}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
};
