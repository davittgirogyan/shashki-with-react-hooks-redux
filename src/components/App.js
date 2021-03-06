import React from 'react';
import {  useSelector } from 'react-redux'
import Map from './Map';
import GameOver from './GameOver';

const App = ()=>{
    const spitakiXod = useSelector(state=>state.qartez.spitakiXod);
    const severiQanak = useSelector(state=>state.qartez.map.map((e)=>
        e.filter((el)=>el===1).length
    )).reduce((a,b)=>a+b)
    const spitakneriQanak = useSelector(state=>state.qartez.map.map((e)=>
        e.filter((el)=>el===2).length
    )).reduce((a,b)=>a+b)
    if(severiQanak===0){
        return <GameOver winner='spitakner@' />
    }else if(spitakneriQanak===0){
        return <GameOver winner='sever@' />
    }   
    return(
        <div>
            <h1>Shashki</h1>
            <h3>Xaxum en &nbsp;
                {spitakiXod && "Spitakner@"}
                {!spitakiXod && "Sever@"} &nbsp;
                Severi qanak@ {severiQanak} &nbsp;
                Spitakneri qanak@ {spitakneriQanak}
                </h3>
            <div className='map-container' >
                <Map/>
            </div>
        </div>
    )
}
export default App;