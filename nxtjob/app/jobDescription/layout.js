import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import JobDescHeader from '../Components/jobDescHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nxtjob : assignment',
  description: 'an app for nxtjob internship',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div><JobDescHeader/></div>
        {children}</body>
    </html>
  )
}
