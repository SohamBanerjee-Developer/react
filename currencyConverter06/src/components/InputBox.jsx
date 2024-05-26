import React, { useId} from "react";
function InputBox({
    label,
    amount,
    amountDisabled = false,
    currencyDisabled= false,
    onChangeAmount,
    onChangeCurrency,
    currencyOptions=[],  
    selectCurrency="usd",
    className = "",
}) {
   
const id = useId();
    return (
               
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 float-left" htmlFor={id}>
                    {label}
                </label>
                <input
                    id={id}
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-600 cursor-pointer outline-none"
                    disabled= {currencyDisabled}
                    value={selectCurrency}
                    onChange={(e)=>onChangeCurrency && onChangeCurrency(e.target.value)}
                >
                    
                        
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                
                </select>
            </div>
        </div>
        
    );
}
export default InputBox;