import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Personalform from './Personalform'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Navbar/>
      <Personalform/>
    </div>
  )
}
