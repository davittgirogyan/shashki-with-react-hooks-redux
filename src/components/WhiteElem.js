import React from 'react';
import QarSev from './QarSev';
import QarSpitak from './QarSpitak';
import { useSelector } from 'react-redux';

const WhiteElement = (props)=>{
    const xod = useSelector(st=>st.qartez.spitakiXod);
    const {qar} = props
    return(
        <div className='elem elem-white' >
            {qar && qar==='sev' && <QarSev {...props} xod={xod} />}
            {qar && qar==='spitak' && <QarSpitak {...props} xod={xod} />}
        </div>
    )
}
export default WhiteElement;