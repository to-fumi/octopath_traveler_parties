import Image from 'next/image'
//Clickしたらその敵のキャラクターのパラメーターをダイナミックパラメータとして持たせる
export default function Name({params}:{params:{name: string}}) {
  return (
    <main>
      <h1 className="title">Other page</h1>
      <p className="msg">your name is {params.name}, right?</p>
      <Image alt='' src={'/'+params.name+'.jpeg'} width={200} height={300}></Image>
      <div>
        <a href="/">go back home!</a>
      </div>
    </main>
  )
}