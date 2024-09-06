import React from 'react';
import logo from './logo.svg';
import star from './img/star.png'
import fire from './img/fire.svg'
import home from './img/home.svg'
import left from './img/left.svg'
import right from './img/right.svg'
import './App.css';
import Buttonhouter from './component/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttonhouter
          img={star}
          text='Test Button'
          disabled={false}
          iconPosition='right'
          textColor='text-white-600'
          bakcgroundColor=''
          hovertrue= {true}
          hoverimg='null'
          hovercolor= 'bg-orange-200'
        />
        <Buttonhouter
          img={fire}
          text='Popular'
          disabled={false}
          iconPosition='left'
          textColor='text-red-600'
          bakcgroundColor='bg-red-100'
          hovertrue= {false}
          hoverimg='null'
          hovercolor= ''
        />
        <Buttonhouter
          img={home}
          text='Home'
          disabled={false}
          iconPosition='left'
          textColor='text-white-600'
          bakcgroundColor=''
          hovertrue= {true}
          hoverimg='null'
          hovercolor= 'bg-orange-200'
        />
        <Buttonhouter
          img={left}
          text='null'
          disabled={false}
          iconPosition=''
          textColor='text-white-600'
          bakcgroundColor=''
          hovertrue= {true}
          hoverimg='null'
          hovercolor= 'bg-orange-200'
        />
        <Buttonhouter
          img={right}
          text='Search'
          disabled={false}
          iconPosition='right'
          textColor='text-white-600'
          bakcgroundColor='bg-emerald-500'
          hovertrue= {true}
          hoverimg='null'
          hovercolor= 'bg-orange-200'
        />
        <Buttonhouter
          img='null'
          text='Without Icon'
          disabled={false}
          iconPosition=''
          textColor='text-white-600'
          bakcgroundColor=''
          hovertrue= {true}
          hoverimg='null'
          hovercolor= 'bg-orange-200'
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
