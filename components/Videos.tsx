import { Item } from "@/utils/interfaces";

interface VideosProps {
  items: Item[] | null;
}

const Videos = ({ items }: VideosProps) => {
  return (
    <div className="m-2 w-full">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img
            onClick={() => console.log(items)}
            src={
              items
                ? items[0].snippet.thumbnails.high.url
                : "https://i.pinimg.com/originals/ff/e1/bb/ffe1bb70f9393f0c115df6a33773f937.gif"
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">
              {items ? items[0].snippet.channelTitle : ""}
            </div>
          </h2>
          <p>{items ? items[0].snippet.description : ""}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              {items ? items[0].snippet.publishTime : ""}
            </div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
