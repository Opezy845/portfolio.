import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import GigGenerator from "./Pages/GigGenerator";
import Aitool from "./Pages/AITool";
import GigDetails from "./Pages/GigDetails";
import BrowseGigs from "./Pages/BrowseGigs";
import Development from "./Pages/Development";
import Writing from "./Pages/Writing";
import Marketing from "./Pages/Marketing";
import Video from "./Pages/Video";
import Findwork from "./Pages/Findwork";
import Application from "./Pages/Application";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import SellerProfile from "./Pages/SellerProfit";
import Marketplace from "./Pages/Marketplace";
import Message from "./Pages/Message";
import Setting from "./Pages/Settings";
import PostJob from "./Pages/Postjob";
import SmartMatch from "./Pages/SmartMatch";
import ResumeAnalyzer from "./Pages/ResumeAnalyzer";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-work" element={<Findwork />} />

            <Route path="/service/development" element={<Development />} />

            <Route path="/service/writing" element={<Writing />} />

            <Route path="/service/marketing" element={<Marketing />} />

            <Route path="/service/video" element={<Video />} />

            <Route path="/skill/:id" element={<GigDetails />} />

           <Route path="/register" element={<Register />} />
            <Route path="/browse-gigs" element={<BrowseGigs />} />

             <Route path="/login" element={<Login />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/marketplace" element={<Marketplace />} />

            <Route path="/seller-profile" element={<SellerProfile />} />

            <Route path="/application" element={<Application />} />
           <Route path="/messages" element={<Message />} />
            <Route path="/settings" element={<Setting/>}/>
        <Route path="/application/:id" element={<Application />} />
    <Route path="/messages/:id" element={<Message />} />
  <Route path="/ai-tools" element={<Aitool />} />
<Route path="/post-job" element={<PostJob />} />
<Route
    path="/ai-tools/gig-generator"
    element={<GigGenerator />}
/>
<Route
    path="/ai-tools/smart-match"
    element={<SmartMatch />}
/>
<Route
    path="/ai-tools/resume-analyzer"
    element={<ResumeAnalyzer />}
/>
        </Routes>
    );
}

export default App;