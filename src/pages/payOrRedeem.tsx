import { NextPage } from "next"
import { useState } from "react";
import Redeem from "./redeem";
import Pay from "./pay";
const PayRedeem: NextPage = () =>{

    const payHighlighter = document.getElementById('pay_highlighter') as HTMLElement
    const redeemHighlighter = document.getElementById('redeem_highlighter') as HTMLElement 
    const [showPay, setShowPay] = useState(false);
    const [showRedeem, setShowRedeem] = useState(false);

    const onShowPayClick = () => {
        setShowPay(true) 
        setShowRedeem(false)
        if(payHighlighter !== null && redeemHighlighter !== null){
            payHighlighter.style.display = 'block'
            redeemHighlighter.style.display = 'none'
        }
    }
    const onShowRedeemClick = ()=>{
        setShowRedeem(true)
        setShowPay(false)
        if(payHighlighter !== null && redeemHighlighter !== null){
            payHighlighter.style.display = 'none'
            redeemHighlighter.style.display = 'block'
        }
    }
    return (
        <>
            <div style={{display:'flex', justifyContent:'center'}}>
                <table cellSpacing={'20px'} align="center">
                    <tr style={{width:'50%'}}>
                        <td>
                        <button color="green" onClick={onShowPayClick} style={{width:'150px', padding:'4px', cursor:'pointer'}}>Pay</button>
                        <hr style={{display:'none'}} id="pay_highlighter"></hr>
                        </td>
                        <td style={{marginLeft:'2px'}}>
                        <button color="pink" onClick={onShowRedeemClick} style={{width:'150px', padding:'4px', cursor:'pointer'}}>Redeem</button>
                        <hr style={{display:'none'}} id="redeem_highlighter"></hr>
                        </td>
                    </tr>
                </table>
            </div>
            {showPay && <Pay/>}
            {showRedeem && <Redeem/>}
        </>
    )
}
export default PayRedeem