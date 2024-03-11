import React from 'react';

const NoEvents = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  font-robboto">
      <div className="text-center w-[fit] h-[120px] p-3 bg-[#9eacb744] border rounded-md border-[#348097] text-neutral-900 shadow-xl">
        <span className="text-3xl font-bold">Sorry</span> <br />
        Right now there are no ongoing events for you to register <br />
        You'll be notified when to register!!!!
      </div>
    </div>
  );
};

export default NoEvents;
