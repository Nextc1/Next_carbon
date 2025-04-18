/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidebar from "@/components/custom/Sidebar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/AuthContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Dashboard = ({ children }: any) => {
  // const { handleLogout } = useAuth()
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const { handleLogout } = useAuth();

  return (
    <div className="flex h-screen border-t">
      <Sidebar isOpen={isSideBarOpen} />
      <div className="flex flex-col justify-center items-center flex-1 h-full ">
        <header className=" flex items-center w-full justify-center h-16 px-4 bg-white border-b border-gray-200">
          <div className="flex items-center container justify-between w-full">
            <div className="flex items-center space-x-4">
              {isSideBarOpen ? (
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="z-30 "
                  onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                >
                  <X />
                </Button>
              ) : (
                <Button
                  variant={"outline"}
                  size={"icon"}
                  onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                >
                  <Menu />
                </Button>
              )}
              <h2 className="text-2xl text-black">
                {location.pathname.includes("/launchpad")
                  ? "Launchpad / Invest"
                  : location.pathname.includes("/trade")
                    ? "Buy / Trade"
                    : location.pathname.includes("/portfolio")
                      ? "Your Portfolio"
                      : location.pathname.includes("/history")
                        ? "Transaction History"
                        : location.pathname.includes("/sell")
                          ? "Sell"
                          : location.pathname.includes("/transfer")
                            ? "Transfer"
                            : "All Projects"}
              </h2>
            </div>
            <button
              onClick={handleLogout}
              className="flex flex-row bg-black items-center gap-x-3 px-4 py-2 !rounded-[10px] h-[40px] font-semibold text-white"
            >
              Sign out
            </button>
          </div>
          {/* <div className="flex items-center justify-between space-x-4">

          </div> */}
        </header>
        {/* Content Area */}
        <main className="flex-1 flex py-6 overflow-auto justify-center min-w-full">
          <div className="container mx-4 md:mx-5">{children}</div>
        </main>
      </div>
    </div>
  );
};
