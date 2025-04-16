import { useState } from "react";
import { Link } from "react-router";
import Image from "./Image";

function GalleryItem({ item }) {
  const [hovering, setHovering] = useState(false);

  const optHeight = (540 * item.height) / item.width;
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="flex relative"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image
        path={item.media}
        className="rounded-2xl w-full object-cover"
        width={540}
        height={optHeight}
      />
      <Link
        className={`${
          !hovering && "hidden"
        } absolute w-full h-full top-0 left-0 bg-black opacity-30 rounded-2xl`}
        to={"/pin/${item.id}"}
      ></Link>
      <button
        className={`${
          !hovering && "hidden"
        } bg-[#e50829] absolute top-4 right-4 text-white rounded-3xl py-3 px-4 font-semibold cursor-pointer max-w-max border-none`}
      >
        Save
      </button>
      <div
        className={`${
          !hovering && "hidden"
        } absolute bottom-4 right-4 flex items-center gap-2`}
      >
        <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-none cursor-pointer hover:bg-[#f1f1f1]">
          <Image className="h-5 w-5" path="/general/share.svg" alt="" />
        </button>
        <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-none cursor-pointer hover:bg-[#f1f1f1]">
          <Image className="h-5 w-5" path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default GalleryItem;
