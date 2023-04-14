import {useState} from 'react';

const Counter = ()=>{
    const [count,setCount] = useState(0);

    const handleClick=()=>{
        setCount(count+1);
    }
    return(
        <div className='countContain'>
            <p>Petit(s) Clic(s):{count}</p>
            <button onClick={handleClick}>One More</button>
        </div>
    )
}
export default Counter;