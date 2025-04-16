import { Link } from "react-router";
import Image from "../components/Image";
import PostInteractions from "../components/PostInteractions";
import Comments from "../components/Comments";

function Postpage() {
  return (
    <div className="flex justify-center gap-8">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
      <div className="w-full mr-4 lg:mr-0 lg:w-3/4 max-h-[820px] flex flex-col md:flex-row border overflow-hidden border-[#e9e9e9] rounded-4xl">
        <div className="flex-1 bg-[#c0a68c]">
          <Image
            path={"/pins/pin1.jpeg"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 h-full flex flex-col gap-8 p-4 overflow-hidden">
          <PostInteractions />
          <Link to="/" className="flex items-center gap-2">
            <Image
              path={"/general/noAvatar.png"}
              className="w-8 h-8 rounded-b-full"
            />
            <span className="text-sm">User name</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default Postpage;
