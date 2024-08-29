import { Snippet, Id } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
  video: {
    id: Id;
    snippet: Snippet;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const { publishTime } = snippet;
  const formattedDate = publishTime?.split("T")[0] || "";

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <figure>
        <Link href={`/video/${videoId}`}>
          <Image
            width={384}
            height={288}
            src={snippet.thumbnails.high?.url || "loading"}
            alt="Portada video"
            priority={true}
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{snippet.channelTitle}</div>
        </h2>

        <Link href={`/video/${videoId}`}>
          <p>{snippet.title}</p>
        </Link>
        <div className="card-actions justify-end mt-2">
          <div className=" badge badge-outline">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
