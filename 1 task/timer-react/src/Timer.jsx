import { useEffect, useRef, useState } from "react";

const Timer = () =>{
    const [value, setValue] = useState('');
    const [status, setStatus] = useState(false);
    const inputRef = useRef(null);

    const StartTimer = () =>{
        inputRef.current.value = '';
        setStatus(true);
    }
    const timeEr = (s) =>{
        let hours = Math.floor(value / 60 / 60);
        let minutes = Math.floor((value / 60) - (hours * 60));
        let sec = value % 60;
        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            sec.toString().padStart(2, '0')
          ].join(':');
    }
    useEffect(()=>{
        if(status){
            value > 0 && setTimeout(() => setValue(value - 1), 1000);
        }
    },[value, status]);
    return(
        <div>
            <input type="text" placeholder="Seconds" ref={inputRef} onChange={(e)=>{setValue(e.target.value.replace(/[^0-9]/g, ''))}}/>
            <button onClick={()=>StartTimer(value)}>Start</button>
            <br />
            <br />
            <span>{timeEr()}</span>
        </div>
    );
}

export default Timer;