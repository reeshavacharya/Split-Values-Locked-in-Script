import { NextPage } from "next"
import React, { useState } from "react";

const Pay: NextPage = () =>{
    const RadioOptions =["ADA", 'Lovelace'];
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h3 style={{marginBottom:'8px'}}>Value in:</h3>
            <div style={{display:'flex', gap:'10px',alignItems:'center'}}>
            {RadioOptions.map(r => (
                <div style={{display:'flex',paddingBottom:'12px'}}>
                    <input type="radio" value={r.toLowerCase()} name="valueIn"/>
                    <label>{r}</label>   
                </div>
            ))}
            </div>
            <input></input>
            <div style={{display:'flex',paddingTop:'12px'}}>
                <button color="Green" style={{width:'50px'}}>pay</button>
            </div>
        </div>
    );
}
export default Pay