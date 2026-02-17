import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Al-Mawla",
  description: "Ahmed Al-Mawla's Personal Website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
        <div className="links">
          <div className="home"><Link href="/" className="theLink">Home</Link></div>
          <div className="about"><Link href="/about" className="theLink">About</Link></div>
          <div className="projects"><Link href="/projects" className="theLink">Projects</Link></div>
          <div className="contact"><Link href="/contact" className="theLink">Contact</Link></div>
        </div>
      </nav>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        {children}
      </main>
      </body>
    </html>
  );
}
