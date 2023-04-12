import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'
export default function DocsApiDocsStarted(){
  const router = useRouter()
  return(
    <>
      <Navbar />
      <div className="pt-12"></div>
     <h1 className="text-center text-indigo-500 font-bold">Next-Binfo - Free API</h1>
      <p className="text-indigo-500 font-bold text-center text-xs">API Host: https://next-binfo.vercel.app</p>
      <div className="pt-24"></div>
    <div className="  p-4 flex mb-1.5 bg-white shadow rounded-xl text-blue-500 text-xs">
    /api/entilements/test?url={`<Website URL Here With https://>`}
    </div>
      <div className="pt-6">
      <div className="p-4 flex mb-1.5 bg-white shadow rounded-xl">
        <p className="text-indigo-500 text-center font-bold flex space-x-3 gap-2.5">Response : <span className="pl-24 text-green-500 font-bold">200</span> <span className="text-red-500 font-bold">404</span></p>
       
       
      </div>
         <div className=" rounded-xl bg-green-600 text-white shadow mb-1.5 text-xs p-4 overflow-y">
          {`
           {
            isAvaliable: true,
            isNext: true,
            isTW: true,
            title: "Nego-Dev.com",
            faviconURL: "https://isdn.nego-dev.com",
            loved: true,
            dev: true,
            verified: true
           }
          
          `}
        </div>
        <div className="pt-6"></div>
  <div className=" rounded-xl bg-red-600 text-white shadow mb-1.5 text-xs p-4 overflow-y">
          {`
           {
            isAvaliable: false,
            isNext: false
           }
          
          `}
        </div>
        <div className="pt-6"></div>
  <div className=" rounded-xl bg-red-600 text-white shadow mb-1.5 text-xs p-4 overflow-y">
          {`
           {
            isAvaliable: true,
            isNext: false
           }
          
          `}
        </div>
        <div className="pt-6"></div>
  <div className=" rounded-xl bg-red-600 text-white shadow mb-1.5 text-xs p-4 overflow-y">
          {`
           {
            isAvaliable: false,
            isNext: false,
            error: "404",
            message: "Query Not Found"
           }
          
          `}
        </div>
      </div>
       <div className="pt-6 flex space-x-2 gap-1.5">
        <button className="flex space-x-2 py-3 px-5 rounded-xl bg-indigo-500 text-white" onClick={() => router.push("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>

         <span>Home</span>
       </button>
       <button className="flex space-x-2 py-3 px-5 rounded-xl bg-indigo-500 text-white gap-1.5">
         <span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

         </span>
        Display Errors
       </button>
        </div>
    </>
  )
}