import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import TopBanner from "./components/custom/TopBanner"
// import { useLoadingStore } from "./state-management/store";
// import LoadingOverlay from "./components/custom/LoadingOverlay";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/custom/Navbar";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllProducts from "./components/custom/dashboard/pages/AllProducts";

function App() {
  // const { isLoading } = useLoadingStore();
  const location = useLocation();
  const isDashboardPage = location.pathname.includes("/dashboard");
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* {location.pathname.includes("/dashboard") ? null : <TopBanner />}
       {location.pathname.includes("/dashboard") ? null : <Navbar />} */}
      {!isDashboardPage && <TopBanner />}
      {!isDashboardPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard>
          <AllProducts />
        </Dashboard>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App