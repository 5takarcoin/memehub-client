import { Link } from "react-router";
import Image from "./Image";

function LeftBar() {
  return (
    <div className="flex flex-col justify-between h-screen items-center sticky top-0 w-16 py-4 border-[#e9e9e9] border-r">
      <div className="flex flex-col items-center gap-6">
        <Link
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          to="/"
        >
          <Image className="w-6 h-6" path="/general/logo.png" alt="" />
        </Link>
        <Link
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          to="/"
        >
          <Image path="/general/home.svg" alt="" />
        </Link>
        <Link
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          to="/create"
        >
          <Image path="/general/create.svg" alt="" />
        </Link>
        <Link
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          to="/"
        >
          <Image path="/general/updates.svg" alt="" />
        </Link>
        <Link
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          to="/"
        >
          <Image path="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link
        className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <Image path="/general/more.svg" alt="" />
      </Link>
    </div>
  );
}

export default LeftBar;
