// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Homepage from './App.jsx'
// import './css/index.css'

// import axios from 'axios'

// const promise = axios
// .get('http://localhost:3001/projects')
// .then(response => {
//   const notes = response.data
//   console.log(notes)
// })

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Homepage />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'

axios.get('http://localhost:3001/projects').then(response => {
  const projects = response.data
  console.log(projects)
  ReactDOM.createRoot(document.getElementById('root'))
  .render(<App projects={projects} />)
})