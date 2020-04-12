import React from 'react';
// import {Link} from 'react-router-dom'
import { Router } from '@reach/router'
// import './Navigation.css'
import Profile from '../profile/profile.js'
import Home from '../home/home.js'
import MyBlogs from '../my_blogs/my_blogs.js'

const Navigation = () => {
    const navLinks = [
        {
          text: 'Home',
          path: '/',
          icon: 'ios-ios-megaphone'
        },
        {
            text: 'Profile',
            path: '/profile',
            icon: 'ios-ios-megaphone'
        },        
        {
            text: 'MyBlogs',
            path: '/myblogs',
            icon: 'ios-ios-megaphone'
        }        
    ]
    return(
        <div className="Nav">
            <Router>
                <Home path="/" />
                <Profile path="/profile" />
                <MyBlogs path="/myblogs" />
            </Router>
        </div>
        // <nav className="col-md-2">
        //     <ul>
        //         <li>
        //             <div className="sidebar_item">
        //                 <h1>List All Post</h1>
        //             </div>
        //         </li>
        //         <li>
        //             <div className="sidebar_item">
        //                 <h1>Add New Post</h1>
        //             </div>
        //         </li>
        //     </ul>
        // </nav>
    )
}

export default Navigation;