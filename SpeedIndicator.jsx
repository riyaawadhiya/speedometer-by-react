import React, { useState, useEffect } from 'react';

const SpeedIndicator = () => {
  const [speed, setSpeed] = useState(0);
  const minSpeed = 0;
  const maxSpeed = 300;
  // Simulating speed increase over time
  useEffect(() => {
    
    let incrementing = true;
    const interval = setInterval(() => {
      setSpeed((prevSpeed) => {        
      let newSpeed = incrementing ? prevSpeed + 5 : prevSpeed - 5; // Speed cap at 120 km/h
      if (newSpeed >= maxSpeed) incrementing = false;
      if (newSpeed <= minSpeed) incrementing = true;

      // if (newSpeed <= 40) setSpeedRange('Low');
      // else if (newSpeed <= 120) setSpeedRange('Medium');
      // else setSpeedRange('High');

      return newSpeed;
    });
    
        }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      {/* Outer Circle with X-axis rotation */}
      <div className=" circle relative   w-[500px] h-[500px] rounded-full border-[20px] border-dashed border-cyan-300 animate-rotateX shadow-[2px_2px_40px_15px_rgba(0,255,255,0.3),inset_0px_0px_60px_rgba(0,255,255,0.6)] flex justify-center items-center">      
          {/* Inner Circle */}
        <div className="smallCircle rotate-x-180 preserve-3d drop-shadow-custom custom-shadow-px 2px 5px#5baac2, inset 0px 0px 60px #2a62db; absolute w-[300px] h-[300px] rounded-full"></div>
      </div>

      {/* Speed Display */}
      <div className="number w-[100px] text-center text-cyan-400 text-[60px] font-light font-custom relative -top-[40px]  right-[300px] transition duration-[2000] hover:bg-blue-500">
        <span id="speedValue" className='text-[60px]'>{speed}</span><br />
        <span className="info text-lg leading-none relative  -top-[40px] ">km/hr</span>
        {/* <div className="mt-2 text-sm text-gray-500">Range: {speedRange}</div> */}

      </div>
    </div>
  );
}

export default SpeedIndicator;
