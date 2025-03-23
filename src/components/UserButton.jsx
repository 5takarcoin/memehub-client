function UserButton() {
  const currentUser = false;

  return currentUser ? (
    <div className="flex items-center gap-4">
      <img
        className="w-9 h-9 rounded-full object-cover"
        src="/general/noAvatar.png"
        alt=""
      />
      <img
        className="w-9 h-9 rounded-full object-cover"
        src="/general/arrow.svg"
        alt=""
      />
    </div>
  ) : (
    <a href="/">Login/Signup</a>
  );
}

export default UserButton;
