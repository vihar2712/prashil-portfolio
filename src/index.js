import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { neon } from '@netlify/neon';

const callData = async () => {
  const sql = neon(process.env.REACT_APP_NEON_DB_STRING); // automatically uses env NETLIFY_DATABASE_URL
  const contacts = await sql`SELECT * FROM contact`;
  console.log(contacts)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
callData();