import React, { useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8)
  const [symbol, setSymbol] = useState(true)
  const [letter, setLetter] = useState(false)
  const [password, setpassword] = useState("")

  const alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  const alphabetsUpper = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
    "'", '"', ',', '.', '<', '>', '/', '?', '\\', '|', '~', '`'
  ];
  const numbersAsStrings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


  let generatePassword = (e) => {
    e.preventDefault();
    console.log('hi')
    let NUM = numbersAsStrings[Math.floor(Math.random() * numbersAsStrings.length)];
    let SYMBOL = symbols[Math.floor(Math.random() * symbols.length)]
    let ALPHABET = alphabets[Math.floor(Math.random() * alphabets.length)]
    let UPPER_ALPHABET = alphabetsUpper[Math.floor(Math.random() * alphabetsUpper.length)]
    console.log(NUM, SYMBOL, ALPHABET, UPPER_ALPHABET)

    const allChars = [
      ...numbersAsStrings,
      ...symbols,
      ...alphabets,
      ...alphabetsUpper
    ];

    let result = '';
    for (let i = 0; i < length; i++) {
      // pick from full set — you can change logic to respect toggles (symbol/letter) if needed
      const char = allChars[Math.floor(Math.random() * allChars.length)];
      result += char;
    }
    console.log(result)
    setpassword(result)
    document.getElementById('pass').value = password
  }

  return (
    <div className='h-screen flex justify-center items-center flex-col gap-10'>
      <h1 className='text-emerald-300 text-center text-5xl tracking-widest'>Password Generator</h1>
      <form className='bg-emerald-600 h-[80vh] w-[30vw] rounded-3xl flex flex-col justify-around items-center gap-5'>
        <input type="text" id="pass" placeholder='password' className='border p-2 rounded outline-0 border-emerald-300' />

        <div className='flex flex-col gap-5'>
          <button onClick={() => {
            navigator.clipboard.writeText(document.getElementById('pass').value)
            alert("Copied!")

          }} className=' active:scale-95 bg-emerald-950 py-2 px-5 rounded-2xl cursor-pointer'>Copy</button>
          <button type='submit' className=' active:scale-95 bg-emerald-950 py-2 px-5 rounded-2xl cursor-pointer' onClick={generatePassword}>Generate password</button>
        </div>
      </form>
    </div>
  )
}

export default App