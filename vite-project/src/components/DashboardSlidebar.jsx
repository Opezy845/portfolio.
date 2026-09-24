import {
    FiGrid,
    FiBriefcase,
    FiShoppingBag,
    FiFileText,
    FiMessageCircle,
    FiCpu,
    FiUser,
    FiSettings,
    FiLogOut,
    FiMenu,
    FiX
} from "react-icons/fi";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./DashboardSlidebar.css";

function DashboardSlidebar() {
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("skillbridgeCurrentUser");
        navigate("/login");
        setSidebarOpen(false);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FiGrid />
        },
        {
            name: "My Gigs",
            path: "/find-work",
            icon: <FiBriefcase />
        },
        {
            name: "Marketplace",
            path: "/marketplace",
            icon: <FiShoppingBag />
        },
        {
            name: "Applications",
            path: "/applications",
            icon: <FiFileText />
        },
        {
            name: "Messages",
            path: "/messages",
            icon: <FiMessageCircle />
        },
        {
    name: "AI Tools",
    path: "/ai-tools",
    icon: <FiCpu />

        },
        {
            name: "Profile",
            path: "/profile",
            icon: <FiUser />
        },
        {
            name: "Settings",
            path: "/settings",
            icon: <FiSettings />
        }
    ];

    return (
        <>

            {!sidebarOpen && (
                <button
                    className="dashboard-menu-button"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open dashboard menu"
                >
                    <FiMenu />
                </button>
            )}

        

            {sidebarOpen && (
                <div
                    className="dashboard-overlay"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* SIDEBAR */}

            <aside
                className={`dashboard-sidebar ${
                    sidebarOpen ? "sidebar-open" : ""
                }`}
            >

                {/* HEADER */}

                <div className="sidebar-header">

                    <div className="sidebar-logo">
                        <h2>
                            Skill<span>Bridge</span>
                        </h2>

                        <p>Student Marketplace</p>
                    </div>

                    <button
                        className="sidebar-close-button"
                        onClick={closeSidebar}
                        aria-label="Close dashboard menu"
                    >
                        <FiX />
                    </button>

                </div>


                {/* NAVIGATION */}

                <nav className="sidebar-navigation">

                    {menuItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link active"
                                    : "sidebar-link"
                            }
                        >

                            <span className="sidebar-icon">
                                {item.icon}
                            </span>

                            <span className="sidebar-text">
                                {item.name}
                            </span>

                        </NavLink>
                    ))}

                </nav>


                {/* LOGOUT */}

                <div className="sidebar-bottom">

                    <button
                        type="button"
                        className="sidebar-logout"
                        onClick={handleLogout}
                    >

                        <span className="sidebar-icon">
                            <FiLogOut />
                        </span>

                        <span className="sidebar-text">
                            Logout
                        </span>

                    </button>

                </div>

            </aside>
        </>
    );
}

export default DashboardSlidebar;