import React from 'react';
import ReactDOM from 'react-dom';
import App from './assets/components/App';
import { LanguageProvider } from './assets/components/LanguageContext';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  throw new Error("Failed to find the root element with id 'root'");
}
