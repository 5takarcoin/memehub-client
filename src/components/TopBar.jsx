import UserButton from "./UserButton";

function TopBar() {
  return (
    <div className=" my-4 flex items-center gap-4">
      <div className="flex-1 bg-[#f1f1f1] rounded-2xl p-4 flex items-center gap-4">
        <img src="/general/search.svg" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent border-none outline-none text-lg"
        />
      </div>
      <UserButton />
    </div>
  );
}

export default TopBar;
