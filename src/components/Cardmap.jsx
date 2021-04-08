import React from 'react'
import Freelancecard from '../components/Freelancecard'
function Cardmap(val){
    return(
        <>
        <Freelancecard
        time = {val.time}
        rate = {val.rate}
        heading = {val.heading}
        designation ={val.designation}
        class1 = {val.class1}
        />

        </>
    )
}

export default Cardmap;