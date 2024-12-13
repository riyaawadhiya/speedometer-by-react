import React from 'react';
import SpeedIndicator from './SpeedIndicator';
import Button from './Button';
import ProgressBar from './ProgressBar';


const Braces = () => {
  return (
    <div className="flex">
      <Button/>
      <div className="relative flex flex-col items-center space-y-10 w-full , md:w-[700px], lg:w-[750px]">
        <div id="img01" className="w-[700px] h-[500px] bg-transparent]"/>
         <div id="img1" className="w-[400px] h-[500px]">
        </div> 
        <div id="img03" className="w-[750px] h-[520px]"/>
      </div>
      <SpeedIndicator />
      <div className="relative flex flex-col items-center space-y-10">
        <div id="img02" className="w-[700px] h-[500px]" />
        <div id="img2" className="w-[400px] h-[500px] ">
        </div>
        <div id="img04" className="w-[750px] h-[520px]"/>
      </div>
    </div>
  );
};

export default Braces;