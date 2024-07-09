import { Item } from "@/utils/interfaces";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

export interface VideosProps {
  items?: Item[] | null;
  direction?: string;
  channel?: boolean;
  justify?: string;
}

const Videos = ({ items, direction, channel, justify }: VideosProps) => {
  return (
    <div
      className={`md:m-2 gap-4 flex-wrap w-screen lg:w-auto   ${
        direction || "flex justify-center"
      } ${justify && justify}  `}
    >
      {items ? (
        items.map((video) => (
          <div key={video.id.videoId ? video.id.videoId : video.id.channelId}>
            {channel
              ? video.id.videoId && <VideoCard video={video} />
              : (video.id.videoId && <VideoCard video={video} />) ||
                (video.id.channelId && <ChannelCard channelDetail={video} />)}
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default Videos;
