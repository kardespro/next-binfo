import axios from 'axios'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
export default function Search(){
   const router = useRouter()
   const [favourite,setFavourite] = useState([])
   const [search,setSearch] = useState()
   const [sAble,ssAble] = useState(false)
   const handleSubmit = async(e) => {
     e.preventDefault()
     let d = await axios.get(`/api/entilements/test?url=${e.target.url.value}`, { headers: { "Content-Type": "application/json"}})
     let p = {
       url: e.target.url.value,
       title: d.data.title,
       faviconUrl: d.data.faviconUrl
     }
     let p2 = JSON.stringify(p)
     window.localStorage.setItem("__history", p2)
     ssAble(true)
     setSearch(d.data)
   }
  return(
    <>
    <div className="p-4 flex mb-1.5 bg-white shadow rounded-xl">
     <form onSubmit={handleSubmit}>
      <div className="flex space-x-2">
      <input 
        name="url"
        className="bg-white py-3 px-5 rounded-xl border-2 border-indigo-500 hover:border-2 hover:border-indigo-500 focus:border-2 focus:border-indigo-500"
        type="url"
        placeholder="https://example.com"
        required
        />
        <button type="submit" className="bg-indigo-500 py-3 px-5 rounded-xl text-white hover:bg-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</button>
      </div>
       
     </form>
    </div>
      {sAble ?(
       <div className="pt-12">
   <div className="p-4 py-3 px-5 bg-white mb-1.5 rounded-xl duration-300">
     <h1 className="font-bold text-center">Results</h1>
     <p className="text-left font-bold text-xs pt-6">Next.js Server : {search.isNext ?( <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></span> ):( <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span> )}</p>
     <p className="text-left text-xs font-bold pt-4">
     BuildID : {search.isNext ?(
         <p className="text-indigo-500">{search.buildID}</p>
         ):(
         <p className="text-red-500">Unknown</p>
     )}
     </p>
     <p className="text-left text-xs font-bold pt-4">
      Pages : {search.isNext ?(
         <p className="text-indigo-500">/,/_app,/_error</p>
         ):(
         <p className="text-red-500">Unknown</p>
      )}
     </p>
     {search.isNext ? (
         <>
     <p className="text-left font-bold text-xs pt-4">Header</p>
     <div className="flex space-x-2 pt-2">
      <img src={search.faviconUrl} className="rounded-xl w-12 h-12 bg-indigo-500" />
       <p className="pt-2 font-bold">{search.title}</p>
     </div>
         </>
         ):(
         <p></p>
     )}
  </div>
   </div>
      ):(
       <div className="pt-12">
   <div className="p-4 py-3 px-5 bg-white mb-1.5 rounded-xl">
    <div className="pt-12 text-center text-xs">
   
    <p className="font-bold">You Dont Have Search Yet</p>
      <p className="text-center text-xs text-blue-600">Visit <button onClick={() => router.push("/history")}>History</button></p>
    </div>
     <div className="pt-12"></div>
  </div>
   </div>
      
      )}
    </>
  )
}