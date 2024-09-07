"use client";
import { useEffect } from "react";

export default function SkillBar() {
  useEffect(() => {
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    const bar4 = document.getElementById("bar4");
    const bar5 = document.getElementById("bar5");

    if (bar1) {
      bar1.classList.remove("w-0");
      bar1.classList.add("w-11/12");
    }
    if (bar2) {
      bar2.classList.remove("w-0");
      bar2.classList.add("w-10/12");
    }
    if (bar3) {
      bar3.classList.remove("w-0");
      bar3.classList.add("w-8/12");
    }
    if (bar4) {
      bar4.classList.remove("w-0");
      bar4.classList.add("w-6/12");
    }
    if (bar5) {
      bar5.classList.remove("w-0");
      bar5.classList.add("w-6/12");
    }
  }, []);

  return (
    <div className="pb-3">
      <div>
        <h1 className="mx-10 mt-10 font-bold">HTML</h1>
        <div className="mx-10 h-6 relative rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div
            id="bar1"
            className="transition-all ease-out duration-1000 h-full bg-cyan-500 relative w-0"
          ></div>
        </div>
      </div>
      <div>
        <h1 className="mx-10 mt-10 font-bold">CSS</h1>
        <div className="mx-10 h-6 relative rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div
            id="bar2"
            className="transition-all ease-out duration-1000 h-full bg-cyan-500 relative w-0"
          ></div>
        </div>
      </div>
      <div>
        <h1 className="mx-10 mt-10 font-bold">JavaScript</h1>
        <div className="mx-10 h-6 relative rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div
            id="bar3"
            className="transition-all ease-out duration-1000 h-full bg-cyan-500 relative w-0"
          ></div>
        </div>
      </div>
      <div>
        <h1 className="mx-10 mt-10 font-bold">React</h1>
        <div className="mx-10 h-6 relative rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div
            id="bar4"
            className="transition-all ease-out duration-1000 h-full bg-cyan-500 relative w-0"
          ></div>
        </div>
      </div>
      <div>
        <h1 className="mx-10 mt-10 font-bold">NextJS</h1>
        <div className="mx-10 h-6 relative rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div
            id="bar5"
            className="transition-all ease-out duration-1000 h-full bg-cyan-500 relative w-0"
          ></div>
        </div>
      </div>
    </div>
  );
}
