import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import SignupPage from './pages/SignupPage/SignupPage.jsx'
import {createTheme} from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: ['Prompt', 'sans-serif'].join(','),
    fontSize:16,
    fontWeight: 500
  },
  palette: {
    mode: "dark",
    primary: {
        main: '#55BAF2'
    },
    secondary: {
        main: '#FCDB67'
    },
    black: {
        main: '#000000'
    },
    gray: {
        main: '#9A9A9A'
    },
    white: {
        main: '#F2F2F2',
        contrastText: "#000000"
    },
  },
  spacing: 8,
})

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/home",
    element:<HomePage/>
  },
  {
    path:"/signup",
    element:<SignupPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
