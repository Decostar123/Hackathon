import React from 'react'
import ChatList from './ChatList';
import {useDispatch,useSelector} from "react-redux"

// import {Provider} from "react-redux"
var i=0;
// import store from '../store/store'
function LeftSideSection() {    
    const usernames = useSelector((state)=>state.name);
    return (
        <>
            {/* <Provider store={store}> */}
                <div id="leftSectionTop" className="leftSide py-2   bg-black border-primary-dark-gray items-center  max-h-screen overflow-y-scroll scrollbar h-vh85" >
                    {/* <div className=" container  px-4 flex items-center text-sm h-10  bg-primary-light-gray rounded-3xl ">
                        <i  style={{fontSize:"1.2rem"}} className=" material-icons ml-4 stroke-primary-light-gray  text-primary-dark-gray" >search</i>
                        <input type="text" name="" id="" placeholder="Search" className=" bg-primary-light-gray w-10/12 h-8  rounded-xl px-5 py-2 text-gray-500 focus:outline-none "/>
                    </div> */}
                    <div className="chatListContainer mt-0 w-full border-primary-dark-gray border-l-2 border-t-2  ">
                        {usernames.map((element,ind)=>{
                             return <ChatList key={element.id} ChatListId={element.id} username={element.description}/>
                        })} 
                    </div>
                </div>


            {/* </Provider> */}
        </>
    )
}

export default LeftSideSection
