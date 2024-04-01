// "use server"

// const url = 'http://localhost:3000/enemy.json'

// export async function GET(request: Request) {
//   const result = await fetch(url, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const data = await result.json()

//   const { searchParams } = new URL(request.url)
//   var id = +searchParams.get('id')
//   id = id < 0 ? 0 : id >= data.data.length ? data.data.length - 1 : id

//   const item = data.data[id]

//   return new Response(JSON.stringify(item), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json'}
//   })
// }

// "use server"
// import fs from 'fs'

// const path = './data.txt'

// export async function GET(request: Request) {
//   const content = fs.readFileSync(path, {flag:'a+'})
//     .toString().trim()

//   return new Response(JSON.stringify({content:content}), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   })
// }

// export async function POST(request: Request) {
//   const body = await request.json()
//   fs.appendFileSync(path, body.content + "\n")
//   return new Response(
//     JSON.stringify({ content:'ok' }),
//     {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     }
//   )
// }

"use server"
import fs from 'fs'

const path = './form.txt'

export async function GET(request: Request) {
  const content = fs.readFileSync(path, {flag:'a+'})
    .toString().trim()
  return new Response(JSON.stringify({content:content.toString()}), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const level = formData.get('level')
  const content = 'NAME: ' + name + '\n' +
    'LEVEL: ' + level
  fs.writeFileSync(path, content)
  return new Response({status:'ok'})
}
