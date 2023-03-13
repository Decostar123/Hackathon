import React,{useEffect , useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { activeChatIdSlice } from '../store/activeChatIdSlice';
import MessageBox from './MessageBox';
import { addContent} from "../store/content"

function RightSideSection(props) {
    const [msg , setMsg] = useState("") ;
    const disptach = useDispatch() ; 
    const [arr , setArr] = useState([]) ;  

    const activeChatId = useSelector((state)=>state.activeChatIdSlice);
    console.log("RightSideSection :  ",activeChatId)
    const usernames = useSelector((state)=>state.name);
    const content = useSelector((state)=>state.content);
    const data = content[Number(activeChatId.id)];
    console.log("s,data",data);
    if(data && data.content.length!==0){
        console.log("s,data",data.content);
        data = data.content;
    }
    // usernames[activeChatId.id-1].description;
    // console.log(usernames[Number(activeChatId.id)-1].id)

    // console.log(usernames,activeChatId.id)

const lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos impedit quis harum enim, ad alias quasi culpa sint omnis, delectus optio esse dicta! Sed eligendi amet possimus vero animi consequuntur."

    var isDefault =0;
    function getDefaultRightContainer() {
        // console.log(activeChatId)
        return(
            <div className="rightSideDefaultContainer flex flex-col h-full justify-center items-center bg-black text-primary-dark-gray">
                    {activeChatId.id}
                    <span className="text-3xl text-white font-Helvetica-light" >Chat Messaging App</span>
                    <p className="pt-1 font-Helvetica text-sm ">Send and receive messages without keeping your phone online.</p>
            </div>
        )
    }
    function getChatRightContainer(props) {

        return(
            <div className="rightSideChatContainer bg-black border-cyan-50  h-full w-full ">
                <div className="topChatNav h-16  w-full bg-black border-primary-dark-gray flex  items-center pl-4 cursor-pointer">
                    <img src="/placeholder200_200.svg" className="w-10 h-10 rounded-full "/>
                    <div className="chatNavNameSection flex flex-col space-y-0.5 pl-2  w-full py-2 ">
                        <span className="chatUserName text-myMd text-white">{usernames[Number(activeChatId.id)-1].description} </span>
                        <span className="chatUserStatus text-xs text-primary-dark-gray">Online</span>
                    </div>
                    <div className="text-primary-dark-gray ">
                        <ul className="flex pr-6">
                            <i  className="material-icons mx-4 hover:text-primary-green">search</i>
                            <i  className="material-icons mx-4 hover:text-primary-green">more_vert</i>
                        </ul>
                    </div>
                </div>
                <div className="chatContainer h-vh85 border-2 border-primary-dark-gray p-2 w-full">
                    <div style={{height:"92%"}} className="chatMainContainer overflow-y-scroll scrollbar w-full" >
                        <MessageBox msgId={-1} isLeft={0} text={lorem} /><br/>
                        <MessageBox msgId={-2} isLeft={0}  text={lorem}/><br/>
                        <MessageBox msgId={-3} isLeft={1} text={lorem}/><br/>
                        <MessageBox msgId={-4} isLeft={0} text={lorem}/><br/>

                        {/* {data.length===0 ? data.map((ele,ind)=>{
                            return <MessageBox key={ind} msgId={ind} isLeft={0}/>
                        }): ""} */}
                        {
                            arr.map((ele,ind)=>{
                                return <MessageBox key={ind} msgId={ind} isLeft={0} text={ele}/>
                            }) 
                        }
                        

                    </div>
                    <div style={{height:"8%"}} className="chatInputContainer w-full h-16 bottom-0 flex bg-black justify-center items-center space-x-2 " >
                        <input id="input-main" onChange={ele=>setMsg(ele.target.value)} value={msg} className="w-10/12 h-10 p-2 text-sm rounded-full bg-black border-2 border-slate-400  text-md text-white" type="text" name="" id="" placeholder="Type a message"/>
                        <button onClick={()=>{
                        //  disptach(addContent({id:activeChatId.id , info:msg}))
                         setArr(prev=>[...prev , msg ]) ;
                         setMsg("") ;
                        // document.getElementById("input-main").value="";


                         console.log("e",data);
                        }} className="w-11 h-10 px-2 pt-2  rounded-full text-primary-dark-gray   hover:text-primary-light-gray hover:bg-primary-green  focus:text-primary-light-gray focus:bg-primary-green" ><i className="material-icons  ">send</i></button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="commonContainer  bg-primary-light-gray h-full border-b-black border-b-8 ">
                {/* for default right side home page */}
                {/* {isDefault ? getDefaultRightContainer() : getChatRightContainer() } */}
                {!activeChatId ? getDefaultRightContainer() : getChatRightContainer() }
            </div>
        </>
    )
}

export default RightSideSection
