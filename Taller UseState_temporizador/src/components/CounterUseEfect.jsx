import { useState } from "react";
import '../components/CounterUseEfect.css'

function CounterUseEfect() {

    const [count, setcount] = useState(0);

    const add = () => {
        setcount(count + 1);
    }

    const restore = () => {
        setcount(0);
    }

    const subtract = () => {
        setcount(count - 1);
    }

   

    return(
        <>
            <h1>Counter {count}</h1>
            <button onClick={add} className="counterButtton add">Add</button>
            <button onClick={restore} className="counterButtton restore">Restore</button>
            <button onClick={subtract} className="counterButtton subtract">Subtract</button>
        </>
    );
}

export default CounterUseEfect;