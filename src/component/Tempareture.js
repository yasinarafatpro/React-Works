import React from "react";

const TempType={
    c:'celsious',
    f:'farnhite'
}

export function Temperature({tempature,scale,handleChange}) {
    
        return(
            <fieldset>
                <legend>Please enter tempature in {TempType[scale]}</legend>
                <input type='number' value={tempature} onChange={(e)=>handleChange(e,scale)}></input>
            </fieldset>
        )
}