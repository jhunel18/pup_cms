import React from "react";
import RootLayout from "../shared/components/Layouts/RootLayout";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <RootLayout>
        <div className="basis-[88%] border">d</div>
      </RootLayout>
    </div>
  );
};

export default DashboardPage;
