import MovimentationProvider from '@/context/Context'
import type { Metadata } from 'next'
import './globals.css'
import Cashier from '@/components/Cashier'

export const metadata: Metadata = {
  title: 'Gestor Financeiro',
  description: 'Gestor Financeiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <MovimentationProvider>
          {children}
        </MovimentationProvider>
      </body>
    </html>
  )
}
