import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App.jsx';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <Topbar />
    <App />
  </StrictMode>,
)
