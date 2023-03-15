import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import {
  Transaction,
} from '@emurgo/cardano-serialization-lib-asmjs';

export async function kuber(json:any) {  
    const config: AxiosRequestConfig= {
      method: 'post', 
      url: 'https://preview.kuberide.com/api/v1/tx',
      data: json 
    }
    const res = await axios(config)
    return res.data;
  }

export function txHex(_tx : string):string {
  return Transaction.from_hex(_tx).to_hex()
}  