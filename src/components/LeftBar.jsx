import Image from "./Image";

function LeftBar() {
  return (
    <div className="flex flex-col justify-between h-screen items-center sticky top-0 w-16 py-4 border-[#e9e9e9] border-r">
      <div className="flex flex-col items-center gap-6">
        <a
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          href="/"
        >
          <Image className="w-6 h-6" path="/general/logo.png" alt="" />
        </a>
        <a
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          href="/"
        >
          <Image path="/general/home.svg" alt="" />
        </a>
        <a
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          href="/"
        >
          <Image path="/general/create.svg" alt="" />
        </a>
        <a
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          href="/"
        >
          <Image path="/general/updates.svg" alt="" />
        </a>
        <a
          className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
          href="/"
        >
          <Image path="/general/messages.svg" alt="" />
        </a>
      </div>
      <a
        className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
        href="/"
      >
        <Image path="/general/more.svg" alt="" />
      </a>
    </div>
  );
}

export default LeftBar;
