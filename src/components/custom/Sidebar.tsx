import {
  faChartPie, faCoins,
  faHouse,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/AuthContext";

const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState<string>("All Properties");
  const { handleLogout } = useAuth();

  const navigate = useNavigate()
  const menuItems = [
    { name: "All Projects", icon: faHouse, path: "/dashboard" }
  ];

  const accountItems = [
    { name: "Your Portfolio", icon: faChartPie, path: "/dashboard/portfolio" },
    {
      name: "Transaction History", icon: faRightLeft, path: "/dashboard/history",
    },
    { name: "Offset", icon: faCoins, path: "/offset" }
  ];


  return (
    <div className=" left-0 z-20 relative h-full">
      {isSideBarOpen ? (
        <Button
          variant={"outline"}
          size={"sm"}
          className="absolute top-1 -right-[31px] !size-8 rounded-l-none"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <X />
        </Button>
      ) : (
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-1 -right-8 !size-8"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <Menu />
        </Button>
      )}

      <aside className={`${isSideBarOpen ? 'w-[16rem]' : 'hidden'} h-full bg-gray-100 border-r border-gray-200 flex flex-col justify-between`}>
        <div className="p-6">
          <Link to={"/"} className="mt-10 lg:mt-6 mb-12 text-center text-4xl text-black font-extrabold hover:!text-black">Home</Link>
          <div className="space-y-6">
            <div className="flex flex-col items-start w-full">
              <h2 className="font-semibold text-gray-500 text-md mt-2">
                Marketplace
              </h2>
              <hr className="w-full h-[2px] bg-gray-200 mt-2" />
              <div className="py-0 my-0 mb-2 divider"></div>
              <ul className="w-full space-y-2">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${activeMenu === item.name
                      ? "bg-gray-200"
                      : "hover:bg-gray-200"
                      }`}
                    onClick={() => {
                      setActiveMenu(item.name);
                      navigate(item.path);
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span className="text-black">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start w-full pt-">
              <h2 className="font-semibold text-gray-500 text-md mb-">
                Your Account
              </h2>

              <hr className="w-full h-[2px] bg-gray-200 mt-2" />
              <div className="py-0 my-0 mb-2 divider"></div>
              <ul className="w-full space-y-2">
                {accountItems.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${activeMenu === item.name
                      ? "bg-gray-200 font-semibold"
                      : "hover:bg-gray-200"
                      }`}
                    onClick={() => {
                      setActiveMenu(item.name);
                      navigate(item.path);
                    }}
                  >
                    {/* <span>{item.icon}</span> */}
                    <FontAwesomeIcon icon={item.icon} />
                    <span className="text-black">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-4">
          <Button className="w-full text-lg" variant={"default"} onClick={() => handleLogout()}>Logout</Button>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar