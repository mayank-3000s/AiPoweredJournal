import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MoodChart } from './chart/moodchart.jsx'
import Dictaphone from './speechtotext/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MoodChart/> */}
    {/* <Dictaphone /> */}
  </StrictMode>,
)
