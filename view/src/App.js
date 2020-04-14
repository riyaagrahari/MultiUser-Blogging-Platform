import React from 'react';
import { Router } from '@reach/router'
import Profile from './components/profile/profile.js'
import Home from './components/home/home.js'
import MyBlogs from './components/my_blogs/my_blogs.js'

function App() {
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
  }
  return (
    <div className="Nav">
            <Router>
                <Home path="/" />
                <Profile path="/profile" />
                <MyBlogs path="/myblogs" />
            </Router>
    </div>
  );
}

export default App;
