import Link from "next/link";
import { Snippet, Id, statistics } from "@/utils/interfaces";

interface VideoCardProps {
  channelDetail: {
    id: Id;
    snippet: Snippet;
    statistics?: statistics;
  } | null;
}

const ChannelCard = ({ channelDetail }: VideoCardProps) => {
  return (
    <div className="card w-96  shadow-xl ">
      <Link href={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="w-96 card  shadow-xl">
          <figure>
            <img
              className="rounded-[50%] mt-8 "
              width={280}
              src={channelDetail?.snippet.thumbnails?.high?.url}
              alt="Channel Picture"
            />
          </figure>
          <div className=" card-body flex-col ">
            <h2 className=" card-title  self-center">
              {channelDetail?.snippet.channelTitle ||
                channelDetail?.snippet.title}
            </h2>
            {channelDetail?.statistics?.subscriberCount && (
              <p className="text-center text-gray-300 ">
                {channelDetail.statistics.subscriberCount} Subscribers
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
