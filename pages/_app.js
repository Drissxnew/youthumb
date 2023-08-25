// pages/_app.js
import React from 'react';
import AppLayout from '../components/AppLayout';
import { AppProvider } from '../context/AppContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  );
}

export default MyApp;
