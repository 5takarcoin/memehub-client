import { useState } from "react";
import Image from "../components/Image";
import Gallery from "../components/Gallery";
import Collections from "../components/Collections";

function ProfilePage() {
  const [type, setType] = useState("saved");

  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        className="rounded-full object-cover"
        path={"/general/noAvatar.png"}
        width={100}
        height={100}
      />
      <h1 className="font-semibold text-4xl">John Doe</h1>
      <span className="font-light text-gray-500">@johndoe</span>
      <div className="font-semibold">10 followers · 2 followings</div>
      <div className="flex items-center gap-8">
        <Image path={"/general/share.svg"} />
        <div className="flex gap-4">
          <button className="border-none p-4 rounded-4xl font-bold cursor-pointer">
            Message
          </button>
          <button className="border-none p-4 rounded-4xl font-bold cursor-pointer bg-[#e50829] text-white hover:bg-[#c1011e]">
            Follow
          </button>
        </div>
        <Image path={"/general/more.svg"} />
      </div>
      <div className="flex gap-4 mt-8 mb-4 font-semibold">
        <span
          onClick={() => setType("created")}
          className={`${
            type === "created" && "border-b-2"
          } cursor-pointer py-2 hover:text-gray-500`}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={`${
            type === "saved" && "border-b-2"
          } cursor-pointer p-2 hover:text-gray-500`}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
}

export default ProfilePage;
