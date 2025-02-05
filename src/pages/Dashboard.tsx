import AllProducts from "@/components/custom/dashboard/pages/AllProducts"
import Sidebar from "@/components/custom/Sidebar"

export const Dashboard = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />


      {/* //main content  */}

      <div className="flex flex-col flex-1">
        {/* // header  */}
        <header className="w-full flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
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
          <div className="flex items-center space-x-4">
            {/* <WalletMultiButton
              style={{
                backgroundColor: "black",
                padding: "1rem",
                height: "45px",
                fontSize: "15px",
                borderRadius: "10px",
                width: "150px",
                justifyContent: "center",
              }}
            /> */}
            <button className="flex flex-row bg-black items-center gap-x-3 px-4 py-2 !rounded-[10px] h-[40px] font-semibold text-white">
              <p>Wallet</p>
            </button>
          </div>
        </header>
        {/* Content Area */}
        <main className="flex-1 py-6 overflow-auto bg-white">
          <AllProducts />
        </main>

      </div>
    </div>
  )
}
