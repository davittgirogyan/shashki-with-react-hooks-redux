const CHANGE_SPITAK_QARI_TEX = "CHANGE_SPITAK_QARI_TEX";
const CHANGE_SEV_QARI_TEX = "CHANGE_SEV_QARI_TEX";
const CHANGE_SPITAKI_XOD = "CHANGE_SPITAKI_XOD";

const changeQariTex = (state,action,guyn)=>{
    let {tox,syun,uxxutyun} = action;
    let map = [...state.map];
    let arr2 = [...map[tox]];
    let spitakiXod = true
    arr2[syun]=0;
    if(guyn==='sev'){
        let arr3 = [...map[tox+1]];
        let arr4 = [...map[tox+2]];
        if(uxxutyun==='right'){
            if(arr3[syun+1]===0){
                arr3[syun+1]=1
                // spitakiXod=true
            }else if(arr3[syun+1]===2){
                if(arr4[syun+2]===0){
                    arr4[syun+2]=1;
                    arr3[syun+1]=0;
                    // spitakiXod=true
                }else{
                    arr2[syun]=1
                    spitakiXod=false
                }
            }else if(arr3[syun+1]===1 || !arr3[syun+1]){
                arr2[syun]=1
                spitakiXod=false
            }
        }else if(uxxutyun==='left'){
            if(arr3[syun-1]===0){
                arr3[syun-1]=1
            }else if(arr3[syun-1]===2){
                if(arr4[syun-2]===0){
                    arr4[syun-2]=1;
                    arr3[syun-1]=0;
                }else{
                    arr2[syun]=1
                    spitakiXod=false
                }
            }else if(arr3[syun-1]===1 || !arr3[syun-1]){
                arr2[syun]=1
                spitakiXod=false
            }
            // arr3[syun-1]=1
        }
        map[tox] = arr2;
        map[tox+1]=arr3;
        map[tox+2]=arr4
    }else if(guyn==='spitak'){
        let arr3 = [...map[tox-1]];
        let arr4 = [...map[tox-2]];
        map[tox] = arr2;
        if(uxxutyun==='right'){
            if(arr3[syun+1]===0){
                arr3[syun+1]=2;
                spitakiXod=false
            }else if(arr3[syun+1]===1){
                if(arr4[syun+2]===0){
                    arr4[syun+2]=2;
                    arr3[syun+1]=0;
                    spitakiXod=false
                }else{
                    arr2[syun]=2
                    spitakiXod=true
                }
            }else if(arr3[syun+1]===2){
                arr2[syun]=2
                spitakiXod=true
            }
        }else if(uxxutyun==='left'){
            if(arr3[syun-1]===0){
                arr3[syun-1]=2;
                spitakiXod=false
            }else if(arr3[syun-1]===1){
                if(arr4[syun-2]===0){
                    arr4[syun-2]=2;
                    arr3[syun-1]=0;
                    spitakiXod=false
                }else{
                    arr2[syun]=2
                    spitakiXod=true
                }
            }else if(arr3[syun-1]===2){
                arr2[syun]=2
                spitakiXod=true
            }
        }
        map[tox-1]=arr3
        map[tox-2]=arr4

    }
    return{
        ...state,
        map,
        spitakiXod
    }

}


let initialState = {
    map:[
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [2,0,2,0,2,0,2,0],
        [0,2,0,2,0,2,0,2],
        [2,0,2,0,2,0,2,0],
    ],
    spitakiXod:true
}

const QartezReducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_SPITAK_QARI_TEX:
            let res = changeQariTex(state,action,'spitak');
            return {
                ...state,
                map:[...res.map],
                spitakiXod:res.spitakiXod
            }
        case CHANGE_SEV_QARI_TEX:
            let map = changeQariTex(state,action,'sev');
            return {
                ...state,
                map:[...map.map],
                spitakiXod:map.spitakiXod
            }

        case CHANGE_SPITAKI_XOD:
            return{
                ...state,
                spitakiXod:!state.spitakiXod
            }
        
        default: 
            return state
        
    }
}




export const changeSpitakQaritex = (tox,syun,uxxutyun)=>({type:CHANGE_SPITAK_QARI_TEX,tox,syun,uxxutyun});
export const changeSevQaritex = (tox,syun,uxxutyun)=>({type:CHANGE_SEV_QARI_TEX,tox,syun,uxxutyun});
export const changeSpitakiXod = ()=>({type:CHANGE_SPITAKI_XOD});


export default QartezReducer;