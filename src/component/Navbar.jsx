import React from 'react'

function Navbar() {
    function clickedMore_vert() {
        var nabMoreUl = document.getElementById("navMoreUl").classList.toggle("hidden")
    }
    function unreadAll(params) {
        var nabMoreUl = document.getElementById("navMoreUl").classList.add("hidden")
        var greenDot = document.getElementsByClassName("greenDot");
        console.log(greenDot);
        for (let  i= 0;  i< greenDot.length; i++) {
            greenDot[i].style.display="none" ; 
        }
    }
    return (
        <>
            {/* <nav className="bg-primary-light-gray flex list-none justify-start w-full  items-center" id="navId"> */}
            {/* <ul className="h-full p-2 w-full bg-red"></ul> */}
            <nav>
                <div id="navId">
                <div className="bg-black border-2 border-primary-dark-gray mb-0 py-4 flex list-none justify-start w-full  items-center" >
                    {/* <ul className="p-3 w-4/5  flex items-center px-8">
                        <img src="/placeholder200_200.svg" alt="" className="w-10 h-10 rounded-full"/>
                    </ul> */}
                    <div  className="text-white px-32 hover:text-primary-green cursor-pointer">
                        <p>User Name</p>
                    </div>
                    <ul className="w-6 text-end  px-20 pt-0.5   h-full flex justify-around items-center  hover:cursor-pointer " >
                        <li> 
                            <i  className="material-icons text-primary-dark-gray  IconSize-md   hover:text-primary-green" onClick={clickedMore_vert}>more_vert</i>
                        </li>
                    </ul>
                </div>
                <ul className="hidden w-1/3 absolute justify-end z-0" id="navMoreUl">
                    <div className=" h-fit text-mySm  w-fit p-2 px-5 mr-0  bg-primary-dark-gray  absolute right-0  rounded-xl " style={{display:"flex",flexDirection:"column",alignItems:"right"}}>
                        <li className="py-2 text-white hover:text-lime-300"><button className="" onClick={unreadAll}>Read All</button></li>
                        <li className="py-2 text-white hover:text-lime-300"><button className="" >For Future use</button></li>
                        <li className="py-2 text-white hover:text-lime-300"><button className="" >For Future use</button></li>
                        <li className="py-2 text-white hover:text-lime-300"><button className="" >For Future use</button></li>
                    </div>
                </ul>
                </div>
            </nav>

            
        </>
    )
}

export default Navbar
