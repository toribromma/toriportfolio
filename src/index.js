import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import BreadCrumb from './components/Breadcrumb';
import Fonts from './Fonts';
import ResumePage from './pages/Resume';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
});

root.render(
  <ChakraProvider theme={theme}>
      <Fonts />
    <BrowserRouter>
      <StrictMode>
        <ColorModeScript />
        <BreadCrumb />
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<ResumePage />} />

          {/* <Route path="*" element={<Navigate to="/Home" replace />} /> */}
        </Routes>
        {/* <App /> */}
      </StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
