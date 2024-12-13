import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress((prev) => (prev < progress ? prev + 1 : progress));
    }, 20); // Increment the progress slowly

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="relative w-full h-full bg-gray-700 rounded-lg overflow-hidden">
      <div
        className="absolute h-full bg-cyan-400 "
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
