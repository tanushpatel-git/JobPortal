import React from 'react'
import NavBar from "./Component/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import JobListPage from "./Pages/JobListPage.jsx";
import ApplyJobPage from "./Pages/ApllyJobPage.jsx";
import JobDetailPage from "./Pages/JobDetailPage.jsx";
import SaveJobPage from "./Pages/SaveJobPage.jsx";
import MyApllicationPage from "./Pages/MyApllicationPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ProtectedRoute from "./Authentication/ProtectedRoute.jsx";


const App = () => {
    const navItems = [{
        label: "About",
        bgColor: "#DDEB9D",
        textColor: "#000",
        links: [{label: "About Company", ariaLabel: "About Company", href: "/about"}, {
            label: "Contact", ariaLabel: "Contact", href: "/contact"
        },]
    },  {
        label: "Job Detail",
        bgColor: "#d8e681",
        textColor: "#000",
        links: [{label: "Saved Jobs", ariaLabel: "saved Jobs", href: "/saveJobs"}, {
            label: "My Application", ariaLabel: "my application", href: "/myApplication"
        },{
            label: "Browse Jobs", ariaLabel: "Job List", href: "/JobList"
        }]
    }];

    return (<div>
            <NavBar
                items={navItems}
                baseColor="#FAF6E9"
                menuColor="#000"
                buttonBgColor="#000"
                buttonTextColor="#fff"
                ease="power3.out"
            />
        <Routes>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="/JobList" element={<ProtectedRoute><JobListPage/></ProtectedRoute>}/>
            <Route path="/applyJob" element={<ProtectedRoute><ApplyJobPage/></ProtectedRoute>}/>
            <Route path="/jobDetailPage/:id" element={<ProtectedRoute><JobDetailPage/></ProtectedRoute>}/>
            <Route path="/saveJobs" element={<ProtectedRoute><SaveJobPage/></ProtectedRoute>}/>
            <Route path="/myApplication" element={<ProtectedRoute><MyApllicationPage/></ProtectedRoute>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </div>)
}
export default App
