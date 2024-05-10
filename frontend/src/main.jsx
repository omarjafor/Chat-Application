import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './App.jsx'
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='p-4 h-screen flex items-center justify-center'>
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </Provider>
  </React.StrictMode>,
)
