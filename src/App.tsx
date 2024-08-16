import { useState } from "react";
import "./App.css";
import Meteors from "./components/magicui/meteors";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative flex h-[80vh] w-[80vw] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text px-10 text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        bol
      </span>
    </div>
  );
}

export default App;
