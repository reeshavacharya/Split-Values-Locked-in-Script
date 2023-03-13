import type { NextApiRequest, NextApiResponse } from 'next'
import { BlockFrostAPI } from '@blockfrost/blockfrost-js';

type Data ={
    utxos: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {    
    try {
        let json = await getUtxos("addr_test1wpuxaj2hl67ete0nchuenhc4utmuevep2umnn7ajm0xdfnsmquxcs")
        let utxos =JSON.parse( JSON.stringify(json))
        res.status(200).json({utxos});
    } catch (error) {
        console.error(error);
    }
}  

export async function getUtxos(address: string){
    if (typeof window === 'undefined') {
        const dns = require('dns');
        dns.setServers(['1.1.1.1', '8.8.8.8']); 
    }
    const txsUtxoInputs: any=[]
    const API = new BlockFrostAPI({
        projectId : "previewE4fbR7220pwxt57EUS5zUybTBU6vlnPT",
     });
     let addressData = await API.addressesUtxos(address)

     let txAmount = addressData.map(hash => hash.amount)

     return txAmount
}
