import { NextPage } from "next"
import React, { useState } from "react";

const Redeem: NextPage = () =>{
    const RadioOptions =["ADA", 'Lovelace'];
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h3>Are you sure you want to redeem?</h3>
            <div style={{display:'flex',paddingTop:'12px'}}>
                <button color="Green" style={{width:'80px', height:'30px', margin:'10px'}}>Yes</button>
                <button color="pink" style={{width:'80px',height:'30px', margin:'10px'}}>No</button>
            </div>
        </div>
    );
}
export default Redeem