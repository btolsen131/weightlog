'use client'
import React, {useState, useEffect} from 'react'
import styles from "../page.module.css";


const AverageComps = () => {
    const [prevWeek, setPrevWeek] = useState(0);
    const [currWeek, setCurrWeek] = useState(1);
    //const [diff, setDiff] = useState(prevWeek - currWeek);

    const diff = currWeek - prevWeek;

    const diffStyle = {
        color: diff > 0 ? 'red' : diff < 0 ? 'green' : 'black'
    };

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await fetch('/api/Averages', {cache: "no-store"});
            const data = await response.json();
            setPrevWeek(data.lastWeek);
            setCurrWeek(data.thisWeek);
            //setDiff = prevWeek - currWeek;
        } catch (err){
            console.log("Something went wrong with the averages",  err)
        }
    }

  return (
    <div className='container'>
        <div className='item'>
            <h2>Previous Week</h2>
            <h1>{prevWeek}</h1>
        </div>
        <div className='item'>
            <h2>Currently Week</h2>
            <h1>{currWeek}</h1>
        </div>
        <div className='item'>
            <h2>Difference</h2>
            <h1 style={diffStyle}>{diff} lbs</h1>
        </div>

    </div>
  )
}

export default AverageComps
