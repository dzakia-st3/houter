import React from 'react';
import './App.css';
import { Navbar, Footer } from './component/NavbarFooter';
import Section1 from './component/section1';
import Section2 from './component/section2';
import Section3 from './component/section3';
import Section4 from './component/section4';
import Section5 from './component/section5';
import Section6 from './component/section6';

function App() {
    return (
        <>
            <Navbar />
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer/>
        </>
    )
}

export default App;
