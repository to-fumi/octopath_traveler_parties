"use client"
import { useState } from 'react'
import useSWR from 'swr'

const url = 'http://localhost:3000/rh'
const fetcher = (...args) => fetch(...args)
  .then(res => res.json())

export default function Home() {
  const [name, setName] = useState('')
  const [level, setLevel] = useState('')
  const {data, error, mutate, isLoading} = useSWR(url, fetcher)
  const doName = (event)=> {
    const val = event.target.value
    setName(val)
  }
  const doLevel = (event)=> {
    const val = event.target.value
    setLevel(val)
  }

  async function login(formData: FormData) {
    fetch('/rh', {
      method: 'POST',
      body: formData
    }).then(response => {
      setName('')
      setLevel('')
      mutate()
    })
    .catch(error => {
      console.log(error)
    });
  }

  return (
    <main>
      <h1 className='title'>Login page</h1>
      <p className='msg font-bold'>
        Input name and level:
      </p>
      <form action={login}>
        <div><input type='text' className='input mx-5 my-1'
          name='name' value={name} onChange={doName} /></div>
        <div><input type='password' className='input mx-5 my-1'
          name='level' value={level} onChange={doLevel} /></div>
        <div className='mx-3'><button className='btn my-1'>Click</button></div>
      </form>
      <pre className='msg border p-2'>
        {error ? 'ERROR' : isLoading ?
          'loading...' : data.content}
      </pre>
    </main>
  )
}