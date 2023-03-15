import type { NextApiRequest, NextApiResponse } from 'next'
import { BlockFrostAPI } from '@blockfrost/blockfrost-js';

type Data ={
    value: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {    
    try {
        let json = await getVlaue("addr_test1wp34y3rwkf5wgfc32wcwguvlr3wzr9fhj5hw6sk0mul9k5q4pr369")
        let value = JSON.parse( JSON.stringify(json))
        res.status(200).json({value});
    } catch (error) {
        console.error(error);
    }
} 

export async function getVlaue(address: string){
    let value =0
    const API = new BlockFrostAPI({
        projectId : "previewE4fbR7220pwxt57EUS5zUybTBU6vlnPT",
     });
     let addressData = await API.addressesUtxos(address)
     let txAmount = addressData.map(hash => hash.amount)
     txAmount.forEach((arr)=>{
        arr.forEach((item)=>{
            if(item.unit== "lovelace"){
                value+=parseInt(item.quantity)
            }
        })
     })
     return value/1000000
}
