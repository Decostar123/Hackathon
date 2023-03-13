import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RightSideSection from './component/RightSideSection'
import Home from './pages/Home'
import { Provider } from 'react-redux';
import store from "../src/store/store"
function App() {
  // console.log(window.location)
  
  return (
   <>
       {/* <Navbar/> */}
       <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/chat/:id" element={<RightSideSection />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
   </>
  )
}

export default App
