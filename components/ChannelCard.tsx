import Link from "next/link";
import { Snippet, Id } from "@/utils/interfaces";

interface VideoCardProps {
  channelDetail: {
    id: Id;
    snippet: Snippet;
  };
}

const ChannelCard = ({ channelDetail }: VideoCardProps) => {
  return (
    <div className="card w-96  shadow-xl ">
      <Link href={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="w-96 card  shadow-xl">
          <figure>
            <img
              className="rounded-[50%] mt-8 "
              width={320}
              src={channelDetail?.snippet.thumbnails?.high?.url}
              alt="Channel Picture"
            />
          </figure>
          <div className=" card-body ">
            <h2 className=" card-title  self-center">
              {channelDetail.snippet.channelTitle}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
