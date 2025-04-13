import { useState } from "react";

function UserButton() {
  const [open, setOpen] = useState(false);

  const currentUser = true;

  return currentUser ? (
    <div className="hidden md:flex items-center gap-4 relative">
      <img
        className="w-9 h-9 rounded-full object-cover"
        src="/general/noAvatar.png"
        alt=""
      />
      <img
        onClick={() => setOpen(!open)}
        className="w-4 h-4 cursor-pointer rounded-full object-cover"
        src="/general/arrow.svg"
        alt=""
      />
      {open && (
        <div className="absolute right-0 top-[120%] p-4 rounded-lg bg-white z-[999] flex flex-col text-sm shadow">
          <div className="cursor-pointer p-2 rounded-lg hover:bg-[#f1f1f1] hover:text-gray-700">
            Profile
          </div>
          <div className="cursor-pointer p-2 rounded-lg hover:bg-[#f1f1f1] hover:text-gray-700">
            Setting
          </div>
          <div className="cursor-pointer p-2 rounded-lg hover:bg-[#f1f1f1] hover:text-gray-700">
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <a className="text-lg p-4 rounded-4xl hover:bg-[#f1f1f1]" href="/">
      Login/Signup
    </a>
  );
}

export default UserButton;
