import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import TailwindCSS here
import 'aos/dist/aos.css'; // Import AOS styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
