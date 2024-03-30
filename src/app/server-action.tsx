// "use server"
// import { redirect } from 'next/navigation'

// const url = 'http://localhost:3000/enemy.json'

// export async function serverAction(form) {
//   const num = form.get("input")
//   const resp = await fetch(
//     url,
//     { cache: 'no-store' }
//   )
//   const result = await resp.json()
//   let data = result.data[num]
//   if (data == null) {
//     data = {name:'-',level:'-'}
//   }

//   const query = 'name=' + data.name +
//     '&level=' + data.level
//   const searchParams = new URLSearchParams(query)
//   redirect('/other?' + searchParams.toString())
// }

"use server"
import { redirect } from 'next/navigation'
import fs from 'fs'

const fname = './data.txt'

export async function serverAction(form) {
  const input = form.get("input")
  fs.appendFileSync(fname, input + "\n")
  redirect('/other')
}

export async function readData() {
  return fs.readFileSync(fname, 'utf8')
}
