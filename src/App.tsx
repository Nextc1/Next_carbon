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
import AuthMiddleware from "./components/custom/auth/AuthMiddleware";
import PropertyView from "./pages/PropertyView";

function App() {
  // const { isLoading } = useLoadingStore();
  const location = useLocation();
  const isDashboardPage = location.pathname.includes("/dashboard");
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {!isDashboardPage && <TopBanner />}
      {!isDashboardPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard>
          <AllProducts />
        </Dashboard>} />
        <Route path="/property/view/:id" element={<PropertyView/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
                path="/test"
                element={
                  <AuthMiddleware>
                    <Dashboard>
                      <div className="p-10">Protected Page</div>
                    </Dashboard>
                  </AuthMiddleware>
                }
              />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App