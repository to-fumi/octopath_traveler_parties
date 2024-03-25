'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  var [input, setInput] = useState("")
  var [message, setMessage] = useState("your name:")

  const doChange = (event)=> {
    setInput(event.target.value)
  }
  const doClick = ()=> {
    setMessage("Hello, " + input + "!!")
    setInput("")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="title">Next.js sample.</h1>
      <p className="msg">{message}</p>
      <div className="m-5">
        <input type="text" onChange={doChange} value={input}
          className="input"/>
        <button onClick={doClick}
          className="btn">
          Click</button>
      </div>
      <h1 className="title">Top page</h1>
      <p className='msg'>This is other page sample.</p>
      <div>
        <Link href="/other">go other page</Link>
      </div>
    </main>
  );
}
