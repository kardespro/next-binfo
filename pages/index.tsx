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
     <p>Copyright ©️ 2023 - Next-binfo</p>
     </div>
    </>
  )
}

export default Home