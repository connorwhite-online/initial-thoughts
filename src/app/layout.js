import './globals.css'
import { Open_Sans } from 'next/font/google'

const open = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Initial Thoughts',
  description: 'Initial Thoughts Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  )
}
