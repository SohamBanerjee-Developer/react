import { useState, useEffect } from "react";

function useCurrencyInfo(Currency){
    const [currency, setCurrency] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`).then((res)=>res.json())
        .then((res)=>setCurrency(res[Currency]))
      console.log(currency);
    },[Currency])
    console.log(currency);
    return currency;
}
export default useCurrencyInfo;