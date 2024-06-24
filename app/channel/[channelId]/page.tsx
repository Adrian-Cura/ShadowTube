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

  return (
    <div>
      <div className="flex justify-center">
        <ChannelCard channelDetail={channelData} />
      </div>
      <section>
        <Videos items={videos} channel={true} justify={"justify-center"} />
      </section>
    </div>
  );
};

export default channelPage;
