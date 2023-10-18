import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './home'
import Navbar from './Navbar'
import "../assiet/Style/style.css"

export default function App() {
  return (
	<>
	<BrowserRouter>
	<Navbar/>
	<Routes>
		<Route path='/' element={<Home/>}/>
		
	</Routes>
	</BrowserRouter>
	</>
  )
}






