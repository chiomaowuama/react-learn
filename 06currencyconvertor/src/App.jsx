import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)     //this is any amount the person put in the inpute box
  const [from, setFrom] = useState('usd')   // this is what ever currency the person chooses convert from
  const [to, setTo] = useState('inr')       // this iswhat ever currency the person is converting to 
  const [convertedAmount, setConvertedAmount] = useState(0)  //this is the amount theconverted currency becomes 

  const currencyInfo = useCurrencyInfo(from)  // this uses the api responds and stored it in currency info
  const options = Object.keys(currencyInfo)   //this looks into the res from the api and picks the keys and stores in options

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {    //this function tahes the amount base on the currency the person puts, the currency the pweson chooses to convert to  and multiplies it
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
   
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}  // this tracks what happens when user changes the currency
              onAmountChange={(amount) => setAmount(amount)}  //this tracks the amount changing and makes sure the system gets and passes the new value
              selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="to"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
