import React, { useState } from "react";

function Increment() {

    const [add, setadd] = useState(100);
    const [state, setstate] = useState("saravanan");
    const [color, setcolor] = usecolor(red);



    return (
        <div>
            <h1>{add}</h1>
            <p>{state}</p>
            <button onClick={() => setadd(add + 1)}>Increment</button>
            <button onClick={() => setstate("abi")}>change</button>
            <button onClick={() => setstate(blue)}>color</button>

        </div>
    );
}

export default Increment;
