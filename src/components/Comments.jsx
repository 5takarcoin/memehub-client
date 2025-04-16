import Image from "./Image";

function Comments() {
  return (
    <div className="flex-1 flex flex-col gap-4o min-h-0">
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
        <span>5 comments</span>

        <div className="flex gap-4">
          <Image
            className="w-8 h-8 rounded-full object-cover"
            path={"/general/noAvatar.png"}
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">John Doe</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium, quasi.
            </p>
            <span className="text-xs text-[#161616]">1h</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            className="w-8 h-8 rounded-full object-cover"
            path={"/general/noAvatar.png"}
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">John Doe</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium, quasi.
            </p>
            <span className="text-xs text-[#161616]">1h</span>
          </div>
        </div>

        <form className="bg-[#f1f1f1] p-4 rounded-4xl flex items-center gap-4">
          <input
            className="flex-1 border-none outline-none bg-transparent text-base"
            type="text"
            placeholder="Add a comment"
          />
          <div className="cursor-pointer text-xl relative">😂</div>
        </form>
      </div>
    </div>
  );
}

export default Comments;
