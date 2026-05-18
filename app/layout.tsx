import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/assets/styles/globals.css"
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import { Arizonia } from "next/font/google"
import CookieConsent from "@/components/cookie-consent"
import GoogleAnalytics from "@/components/google-analytics"

const arizonia = Arizonia({
  subsets: ["latin"],
  variable: "--font-arizonia",
  display: "swap",
  weight: "400",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" suppressHydrationWarning className={arizonia.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieConsent />
          <GoogleAnalytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
