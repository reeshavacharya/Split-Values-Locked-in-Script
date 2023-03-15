import { NextPage } from "next";
import { useEffect, useState } from "react";
import { getVlaue } from "./api/apiManager";


const ContractValue: NextPage = (props) =>{
    const [Ada, setValue] = useState(null)
    useEffect( () => { 
        async function fetchData() {
          const value = await getVlaue("addr_test1wp34y3rwkf5wgfc32wcwguvlr3wzr9fhj5hw6sk0mul9k5q4pr369");
          setValue(value);
        }
        fetchData();
      }, []);  
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
      {Ada !== null ? (
        <h3 id="my-value" style={{color: 'yellow'}}>{JSON.parse(JSON.stringify(Ada)).value}</h3>
      ) : (
        <p style={{color: 'yellow'}}>Loading...</p>
      )}
    </div>
    );
}
export default ContractValue