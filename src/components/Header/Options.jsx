import React from "react";
import CallIcon from "../../../public/images/call-icon.jpg"
import './Title.css'

function Options() {
    return (
        <div className="flex flex-col xlmob:flex-row w-full justify-between py-2 px-10 text_holder3">
            <div className="flex flex-row justify-evenly items-center w-[100%] xlmob:w-[30em] ">
              <DropDown text={'Home'} />
              <DropDown text={'Shop'} />
              <DropDown text={'Pages'} />
              <DropDown text={'Blog'} />
              <h1>About Us</h1>
              <h1>Contact Us</h1>
            </div>
            <div className="flex flex-row items-center justify-center 1.1xl:ml-[10em]">
                <div className="w-[2em] h-[2em] mx-2">
                  <img src={CallIcon} alt="none" />
                </div>
                <h1 className="font-semibold">(219) 555-0114</h1>
            </div>
        </div>
    );
}

function DropDown(props) {
  return (
    <div className="flex hover:text-green-500 hover:cursor-pointer flex-row items-center">
      <h1 className="">{props.text}</h1>
      <div>{'>'}</div>
    </div>
  )
}

export default Options;
