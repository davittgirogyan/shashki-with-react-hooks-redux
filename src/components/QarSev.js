import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSevQaritex } from '../store/reducers/QartezReducer';
const QarSev = (props)=>{

    const dispatch = useDispatch();
    const [clientX,setClientX] = useState(0)
    const [clientY,setClientY] = useState(0)
    const [moveMethod,setMoveMethod] = useState(false);
    const [skzbiX,setSkzbiX] = useState(0);
    const [skzbiY,setSkzbiY] = useState(0)

    const mouseDown = (e)=>{
        e.target.style.cursor= "grabbing";
        e.target.style.boxShadow="5px 5px 5px #888888"
        setClientX(e.clientX);
        setClientY(e.clientY);
        setMoveMethod(true);
        setSkzbiX(e.clientX)
        setSkzbiY(e.clientY)
    }
    const mouseMove = (e)=>{
        setClientX(e.clientX);
        setClientY(e.clientY);
        if(moveMethod){
            e.target.style.position = "absolute"
            e.target.style.left = clientX-20+'px';
            e.target.style.top = clientY-25+'px';
        }
    }
    const mouseUp = (e)=>{
        e.target.style.position = "initial"
        e.target.style.boxShadow="none"
        // console.log(skzbiX-clientX)
        // console.log(skzbiY-clientY)
        setMoveMethod(false);
        if(skzbiX-clientX<-40 && skzbiX-clientX>-110){
            if(skzbiY-clientY<-40 && skzbiY-clientY>-95){
                dispatch(changeSevQaritex(props.tox,props.syun,'right'))

            }else if(skzbiY-clientY>40 && skzbiY-clientY<95){
                dispatch(changeSevQaritex(props.tox,props.syun,'het-right'))
                // console.log('het utel ach')
            }else{
                setClientX(skzbiX);
                setClientY(skzbiY);

            }
        }
        else if(skzbiX-clientX>40 && skzbiX-clientX<90 ){
            if(skzbiY-clientY<-40 && skzbiY-clientY>-95){
                dispatch(changeSevQaritex(props.tox,props.syun,'left'));

            }else if(skzbiY-clientY>40 && skzbiY-clientY<90){
                dispatch(changeSevQaritex(props.tox,props.syun,'het-left'))
                // console.log('het utel dzax')
            }else{
                setClientX(skzbiX);
                setClientY(skzbiY);

            }
        }
        else{
            setClientX(skzbiX);
            setClientY(skzbiY);
        }

    }
    if(!props.xod){
        return(
            <div 
                onMouseDown={(e)=>mouseDown(e)}
                onMouseMove={(e)=>mouseMove(e)}
                onMouseUp={(e)=>mouseUp(e)}
                className='qar qar-sev' >
            </div>
    )
    }else{
        return(
            <div className='qar qar-sev' ></div>  
        )
    }
}
export default QarSev