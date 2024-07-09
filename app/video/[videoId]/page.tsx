"use client";

import ReactPlayer from "react-player";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchResult } from "@/utils/fetchFromAPI";
import Link from "next/link";
import Videos from "@/components/Videos";

import { Item } from "@/utils/interfaces";

const VideoPage = () => {
  const { videoId } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState<Item[] | null>(null);

  useEffect(() => {
    fetchResult(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchResult(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => setVideos(data.items));
  }, [videoId]);

  if (!videoDetail)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className=" w-full h-full  flex-col xl:flex xl:flex-row gap-16 lg:sticky p-4 ">
      <div className="xl:w-2/3 xl:sticky xl:top-24 h-fit mt-3 ">
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width="100%"
            height="70vh"
            controls
          />
        </div>
        <h2 className=" mt-2 font-bold text-2xl">{title}</h2>
        <div className="flex justify-between mt-3">
          <Link
            href={`/channel/${channelId}`}
            className=" decoration-transparent"
          >
            <p className=" font-semibold">{channelTitle}</p>
          </Link>
          <div className="flex gap-6 font-bold pr-2">
            <p>{viewCount} views</p>
            <p>{likeCount} likes</p>
          </div>
        </div>
      </div>
      <aside>
        <Videos
          items={videos}
          direction={"  flex justify-center xl:flex-col mt-6"}
        />
      </aside>
    </div>
  );
};

export default VideoPage;
