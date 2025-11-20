import type { Metadata } from "next"
import "./globals.css"
import axios from "axios"
import { App } from "./app"
import { dmSans } from "./font"


export const metadata: Metadata = {
  title: "Letz-Inn",
  manifest: "/site.webmanifest",
}
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="max-w-full max-h-full flex flex-col font-dm-sans">
        <App>
          <main className="flex-grow">
            <div className="flex flex-1 flex-col bg-[#F9F9F9] max-h-max min-h-[100dvh] h-full w-full">
              {children}
            </div>
          </main>
        </App>
      </body>
    </html>
  )
}
