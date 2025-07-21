import AdminSideBar from "./AdminSideBar";

interface AdminProps {
  children?: React.ReactNode;
}

const Admin = ({ children }: AdminProps) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div className="w-[250px] fixed top-0 left-0 h-screen border-r bg-background z-10">
        <AdminSideBar />
      </div>

      {/* Main Content */}
      <main className="ml-[250px] flex-1 py-8 px-6 overflow-y-auto min-h-screen bg-muted">
        {children}
      </main>
    </div>
  );
};

export default Admin;
