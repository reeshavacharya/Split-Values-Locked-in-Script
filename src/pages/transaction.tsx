import type { NextPage } from "next";
import * as React from "react";
import { useEffect, useState } from "react";
import { CardanoWallet, useWallet } from "@martifylabs/mesh-react";
import { MeshProvider } from "@martifylabs/mesh-react";
import { BrowserWallet } from "@martifylabs/mesh";
import PayRedeem from "./payOrRedeem";
import Link from "next/link";
import { useRouter } from "next/router";


const Transaction: NextPage = () =>{
    const {connect, connected, disconnect} = useWallet(); 
    const [wallets, setWallets] = useState<Array <{ name: string; icon: string, version: string}>>([])

    useEffect(()=> {
        setWallets(BrowserWallet.getInstalledWallets());
    }, [])

    const connectWallet = async (walletName: string) => {
        try {
            await connect(walletName)
        } catch (error) {
            console.log("Wallet Connect Error: "+error);
        }
    }

    return (
            <>
                {!connected && (
                    <>
                    <br></br>
                    <h4 style={{display:'flex', justifyContent:'center', paddingTop:'20px'}}>Connect to your wallet</h4>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        {wallets.map(wallet => (
                            <div key={wallet.name} 
                                    style={{display:'flex', marginTop:"24px", border:'2px solid', cursor:'pointer',padding:'2px', borderRadius:'1px', borderColor:'#efefef',alignItems:'center', justifyContent:'center', height:'30px', width:'150px'}} 
                            onClick={()=>connectWallet(wallet.name)}>
                                <img style={{width:'20px', height:'20px'}} src={wallet.icon}/>
                                <div><p>{wallet.name}</p></div>
                            </div>
                            
                        ))}
                    </div>
                    </>
                )
                }
                {connected && (
                     <>
                     <div style={{display:'flex', justifyContent:'center'}}>
                            <div style={{display:'flex', marginTop:"24px", cursor:'pointer',border:'2px solid',padding:'2px', borderRadius:'1px', borderColor:'#efefef',alignItems:'center', height:'30px', width:'180px'}} 
                            onClick={disconnect}>
                                <p color="red">Disconnect Wallet</p>
                            </div>
                     </div>
                    <div>
                        <PayRedeem></PayRedeem>
                    </div>
                     </>
                )
                }

            </>
    );
}
export default Transaction;
