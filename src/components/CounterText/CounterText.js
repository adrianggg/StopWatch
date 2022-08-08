import styles from './CounterText.module.scss';

const CounterText = ({time}) => {
    let s = Math.floor( time/1000)%60;
    let m = Math.floor( s/60)%60;
    let h = Math.floor( m/60)%24;
    let ms = time%1000;
    h =h.toString().padStart(2,'0');
    m =m.toString().padStart(2,'0');
    s =s.toString().padStart(2,'0');
    return (
        <h1 className={styles.counterText}>{`${h}:${m}:${s}.${ms}`}</h1>
    );
}

    // const s = ms/1000;
    // const m = s/60;
    // const h = m/60;

export default CounterText;