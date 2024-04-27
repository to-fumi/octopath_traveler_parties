export default function Enemy({params}:{params:{id: number}}) {
  // ここにボスの情報を載せていくmainTitleはボスのname,
  // その他情報はここに載せていく。画像とかも含めて 
  // useSearchParamsでもUrlの変数を取得可能
  return (
    <>
      <p className="mainTitle">{params.id}</p>
    </>
  )
}