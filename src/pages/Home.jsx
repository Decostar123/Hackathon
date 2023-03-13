import React,{useEffect,useState} from 'react'
import LeftSideSection from '../component/LeftSideSection'
import Navbar from '../component/Navbar'
import RightSideSection from '../component/RightSideSection'
import { Provider } from 'react-redux';
import store from "../store/store"
import {useDispatch,useSelector} from "react-redux"


function Home() {
    const [innerW,setInnerW] = useState();
    const activeChatId = useSelector((state)=>state.activeChatIdSlice);

    window.addEventListener("resize",()=>{
            setInnerW(window.innerWidth);
    })
    useEffect(() => {
        setInnerW(window.innerWidth);
    }, [])
    return (
        <>
        <Provider store={store}>
            <section className="flex bg-black py-5   ">
                {innerW<=750 ? 
                <div className="w-screen   max-h-screen">
                <Navbar/>
                <LeftSideSection/>
        </div> : <div className="w-1/3  max-h-screen">
                        <Navbar/>
                        <LeftSideSection/>
                </div> }
                
                {innerW>750 ? <div className="w-2/3 ">
                    <RightSideSection/>
                    {/* {innerW>=750 ? <RightSideSection/> : ""  } */}
                </div> : ""  }
            </section>
        </Provider>
        </>
    )
}

export default Home
