// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// // I'm prefer to use the below style module css.
// import styles from './style.module.css'
// import './style.css'
// import JSXStyle from 'styled-jsx/style'

// export default function Home() {
//   return (
//     <main>
//       <JSXStyle>
//         {`p.jsx-msg {
//           margin: 10px;
//           text-align:center;
//           color: purple;
//           font-weight: bold;
//         }`}
//       </JSXStyle>
//       <h1 className='title'>Good Morning, It sunny day!</h1>
//       <h1 className={styles.title}>Other page</h1>
//       <p className={styles.msg}>In the other page.</p>
//       <p className='jsx-msg'>This is JSXStyle in other page</p>
//       <div>
//         <Image alt='image' src="/coffee.jpeg" width={200} height={200} />
//       </div>
//       <div>
//         <Link href="/">go back home</Link>
//       </div>
//     </main>
//   )
// }

// "use client"
// import Link from 'next/link'
// import { useSearchParams } from 'next/navigation'

// export default function Other() {
//   const params = useSearchParams()
//   return (
//     <main>
//       <h1 className="title">Other page</h1>
//       <p className="msg">Completed to send your data with form and have received following data.</p>
//       <ol>
//         <li className="msg">Name: {params.get('name')}</li>
//         <li className="msg">Level: {params.get('level')}</li>
//       </ol>
//       <div>
//         <a href="/">go back</a>
//       </div>
//     </main>
//   )
// }

// "use server"
// import Link from 'next/link'
// import {readData} from '../server-action'

// export default async function Other() {
//   const data = await readData()
//   return (
//     <main>
//       <h1 className='title'>Other Page</h1>
//       <p className='msg'>Stored messages</p>
//       <pre className='m-5 p-2 border'>{data}</pre>
//       <div>
//         <a href="/">go back</a>
//       </div>
//     </main>
//   )
// }

"use client"
import Link from 'next/link'
import {readData} from '../server-action'
import {useState, useEffect} from 'react'

export default function Other() {
  const [data, setData] = useState('nodata')
  useEffect(()=> {
    readData().then(res=>{
      setData(res)
    })
  },[])
  return (
    <main>
      <h1 className='title'>Other page</h1>
      <p className='msg'>Stored send messages</p>
      <pre className='m-5 p-2 border'>{data}</pre>
      <div>
        <a href="/">go back</a>
      </div>
    </main>
  )
}
