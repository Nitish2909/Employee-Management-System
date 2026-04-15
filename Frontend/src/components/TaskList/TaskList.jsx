import React from "react";

const TaskList = () => {
  return <div className="bg-red-500 overflow-x-auto h-65 m-12 w-[92%] mt-10 py-5 flex items-center justify-start flex-wrap gap-2">
    <div className="flex-shrink-0 h-full bg-red-300 p-4 w-[280px] ml-4 rounded-xl">
      <div className=" flex justify-between">
        <h3 className="bg-pink-600 px-4 py-1 rounded">High</h3>
        <h4 className="text-sm">20 March 2026</h4>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">Make a video Tutorial</h2>
      <p className="text-sm mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum inventore dolorum dolor numquam. Quisquam, repudiandae.</p>
    </div>

  </div>;
};

export default TaskList;
