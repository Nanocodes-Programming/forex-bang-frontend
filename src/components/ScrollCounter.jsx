import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ScrollCounter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setViewPortEntered(true)}
      onExit={() => setViewPortEntered(false)}
    >
      <div className="flex md:flex-row flex-col justify-between w-[80%] m-auto md:my-auto my-[1rem] text-center text-white z-10 relative">
        <aside>
          <h1 className="text-5xl mb-3 font-bold">
            {viewPortEntered && <CountUp end={180} duration={2} />} +
          </h1>
          <p>Student</p>
        </aside>
        <aside>
          <h1 className="text-5xl mb-3 font-bold">
            {viewPortEntered && <CountUp end={98} duration={2} />}%
          </h1>
          <p>Success Rate</p>
        </aside>
        <aside>
          <h1 className="text-5xl mb-3 font-bold">
            {viewPortEntered && <CountUp end={500} duration={2} />}+
          </h1>
          <p>Subscribers</p>
        </aside>
        <aside>
          <h1 className="text-5xl mb-3 font-bold">
            {viewPortEntered && <CountUp end={50} duration={2} />}+
          </h1>
          <p>Signals daily</p>
        </aside>
      </div>
    </ScrollTrigger>
  );
};

export default ScrollCounter;
