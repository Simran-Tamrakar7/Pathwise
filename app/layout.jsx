import './globals.css'
import ClientShell from './ClientShell'

export const metadata = {
  title: {
    default: 'Pathwise — Learn anything, step by step',
    template: '%s · Pathwise',
  },
  description:
    'Pathwise — craft manuals from absolute beginner to pro. Automation, design, prompt engineering, and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper font-body text-ink antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
