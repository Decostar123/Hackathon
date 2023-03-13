import React,{useEffect} from 'react'

function MessageBox(props) {

    return (
        <>
            <div id={"MessageBox-"+props.msgId} className="w-full container">
                <div className={`MessageBox  p-1 my-2 mx-4  text-sm w-fit h-fit   border-2 border-primary-dark-gray  text-white rounded-lg  bg-opacity-80
            ${props.isLeft ? "bg-black border-2 border-primary-dark-gray  text-white text-sm rounded-2xl   " : " bg-gray-500 text-sm rounded-2xl text-white   ml-auto mr-0"} `}
            style={{maxWidth:"80%"}}>
                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi enim ad eligendi vitae, incidunt dignissimos, tenetur mollitia totam ea cupiditate optio vero maxime quod! Eos non illo porro perspiciatis quae! */}
                {props.text}
                </div>
            </div>
        </>
    )
}

export default MessageBox
