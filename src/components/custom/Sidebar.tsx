import {
    faChartPie,
    faCoins,
    faHouse,
    faRightLeft,
    faSeedling,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({isOpen}:{isOpen:boolean}) => {

  const [activeMenu, setActiveMenu] = useState<string>("All Properties");

  const navigate = useNavigate()
    const menuItems = [
        { name: "All Projects", icon: faHouse, path: "/dashboard" },
        {
          name: "Launchpad / Invest",
          icon: faSeedling,
          path: "/dashboard/launchpad",
        },
        { name: "Buy / Trade", icon: faCoins, path: "/dashboard/trade" },
      ];

    const accountItems = [
        { name: "Your Portfolio", icon: faChartPie, path: "/dashboard/portfolio" },
        {
          name: "Transaction History",
          icon: faRightLeft,
          path: "/dashboard/history",
        },
      ];


  return (
    <div className="fixed left-0 z-20 lg:relative h-full">
      {/* <div className="absolute  top-12 -right-10  p-2 bg-gray-200 rounded-full" onClick={handleMenu}>{isOpen?<ChevronFirst />:<ChevronLast />}</div> */}
      <aside className={`${isOpen?'w-[18rem]':'hidden'} h-full bg-gray-100 border-r border-gray-200`}>
        <div className="p-6">
          <h1 className="mt-10 lg:mt-6 mb-12 text-center text-4xl font-black">Next Carbon</h1>
          <div className="space-y-6">
            <div className="flex flex-col items-start w-full">
              <h2 className="font-semibold text-gray-500 text-md mb-">
                Marketplace
              </h2>
              <hr className="w-full h-[2px] bg-gray-200 mt-2"/>
              <div className="py-0 my-0 mb-2 divider"></div>
              <ul className="w-full space-y-2">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
                      activeMenu === item.name
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
            <div className="flex flex-col items-start w-full pt-4">
              <h2 className="font-semibold text-gray-500 text-md mb-">
                Your Account
              </h2>

              <hr className="w-full h-[2px] bg-gray-200 mt-2"/>
              <div className="py-0 my-0 mb-2 divider"></div>
              <ul className="w-full space-y-2">
                {accountItems.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
                      activeMenu === item.name
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
      </aside>
    </div>
  )
}

export default Sidebar