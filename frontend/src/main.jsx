import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import AppRoutes from './AppRoutes.jsx';
import AppContextProvider from './context/useContext.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <AppContextProvider>
 <AppRoutes />
 </AppContextProvider>
 </BrowserRouter>
)
