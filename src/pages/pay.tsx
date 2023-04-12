import { NextPage } from "next"
import React, { useEffect, useState } from "react";
import { kuber, txHex } from "./api/kuber";
import { useWallet } from "@martifylabs/mesh-react";
import {Kuber, CIP30Wallet}  from '../../kuber-client-js/src'


const Pay: NextPage = () =>{
    async function pay(ada : number){
        const kuber=new Kuber('https://preview.kuberide.com')
        const providers = CIP30Wallet.listProviders();
        if(!providers){
            alert('Wallet Not detected. Install Compatible cip-30 compatible wallet')
            return
        }
        let provider=providers[1];
        const wallet=provider.enable()
        console.info("Using Browser Wallet",{
                name: (await wallet).name,
                balance: (await (await wallet).calculateBalance()).multiAssetsUtf8()
                })
        return kuber.buildWithProvider(await wallet,{
            outputs:[
                {
                    "address": "addr_test1wp34y3rwkf5wgfc32wcwguvlr3wzr9fhj5hw6sk0mul9k5q4pr369",
                    "value": ada*1000000,
                    "datum": {"fields": [], "constructor":0},
                    "inlineDatum": true
                }
            ]
        }).then(async tx=>{
            (await wallet).signAndSubmit(tx)
        }).catch(e=>{
            alert((e && e.message) || e)
        })        
    }
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h3 style={{marginBottom:'8px'}}>Value in ADA:</h3>
            <input id="paymentInput"></input>
            <div style={{display:'flex',paddingTop:'12px'}}>
                <button color="Green" style={{width:'50px'}} onClick= { async ()=> {
                    const paymentInput = document.getElementById('paymentInput') as HTMLInputElement;
                    const ada = Number(paymentInput.value);
                    await pay(ada);
                }}>pay</button>
            </div>
        </div>
    );
}
export default Pay