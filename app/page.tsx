// Only client side!
"use client"
import { Suspense, createContext, use, useState } from "react";
import { Button } from "./components/Button";
import { NextContext, contextData } from "./NextContext";

const fetchJson = async () => {
  const res = await fetch('/api');
  return await res.json();
}

function Use() {
  const [isToggled, setIsToggled] = useState(false);
  let renderData = [];

  // Use can be inside for loops and if statements!!!
  if(!isToggled) {
    // Can be used with context!
    const { data } = use(NextContext);
    renderData = data;
  }
  else {
    // Can be used with async functions!
    const { data } = use(fetchJson());
    renderData = data;
  }

  return (
    <div>
      <h4 className="text-2xl font-bold text-white mb-3">{isToggled ? "Data fetched from server" :"Data fetched from Context" }</h4>
      {renderData?.map(({ id, name }) => (<p key={id}>{name}</p>))}
      <div className="my-10">
        <Button onClick={() => setIsToggled(!isToggled)}>
          Toggle context/fetch
        </Button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 pt-6 gap-16 sm:p-20 flex items-center justify-center">
      <NextContext.Provider value={contextData}>
        <Suspense fallback={<p>Loading...</p>}>
          <Use />
        </Suspense>
      </NextContext.Provider>
    </div>
  );
}
