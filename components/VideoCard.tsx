import { Snippet, Id } from "@/utils/interfaces";
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
  const formattedDate = publishTime.split("T")[0];

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-">
      <figure>
        <Link href={`/video/${videoId}`}>
          <img
            onClick={() => console.log(videoId)}
            width={384}
            height={288}
            src={snippet.thumbnails.high.url}
            alt="Portada video"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{snippet.channelTitle}</div>
        </h2>
        <p>{snippet.title}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
