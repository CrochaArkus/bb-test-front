import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Routes } from './components/shared/Routes';
import { Topbar } from './components/shared/Topbar';
import { Sidenav } from './components/shared/Sidenav';

import './index.css';

ReactDOM.render(
  <div className='root-background'>
    <div className='root-container'>
      <Topbar />
      <div className='root-content'>
      <div className='root-sidenav'>
        <Sidenav />
      </div>
      <Routes />
      </div>
    </div>
  </div>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
