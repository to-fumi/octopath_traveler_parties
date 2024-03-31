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

// "use server"

// import {serverAction} from './server-action'

// export default async function Home() {
//   return (
//     <main>
//       <h1 className="title">Index Page</h1>
//       <p className="msg">Please input number following the form.</p>
//       <div>
//         <form className="form" action={serverAction}>
//           <input className="input" type="text" name="input"/>
//           <button className="btn">Click</button>
//         </form>
//       </div>
//     </main>
//   )
// }

// "use client"
// import JsonItem from './JsonItem'
// import useSWR from "swr"

// const url = '/enemy.json'
// const fetcher = (...args) =>
//   fetch(...args).then(res => res.json())

//   export default function Home() {
//     const {data, error, isLoading} = useSWR(url, fetcher)

//     const doItem = (value)=>{
//       return <JsonItem data={value} />
//     }

//     // function doSWR() {
//     //   if (error) return <p>ERROR</p>
//     //   if (isLoading) return <p>isLoading...</p>
//     //   return(
//     //   <p>{data.message}</p>
//     //   )
//     // }

//     return(
//       <main>
//         <h1 className="title">Index page</h1>
//         <p className="msg font-bold">
//           ※Retrieve data by SWR.
//         </p>
//         {/* <div className="border p-2 m-5">{doSWR()}</div> */}
//         <table>
//           <thead>
//             <tr>
//               <th>name</th>
//               <th>level</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data ? data.data.map((value)=>doItem(value))
//             : <tr><td>-</td><td>-</td><td>-</td></tr>}
//           </tbody>
//         </table>
//       </main>
//     )
//   }

// "use server"
// import { SWRProvider } from "./swr-provider"
// import GetData from "./GetData"

// export default async function Home() {
//   return (
//     <main>
//       <h1 className="title">Index page</h1>
//       <p className="msg font-bold">
//         Get data by SWR.
//       </p>
//       <SWRProvider>
//         <GetData />
//       </SWRProvider>
//     </main>
//   )
// }

"use client"
import useSWR from 'swr'

const url = '/rh'
const fetcher = (...args) => fetch(...args)
  .then(res => res.json())

export default function Home() {
  const {data,error,isLoading} = useSWR(url, fetcher)
  return (
    <main>
      <h1 className='title'>Index page</h1>
      <p className='msg font-bold'>
        ※Get data by SWR
      </p>
      <p className='msg border p-2'>
        {error ? 'ERROR': isLoading ?
          'Loading': data.content + data.image}
      </p>
    </main>
  )
}
