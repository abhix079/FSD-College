import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Marks from './Marks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={'Aryan Tripathy'} email={"aryantripathy208@gmail.com"} roll={"2200320130054"}/>
    <App name={'Aditya Singh'} email={"kushwahaaditya@gmail.com"} roll={"2200320130025"}/>
    <Marks name={'Aryan Tripathy'} roll={2200320130054} m1={86} m2={98} m3={87}/>
    <Marks name={'Aditya Singh'} roll={2200320130025} m1={88} m2={93} m3={81}/>
  </StrictMode>
);
