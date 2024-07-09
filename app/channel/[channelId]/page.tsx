"use client";

import Videos from "@/components/Videos";
import { useParams } from "next/navigation";
import { fetchResult } from "@/utils/fetchFromAPI";
import { useState, useEffect } from "react";
import ChannelCard from "@/components/ChannelCard";

const channelPage = () => {
  const { channelId } = useParams();
  const [videos, setVideos] = useState(null);
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    fetchResult(`
search?channelId=${channelId}&part=snippet%2Cid&order=date`).then((data) => {
      setVideos(data.items);
    });

    fetchResult(`
channels?part=snippet&id=${channelId}`).then((data) => {
      setChannelData(data.items[0]);
    });
  }, [channelId]);

  if (!channelData)
    <div className="flex justify-center items-center">
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
    </div>;

  return (
    <div className=" px-4 flex-col justify-center items-center">
      <div className="flex justify-center">
        <ChannelCard channelDetail={channelData} />
      </div>
      <section className=" ">
        <Videos items={videos} channel={true} justify={"justify-center"} />
      </section>
    </div>
  );
};

export default channelPage;
