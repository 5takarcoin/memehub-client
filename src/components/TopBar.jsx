import UserButton from "./UserButton";

function TopBar() {
  return (
    <div className="mx-4 flex items-center gap-4">
      <div className="flex-1 bg-[#f1f1f1] rounded-2xl p-4 flex items-center gap-4">
        <img src="/general/search.vg" alt="" />
        <input type="text" placeholder="Search " />
      </div>
      <UserButton />
    </div>
  );
}

export default TopBar;
