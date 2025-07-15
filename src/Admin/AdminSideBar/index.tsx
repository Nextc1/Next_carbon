import {
  faChartPie,
  faCoins,
  faHouse,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/AuthContext";

const AdminSideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "All Projects", icon: faHouse, path: "/admin" },
  ];

  const accountItems = [
    { name: "Users", icon: faChartPie, path: "/admin/users" },
    { name: "Assets", icon: faRightLeft, path: "/admin/assets" },
    { name: "Profile", icon: faCoins, path: "/admin/profile" },
  ];

  const handleMenuClick = (item: { path: string }) => {
    navigate(item.path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative h-full">
      {isSideBarOpen ? (
        <Button
          variant="outline"
          size="sm"
          className="absolute top-1 -right-[31px] !size-8 rounded-l-none"
          onClick={() => setIsSideBarOpen(false)}
        >
          <X />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1 -right-8 !size-8"
          onClick={() => setIsSideBarOpen(true)}
        >
          <Menu />
        </Button>
      )}

      <aside
        className={`${
          isSideBarOpen ? "w-[16rem]" : "hidden"
        } h-full bg-gray-100 border-r border-gray-200 flex flex-col justify-between`}
      >
        <div className="p-6">
          <Link
            to="/admin"
            className="mt-6 mb-12 text-center text-3xl font-extrabold text-black hover:text-black"
          >
            NextCarbon Admin
          </Link>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-gray-500 text-md mt-2">Menu</h2>
              <hr className="w-full h-[2px] bg-gray-200 mt-2 mb-3" />
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
                      isActive(item.path)
                        ? "bg-gray-200 font-semibold"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleMenuClick(item)}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span className="text-black">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-gray-500 text-md mt-4">
                Admin Access
              </h2>
              <hr className="w-full h-[2px] bg-gray-200 mt-2 mb-3" />
              <ul className="space-y-2">
                {accountItems.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
                      isActive(item.path)
                        ? "bg-gray-200 font-semibold"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleMenuClick(item)}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span className="text-black">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4">
          <Button className="w-full text-lg" variant="default" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default AdminSideBar;
