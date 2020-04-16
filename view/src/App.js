import React from 'react';
import { Router } from '@reach/router'
import Profile from './components/profile/profile.js'
import Home from './components/home/home.js'
import MyBlogs from './components/my_blogs/my_blogs.js'
import Navigation from './components/navigation/navigation.js'
import logo from './assets/images/logo.svg'
import './App.css'

function App() {
    const navLinks = [
        {
          text: 'Home',
          path: '/',
          icon: 'ion-ios-home'
        },
        {
            text: 'Profile',
            path: '/profile',
            icon: 'ion-ios-person'
        },        
        {
            text: 'MyBlogs',
            path: '/myblogs',
            icon: 'ion-ios-megaphone'
        }        
    ]
  
  return (
    <div className="App">
        <Navigation
            navLinks={ navLinks }
            logo= { logo }
            />
            <Router>
                <Home path="/" />
                <Profile path="/profile" />
                <MyBlogs path="/myblogs" />
            </Router>
    </div>
  );
}
export default App;
