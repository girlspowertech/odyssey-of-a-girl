import React from "react";
import { Link } from "react-router-dom";
import { Girl } from "@/components/svg";

const Tringle: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={ `w-0 h-0
  border-t-[12px] border-t-transparent
  border-l-[15px] border-l-green-500
  border-b-[12px] border-b-transparent ${ className }` } >
  </div>
}

const Home = () => {
  return <div className="m-auto flex w-[80%] max-w-[1800px] justify-between h-full text-secondary">
    <div className="mt-16 flex flex-col font-jeju justify-between h-[75%]">
      <div>
        <div className="text-[180px]">Odyssey</div>
        <div className="text-8xl"> Of A Girl</div>
      </div>
      <div className="text-3xl flex flex-col ml-2 gap-3">
        <Link to="/game" className="mt-8 flex gap-3 items-center">
          <Tringle className="border-l-yellow-400" /> Start</Link>
        <Link to="/about" className="mt-4 flex gap-3 items-center">
          <Tringle className="border-l-pink-400" />About</Link>
        <Link to="/contribute" className="mt-4 flex gap-3 items-center">
          <Tringle className="border-l-blue-500" />Contribute</Link>
      </div>
    </div>
    <div className="self-end mb-24 h-[80%]">
      <Girl className="w-full h-full" />
    </div>
  </div>;
}

export default Home;
