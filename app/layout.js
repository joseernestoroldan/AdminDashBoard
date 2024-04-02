import { Roboto } from 'next/font/google'
import './ui/globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
})

export const metadata = {
  title: 'Admin App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}