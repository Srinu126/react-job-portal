import Header from "@/pages/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">Made with React.js,Tailwind and Supabase by Srinu Rachakonda</div>
    </div>
  );
};

export default AppLayout;
