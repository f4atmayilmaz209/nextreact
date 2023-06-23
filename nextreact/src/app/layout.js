import './globals.css'
import { Inter,Roboto,Poppins } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fatma Dev',
  description: 'this is the desc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </div>
        </ThemeProvider>

      </body>
    </html>
  )
}
