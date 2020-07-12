import React from 'react';
import { useDispatch } from 'react-redux';
import { restartGame } from '../store/reducers/QartezReducer';
const GameOver = (props)=>{
    const dispatch = useDispatch();
    return (
        <>
            <h1>Haxtecin {props.winner}</h1>
            <button onClick={()=>dispatch(restartGame())} >Restart game</button>
        </>
    )
}
export default GameOver;