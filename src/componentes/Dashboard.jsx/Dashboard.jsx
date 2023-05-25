import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header'; 
import Sidebar from '../SideBar/sideBar';
import BarChartComponent from '../BarChart/BarChart';

const Dashboard = () => {
  return (
    <div className="dashboard">


      <Header />
      <div className="content">

        <Sidebar />
        <main>
        <h1>Dashboard</h1>
            <BarChartComponent />

      
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
