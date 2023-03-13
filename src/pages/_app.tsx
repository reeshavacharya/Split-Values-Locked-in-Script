import '@/styles/globals.css'
import { MeshProvider } from '@martifylabs/mesh-react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Component {...pageProps} />
    </MeshProvider>
  )
}
