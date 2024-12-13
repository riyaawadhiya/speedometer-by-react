import React from 'react';

const Button = () => {
  return (
    <div class="buttons-container">
        <button class="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute " onclick="">A</button>
        <button class="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute" onclick="">B</button>
        <button class="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute" onclick="">C</button>
        <button class="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute" onclick="">D</button>
        <button class="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute" onclick="">E</button>
        <button class="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom-drop transition-all duration-300 ease-in-out cursor-pointer absolute shadow-cyan-glow" onclick="">E</button>
    </div>
  );
;}
export default Button;