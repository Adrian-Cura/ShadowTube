import Link from "next/link";
import { Snippet, Id, statistics } from "@/utils/interfaces";
import { useState } from "react";
import Image from "next/image";

interface VideoCardProps {
  channelDetail: {
    id: Id;
    snippet: Snippet;
    statistics?: statistics;
  } | null;
}

const ChannelCard = ({ channelDetail }: VideoCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="card w-96  shadow-xl ">
      <Link href={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="w-96 card  shadow-xl">
          <figure>
            {!imageLoaded && (
              <div className="flex justify-center items-center h-[280px]">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
              </div>
            )}
            <Image
              className={`rounded-[50%] mt-8 ${!imageLoaded ? "hidden" : ""}`}
              width={280}
              height={288}
              src={channelDetail?.snippet.thumbnails?.high?.url as string}
              alt="Channel Picture"
              onLoad={() => setImageLoaded(true)}
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
