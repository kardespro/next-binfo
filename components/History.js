import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
export default function History(){
  const [log,setLog] = useState({})
  const [s,t] = useState("")
  const [sa,ssa] = useState(true)
  const router = useRouter()
  useEffect(() => {
    let data = window.localStorage.getItem("__history")
    if(!data){
      ssa(false)
    }
    let d = JSON.parse(data)

    
  /*  let dd = d.title || "Title Not Found"
    let ddd = dd.slice(0, 24) + "...";
    t(ddd)*/
    setLog(d)
  })
  function remove(){
    window.localStorage.removeItem("__history")
    ssa(false)
    setLog()
  }
  return(
    <>
      {sa ?(
      <>
    <div className="pt-12"></div>
    <div className="py-3 px-5 mb-1.5 rounded-xl bg-white p-4">
    <h1 className="text-center font-bold">History</h1>
      <div className="pt-6 flex space-x-2">
       <img src={log.faviconUrl || ""} className="rounded-xl bg-indigo-500 w-16 h-16" />
        <p className="pt-4 pl-12 font-bold">{log.title  || ""}</p>
        
      
      </div>
      <div className="pt-6">
      <button className="py-3 px-5 bg-indigo-500 text-white rounded-xl flex space-x-2" onClick={() => router.push(log.url || "/")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
        <span>Visit</span>
</button>
      </div>
    </div>
      <div className="pt-12 grid grid-cols-2 gap-2">
       <button className="flex space-x-2 py-3 px-5 rounded-xl bg-indigo-500 text-white" onClick={() => window.location.href = "/"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>

         <span>Home</span>
       </button>
        <button className="py-3 px-5 rounded-xl bg-red-500 text-white flex space-x-2" onClick={() => remove()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

          <span>Delete</span>
        </button>
      </div>
      </>
      ):(
      <>
       <div className="pt-12"></div>
      <div className="py-3 px-5 rounded-xl bg-white p-4 transition-all duration-700 ease-in-out">
       <h1 className="text-center font-bold">History</h1>
    <div className="pt-12">
     <p className="text-red-500 text-center"> You Dont have History Yet</p>
    </div>
         <div className="pt-12"></div>
   
      </div>
        <div className="pt-6">
        <button className="flex space-x-2 py-3 px-5 rounded-xl bg-indigo-500 text-white" onClick={() => router.push("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>

         <span>Home</span>
       </button>
       
        </div>
      </>
        )}
        
    </>
  )
}