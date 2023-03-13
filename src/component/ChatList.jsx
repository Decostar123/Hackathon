import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { setActiveChatId } from '../store/activeChatIdSlice';
import{setNotGreen} from "../store/name.js"
import { useNavigate ,useLocation} from "react-router-dom";
function ChatList(props) {
    // const activeChatId = useSelector((state)=>state)
    // console.log(activeChatId)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const activeChatId = useSelector((state)=>state.activeChatIdSlice)
    const arr = useSelector((state)=>state.name)



    const [innerW,setInnerW] = useState();

    window.addEventListener("resize",()=>{
            setInnerW(window.innerWidth);
    })
    useEffect(() => {
        setInnerW(window.innerWidth);
    }, [])
    const openChat = ()=>{
        // console.log(activeChatId,props.ChatListId)
        //disablling green dot 
        document.getElementById(`greenDot-${props.ChatListId}`).style.display="none";

        console.log( document.getElementById(`greenDot-${props.ChatListId}`))
        dispatch(setActiveChatId(props.ChatListId))
        console.log("id",activeChatId.id);
        dispatch(setNotGreen({id :activeChatId.id}))
        // console.log(window.innerWidth);
        if(innerW<=750){
            console.log("750");
            navigate("/chat/:id",{
                state:{
                    activeChatId :activeChatId
                }
            })
        }
        // console.log(activeChatId,props.ChatListId)
    }
    function unread(params) {
        // document.getElementById(`unreadDot-${props.ChatListId}`).classList.toggle("hidden")
        document.getElementById(`unreadList-${props.ChatListId}`).classList.add("hidden")
        
    }
    return (
        <>
            <div className="m-0 hover:bg-slate-800 ChatList container flex flex-row items-center h-16   cursor-pointer hover:text-white " onClick={openChat}>
                <div className="chatListLeft mx-3  w-2/12">
                    <img src="/placeholder200_200.svg" alt="" className="w-10 h-10 rounded-full"/>
                </div>
                <div className="chatListCenter w-9/12 space-y-1">
                    <div className="chatListcenterTop text-myMd font-myMedium text-white " >
                        {props.username} 
                    </div>
                    <div className="chatListcenterBottom text-mySm text-primary-dark-gray  h-4 max-h-4 overflow-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi vel rem, ut porro aliquid.
                    </div>
                </div>
                {/* <div className="chatListRight text-sm w-1/12 text-primary-dark-gray font-bold mr-5">
                    9:30
                </div> */}

                <span className="greenDot px-4 text-blue-400 text-xl" id={"greenDot-"+props.ChatListId }>●</span>
            </div>
        </>
    )
}

export default ChatList
