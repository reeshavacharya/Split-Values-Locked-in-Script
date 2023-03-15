import { parse } from "path";

export async function getVlaue(address: any){
    let headersList = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    
    let bodyContent = JSON.stringify({address});
  
    console.log(address)
  
    let response = await fetch("/api/getContractValue", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    
    let data = await response.json();
    return data
  }

  export async function getUtxos(address: any){
    let headersList = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    
    let bodyContent = JSON.stringify({address});
  
    console.log(address)
  
    let response = await fetch("/api/getUtxos", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    let data = await response.json();
    return data
  }