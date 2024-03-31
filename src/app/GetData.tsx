'use client'
import useSWR from 'swr'

const url = './enemy.json'
const fetcher = (...args) => fetch(...args)
  .then(res => res.json())

export default function GetData() {
  const {data, error, isLoading} = useSWR(url, fetcher)
  return (
    data ?
      <p className='msg border p-2'>{data.message}</p>
      // <p className='msg'>{data.data.map((value) => value.name)}</p>
      : <p className='msg border p-2'>no data</p>
  )
}