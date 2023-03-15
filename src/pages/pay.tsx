import { NextPage } from "next"
import React, { useEffect, useState } from "react";
import { kuber, txHex } from "./api/kuber";
import { CardanoWallet, useWallet } from "@martifylabs/mesh-react";

const Pay: NextPage = () =>{
    const { wallet, connected } = useWallet();
    async function pay(ada : number){
        if(connected){
            const walletAddress = (await wallet.getUsedAddresses())[0];
            const jsonBody= {
                "selections" : [walletAddress],
                "outputs": [
                    {
                      "address": "addr_test1wp34y3rwkf5wgfc32wcwguvlr3wzr9fhj5hw6sk0mul9k5q4pr369",
                      "value": ada*1000000,
                      "datum": {"fields": [], "constructor":0}
                    }
                  ]
            }
            const tx = await kuber(jsonBody)
            const tx_hex = txHex(tx.tx)
            try{
                const tx_signed = await wallet.signTx(tx_hex)
                await wallet.submitTx(tx_signed);
                window.alert("transaction submitted successfully!")
            }
            catch(error){
                console.log("tx_hex error:" + error)
                window.alert("transaction failed: "+ error)

            }
        }
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