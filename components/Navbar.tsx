import { useRouter } from 'next/router'
export default function Navbar(){
  const router = useRouter()
  return(
    <>
      <div className="grid grid-cols-2 gap-1 pt-6">
        <h1 className="pl-4 pr-16 font-bold text-xl">Next-binfo</h1>
        <p className="pl-20 font-bold" onClick={() => router.push("/history")}>History</p>
      </div>
    </>
  )
}