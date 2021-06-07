import logo from './logo.svg';
import './App.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Auth from '../src/screens/Auth/Auth';

function App() {

  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 4000,
    offset: '30px',
    transition: transitions.FADE
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Auth />
    </AlertProvider>
  );
}

export default App;
