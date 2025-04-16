import Image from "./Image";

function PostInteractions() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-semibold">
        <Image path={"/general/react.svg"} />
        <Image path={"/general/share.svg"} />
        <Image path={"/general/more.svg"} />
      </div>
      <button className="bg-[#e5829] text-white border-none rounded-3xl p-4 font-bold cursor-pointer">
        Save
      </button>
    </div>
  );
}

export default PostInteractions;
