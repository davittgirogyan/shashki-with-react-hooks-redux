import React, { useState } from 'react';
import { changeSpitakQaritex } from '../store/reducers/QartezReducer';
import { useDispatch } from 'react-redux';

const QarSpitak = (props)=>{

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
        e.target.style.cursor= "grab";
        e.target.style.boxShadow="none"
        e.target.style.position = "initial"
        setMoveMethod(false);
        if(skzbiX-clientX<-40 && skzbiX-clientX>-110 && props.syun<7){
            if(skzbiY-clientY>45 && skzbiY-clientY<95){
                dispatch(changeSpitakQaritex(props.tox,props.syun,'right'))

            }else if(skzbiY-clientY<-45 && skzbiY-clientY>-95){
                dispatch(changeSpitakQaritex(props.tox,props.syun,'het-right'));
                // console.log('spitaki het ach')
            }else{
                setClientX(skzbiX);
                setClientY(skzbiY);
            }
        }
        else if(skzbiX-clientX>45 && skzbiX-clientX<85 && props.syun>0 ){
            if(skzbiY-clientY>45 && skzbiY-clientY<85){
                dispatch(changeSpitakQaritex(props.tox,props.syun,'left'));

            }else if(skzbiY-clientY<-45 && skzbiY-clientY>-95){
                dispatch(changeSpitakQaritex(props.tox,props.syun,'het-left'));
                // console.log("spitaki het dzax")
            }
            else{
                setClientX(skzbiX);
                setClientY(skzbiY);

            }
        }
        else{
            setClientX(skzbiX);
            setClientY(skzbiY);
        }

    }
    if(props.xod){

        return(
            <div 
                onMouseDown={(e)=>mouseDown(e)}
                onMouseMove={(e)=>mouseMove(e)}
                onMouseUp={(e)=>mouseUp(e)}
                className='qar qar-spitak' >
            </div>
    )
    }else{
        return(
            <div className='qar qar-spitak' ></div>  
        )
    }
}
export default QarSpitak