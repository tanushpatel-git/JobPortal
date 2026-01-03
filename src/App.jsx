import React from 'react'
import NavBar from "./Component/NavBar.jsx";
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import JobDetailPage from "./Pages/JobDetailPage.jsx";
import SaveJobPage from "./Pages/SaveJobPage.jsx";
import MyApllicationPage from "./Pages/MyApllicationPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Login from './Pages/Login.jsx'
import ApplyJobPage from "./Pages/ApllyJobPage.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import JobListPage from "./Pages/JobListPage.jsx";


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
    }, {
        label: "Login",
        bgColor: "#d3e76b",
        textColor: "#000",
        links: [{label: "Login", ariaLabel: "Login", href: "/login"}, {
            label: "SignUp", ariaLabel: "SignUp", href: "/signUp"
        },]
    },];

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
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="/JobList" element={<JobListPage/>} />
                <Route path="/applyJob" element={<ApplyJobPage/>}/>
                <Route path="/jobDetailPage/:id" element={<JobDetailPage/>}/>
                <Route path="/saveJobs" element={<SaveJobPage/>}/>
                <Route path="/myApplication" element={<MyApllicationPage/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </div>)
}
export default App
