import React from 'react'
import Jobcard from '../components/JobCard'


function Jobmap(val){
    return(
        <>
        <Jobcard
            pic = {val.pic}
            heading = {val.heading}
            word = {val.word}
            icon ={val.icon}
            Job = {val.Job}
            jobType = {val.jobType}
            location = {val.location}
            price = {val.price}
            premium = {val.premium}

        />
        </>
    )
    }

export default Jobmap