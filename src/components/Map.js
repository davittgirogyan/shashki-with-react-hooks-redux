import React from 'react';
import { useSelector } from 'react-redux';
import WhiteElement from './WhiteElem';
import DarkElement from './DarkElem';
// import { getMap } from '../store/selectors/Selector';

const Map = ()=>{
    const map = useSelector(state => state.qartez.map);
    let vikluchatel = false;
    const content = <div>
                        {map.map((e,i)=>{
                            return <div style={{display:"flex"}} key={i} >
                                {e.map((n,idx)=>{
                                    if(idx%2===0){
                                        if(vikluchatel){
                                            if(n===1){
                                                return <WhiteElement key={idx}  qar='sev' tox={i} syun={idx} />
                                            }else if(n===2){
                                                return <WhiteElement key={idx} qar='spitak' tox={i} syun={idx} />
                                            }
                                            return <WhiteElement key={idx} tox={i} syun={idx} />
                                        } 
                                        else return <DarkElement key={idx} />
                                    }else if(idx%2===1){
                                        if(vikluchatel) return <DarkElement key={idx} />
                                        else {
                                            if(n===1){
                                                return <WhiteElement key={idx} qar='sev' tox={i} syun={idx} />
                                            }else if(n===2){
                                                return <WhiteElement key={idx} qar='spitak' tox={i} syun={idx} />
                                            }
                                            return <WhiteElement key={idx} tox={i} syun={idx} />
                                        }
                                    }
                                })}
                                {vikluchatel=!vikluchatel}
                                <br/>
                            </div>
                        })}

                    </div>
    return(
        content
    )
}

export default Map;