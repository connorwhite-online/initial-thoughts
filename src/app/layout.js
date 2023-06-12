import './globals.css'
import { Helvetica } from 'next/font/google'

const helvetica = Helvetica({ subsets: ['regular'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helvetica.className}>{children}</body>
    </html>
  )
}
