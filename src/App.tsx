import React from 'react';
import logo from './logo.svg';
import star from './img/star.png'
import fire from './img/fire.svg'
import home from './img/home.svg'
import left from './img/left.svg'
import right from './img/right.svg'
import imghero from './img/img_hero.svg'
import './App.css';
import { Buttonhouter, TextHouter } from './component/smallcomponent'

function App() {
  return (
    <div>
      <header className="header">
        <div className='section-1 flex justify-between'>
          <div>
            <TextHouter
              text="Find The Place To"
              fontstyle="font-bold font-lexend text-4xl text-[#1b1c57]"
            />
            <div className="flex">
              <TextHouter
                text="Live"
                fontstyle='font-bold font-lexend text-4xl text-[#1b1c57]'
              />
              <TextHouter
                text="Your Dreams"
                fontstyle='font-bold font-lexend text-4xl text-[#1b1c57] underline mx-3'
              />
            </div>
          </div>
          <div>
            <img src={imghero} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
