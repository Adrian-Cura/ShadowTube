import { Item } from "@/utils/interfaces";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

interface VideosProps {
  items: Item[] | null;
  direction?: string;
  channel?: boolean;
  justify?: string;
}

const Videos = ({ items, direction, channel, justify }: VideosProps) => {
  return (
    <div
      className={`m-2 gap-4 ${direction || "flex"} ${
        justify && justify
      } flex-wrap`}
    >
      {items?.map((video) => (
        <div key={video.id.videoId ? video.id.videoId : video.id.channelId}>
          {channel
            ? video.id.videoId && <VideoCard video={video} />
            : (video.id.videoId && <VideoCard video={video} />) ||
              (video.id.channelId && <ChannelCard channelDetail={video} />)}
        </div>
      ))}
    </div>
  );
};

export default Videos;
