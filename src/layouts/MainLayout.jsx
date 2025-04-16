import { Outlet } from "react-router";
import LeftBar from "../components/LeftBar";
import TopBar from "../components/TopBar";

function MainLayout() {
  return (
    <div className="flex gap-4 w-full">
      <LeftBar />
      <div className="flex-1 mr-4">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
