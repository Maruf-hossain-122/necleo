import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardContent from "../../components/DashboardContent/DashboardContent";

const Dashboard = ({ isSidebarVisible }) => {
  return (
    <div
      className={`${
        isSidebarVisible ? "grid-cols-[200px,auto]" : "grid-cols-1"
      } grid md:grid-cols-[200px,auto]`}
    >
      <div className={`${isSidebarVisible ? "block" : "hidden"} md:block`}>
        <Sidebar isSidebarVisible={isSidebarVisible} />
      </div>
      <div>
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
