import { useRouter } from 'next/router'
import axios from 'axios'
import { useState , useEffect } from 'react'
export default function LookupData(){
  
  const [search,setSearch] = useState({})
  const [ping,setPing] = useState("")
  const router = useRouter() 
  const { pid } = router.query 

  useEffect(() => {
    (async() => {
    let data = await axios.get(`/api/entilements/lookup?id=${pid}`)
    if(data.data.errorCode === 404){
      
      setSearch(null)
    }
    if(!data.data.error){
      setSearch(data.data)
      
    }
    })()
  })
  return(
    <>
      {!search && 
      <div className="pt-24"></div>
      }
      {search ?(
        <div className="pt-12">
   <div className="p-4 py-3 px-5 bg-white mb-1.5 rounded-xl duration-300">
     <h1 className="font-bold text-center">Results</h1>


         <p className="text-left font-bold text-xs pt-6">Badges : </p>
    <p className="flex space-x-3">
      {search.verified ?(
         <span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>

         </span>
         ):(
         <p></p>
      )}
      {search.loved ?(
         <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
</span>
         ):(
           <p></p>
      )}
      
      {search.dev ?(
         <span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>

         </span>
         ):(
          <p></p>
      )}
    </p>
     <p className="text-left font-bold text-xs pt-6">Next.js Server : 
       {search.isNext ?( <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
     {search.isNext ?(
         <p className="text-left font-bold text-xs pt-4">Using TailwindCss? :</p>
         ):(
         <p></p>
     )}
      {search.isNext && search.isTW  ?(
         
         
         <p>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

         </p>
          ):(
         <p>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


         </p>
           )}
    
     {search.isNext ? (
         <>
     <p className="text-left font-bold text-xs pt-4">Header</p>
     <div className="flex space-x-2 pt-2">
      <img src={search.faviconUrl || "/external/withbg.png"} className="rounded-xl w-12 h-12 bg-indigo-500" draggable="false" />
       <p className="pt-2 font-bold">{search.title.slice(0, 32) + "..." || "Title Not Found"}</p>
     </div>
         </>
         ):(
         <p></p>
     )}

     
   </div>
          </div>
      ):(
        <div className=" p-4 mb-1.5 bg-white shadow rounded-xl">
        <h1 className="text-red-600 text-center font-bold text-xl">This ID Not found in Database</h1>
       </div>
      )}
      </>
  )
}