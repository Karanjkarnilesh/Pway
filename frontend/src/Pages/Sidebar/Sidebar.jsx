// src/Sidebar.js
import React, { useState } from 'react';
import { FaArrowsRotate } from "react-icons/fa6";
import {
  FaTachometerAlt,
  FaDollarSign,
  FaMoneyBillAlt,
  FaMapMarkedAlt,
  FaChartPie,
  FaFileAlt,
  FaQuestionCircle,
  FaBell,
  FaMapPin,
  FaBookOpen,
  FaCalendarAlt,
  FaExchangeAlt,
  FaTools,
  FaChevronDown,
  FaFileUpload,
  FaFileDownload,
  FaBars,

} from 'react-icons/fa';
const Sidebar = ({ isSidebarClose, setIsSidebarClose }) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isBatchReportOpen, setIsBatchReportOpen] = useState(false);

  return (

    <>
      <div className="flex items-center gap-4">
             <button
               className="text-xl cursor-pointer"
               onClick={() => setIsSidebarClose(!isSidebarClose)}
             >
               <FaBars fontSize="24px" />
             </button>
           </div>
      <div className={` h-screen bg-white shadow-md border-r text-sm font-medium ${isSidebarClose ? 'maxwidth' : 'minwidth'
        }`}>
          {isSidebarClose &&
        <img src="/images/logo.jpg" alt="Pipeway" className="h-10 " />
          }
        <ul className={`max-w-256 space-y-1 p-2 text-blue-900`}>

          {/* Dashboard dropdown */}
          <li>
            <button
              onClick={() => setIsDashboardOpen(!isDashboardOpen)}
              className="flex justify-between items-center w-full px-3 py-2 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <FaTachometerAlt  fontSize="24px"/>
                 {isSidebarClose &&
                <span>Dashboard</span>
                 }
              </div>
              <FaChevronDown className={`transform transition-transform ${isDashboardOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDashboardOpen && (
              <ul className="pl-8 pt-1 space-y-1">
                <SidebarSubItem icon={<FaDollarSign />} label="Dollars" />
                <SidebarSubItem icon={<FaMoneyBillAlt />} label="Liquidation" />
                <SidebarSubItem icon={<FaMapMarkedAlt />} label="Heat-Maps" />
                <SidebarSubItem icon={<FaChartPie />} label="Inv Chart Batches" />
                <SidebarSubItem icon={<FaChartPie />} label="Inventory" active />
                <SidebarSubItem icon={<FaQuestionCircle />} label="Judgment Performance" />
                <SidebarSubItem icon={<FaChartPie />} label="Timeline" />
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => setIsBatchReportOpen(!isBatchReportOpen)}
              className="flex justify-between items-center w-full px-3 py-2 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <FaCalendarAlt fontSize="24px" />
                 {isSidebarClose &&
                <span>Batch Report</span>
                 }
              </div>
              <FaChevronDown className={`transform transition-transform ${isBatchReportOpen ? 'rotate-180' : ''}`} />
            </button>
            {isBatchReportOpen && (
              <ul className="pl-8 pt-1 space-y-1">
                <SidebarSubItem icon={<FaDollarSign />} label="Manual report Run" />
                <SidebarSubItem icon={<FaMoneyBillAlt />} label="SFTP Details" />
                <SidebarSubItem icon={<FaMapMarkedAlt />} label="View Query Report" />
                <SidebarSubItem icon={<FaChartPie />} label="View Schedule Report" />
                <SidebarSubItem icon={<FaChartPie />} label="Scheduler Logs" active />
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setIsBatchReportOpen(!isBatchReportOpen)}
              className="flex justify-between items-center w-full px-3 py-2 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <FaExchangeAlt />
                 {isSidebarClose &&
                <span>Document Transfer</span>
                 }
              </div>
              <FaChevronDown className={`transform transition-transform ${isBatchReportOpen ? 'rotate-180' : ''}`} />
            </button>
            {isBatchReportOpen && (
              <ul className="pl-8 pt-1 space-y-1">
                <SidebarSubItem icon={<FaFileUpload />} label="My upload" />
                <SidebarSubItem icon={<FaFileDownload />} label="My Download" />
                <SidebarSubItem icon={<FaArrowsRotate />} label="Company  Upload/Download" />
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};



const SidebarItem = ({ icon, label, dropdown }) => (
  <li className="px-3 py-2 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
    {dropdown && <FaChevronDown size={12} />}
  </li>
);
const SidebarSubItem = ({ icon, label, active }) => (
  <li
    className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-100 cursor-pointer ${active ? 'bg-gray-200' : ''
      }`}
  >
    {icon}
    <span>{label}</span>
  </li>
);
export default Sidebar;
