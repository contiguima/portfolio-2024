import './globals.scss'


export const metadata = {
  title: 'Constanza Guimaraez',
  description: 'Personal projects of Constanza Guimaraez.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
