import { useEffect, useState } from "react";
import "../App.css";
import './Chronometer.css'

function Chronometer() {
    const [valor, setValor] = useState(null)
    const [initial, setInitial] = useState(null)

    const tick = () => {
        setValor(new Date(new Date() - initial));
    };

    const start = () => { setInitial(+new Date());}

    useEffect(() => {
        if (initial) {
            requestAnimationFrame(tick);
        }
    }, [initial]);

    useEffect(() => {
        if(valor) {
            requestAnimationFrame(tick);
        }
    }, [valor]);

    return (
        <div className="Chronometer" onClick={start}>
            <h1 className="timer">{timeFormat(valor)}</h1>
        </div>
    );
}

const timeFormat = (date) => {
    if (!date) return "00:00:00";

    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    let cm = Math.round(date.getMilliseconds()) / 10;

    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    cm = cm < 10 ? "0" + cm : cm;

    return `${mm} : ${ss} : ${cm}`;
};

export default Chronometer;