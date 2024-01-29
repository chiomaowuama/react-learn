import React , { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {
    const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2' >
            <label htmlFor={id} id={id} className='text-black/40 mb-2 inneline-block'>{label}</label>
            <input type="number" className='w-full bg-transparent py-1.5 outline-none 'placeholder='amount' disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
        </div>
        <div className='w-1-2'>
            <p className='text-black/40 mb-2 inneline-block'>Cureency TYpe</p>
            {/* <input type="number" className='w-full bg-transparent py-1.5 outline-none 'placeholder='amount' disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} /> */}
            <select className='' vlaue={selectedCurrency} onChange={(e) =>{ onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={currencyDisabled}>
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                            {currency}
                    </option>
                ))}
                

            </select>
        </div>
    </div>
  )
}

export default InputBox