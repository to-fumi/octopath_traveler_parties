// "use server"
// import { Metadata } from 'next'

// export async function generateMetadata() {
//   return {
//     title: 'Octopath Traveler Parties',
//   }
// }

// const url = 'http://localhost:3000/enemy.json'

// const defaultProps = {
//   title: "Octopath Traveler Parties",
//   msg: "This place to put your strategy as your party."
// }

// async function getEnemyData() {
//   const resp = await fetch(
//     url,
//     { cache: 'no-store' }
//   )
//   const result = await resp.json()
//   return result
// }

// export default async function Home() {
//   const data = await getEnemyData()
//   return (
//     <main>
//       <h1 className="title">{defaultProps.title}</h1>
//       <p className="msg">{defaultProps.msg}</p>
//       <p className="msg">{data.message}</p>
//     </main>
//   )
// }

// "use client"
// import { useState } from 'react'
// import { useSearchParams } from 'next/navigation'

// const url = 'http://localhost:3000/enemy.json'

// async function getEnemyData() {
//   const resp = await fetch(
//     url,
//     { cache: 'no-store' }
//   )
//   const result = await resp.json()
//   return result
// }

// export default function Home() {
//   const searchParams = useSearchParams()
//   var [input, setInput] = useState("")
//   var [msg, setMsg] = useState('dummy message.')
//   const doChange = (event)=> {
//     setInput(event.target.value)
//   }
//   function doAction() {
//     getEnemyData().then(resp=>{
//       setMsg(resp.message)
//     })
//   }
//   return (
//     <main>
//       <h1 className="title">Index Page</h1>
//       <ul> ※パラメーター
//         <li>ID: {searchParams.get('id')}</li>
//         <li>PASS: {searchParams.get('pass')}</li>
//       </ul>
//       <p className="msg">{msg}</p>
//       <div className="form">
//         <button className="btn"
//         onClick={doAction}>Click</button>
//       </div>
//     </main>
//   )
// }

"use server"

import {serverAction} from './server-action'

export default async function Home() {
  return (
    <main>
      <h1 className="title">Index Page</h1>
      <p className="msg">Please input number following the form.</p>
      <div>
        <form className="form" action={serverAction}>
          <input className="input" type="text" name="input"/>
          <button className="btn">Click</button>
        </form>
      </div>
    </main>
  )
}
