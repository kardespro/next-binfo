import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Search from '../components/Search.js'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
  const router = useRouter()
  return (
    <>
     <Navbar />
     <div className="pt-12">
     <Search />
     </div>
      <div className="pt-24 flex justify-center items-center">
        <p className="flex space-x-2 gap- ">
        <span className="text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>

</span>
          <span className="text font-bold text-green-500 text-xs pt-1">All Systems Online !</span>
        </p>
        </div>
     <div className="pt-4 flex justify-center items-center">
     <p>Copyright ©️ 2023 - Next-binfo</p>
     </div>
    </>
  )
}

export default Home