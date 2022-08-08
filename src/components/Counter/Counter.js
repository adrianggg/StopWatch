import styles from './Counter.module.scss';
import Button from '../Button/Button';
import CounterText from '../CounterText/CounterText';
import { useState, useEffect } from 'react';
const Counter = props =>{
    const [time,setTime] = useState(0);
    const [timer,setTimer] = useState();
    useEffect(() => {
  return () => {
     if(timer) clearInterval(timer);
  };
}, [timer]);
    const start = () => {
        
        setTimer(setInterval(() => {
                setTime(time => time+1);
        }, 1))
        console.log(time);

    };
    const stop = () =>{
        if(timer) clearInterval(timer);
    }
    const reset = ()=>{
        setTime(0);
    }
    return (
        <div className={styles.container}>
            <CounterText time={time}/>
            <Button action={start}>Start</Button>
            <Button action={stop}>Stop</Button>
            <Button action={reset}>Reset</Button>
        </div>
    );
}

export default Counter;