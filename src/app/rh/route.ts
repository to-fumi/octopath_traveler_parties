"use server"

export async function GET(request: Request) {
  const res = { content:'Hello, this is API content!',
                image: 'Text Image'}
  return new Response(JSON.stringify(res), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}