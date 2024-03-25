'use client'

import Link from 'next/link'
import Image from 'next/image'
// I'm prefer to use the below style module css.
import styles from './style.module.css'
import './style.css'
import JSXStyle from 'styled-jsx/style'

export default function Home() {
  return (
    <main>
      <JSXStyle>
        {`p.jsx-msg {
          margin: 10px;
          text-align:center;
          color: purple;
          font-weight: bold;
        }`}
      </JSXStyle>
      <h1 className='title'>Good Morning, It sunny day!</h1>
      <h1 className={styles.title}>Other page</h1>
      <p className={styles.msg}>In the other page.</p>
      <p className='jsx-msg'>This is JSXStyle in other page</p>
      <div>
        <Image alt='image' src="/coffee.jpeg" width={200} height={200} />
      </div>
      <div>
        <Link href="/">go back home</Link>
      </div>
    </main>
  )
}