import { Providers } from './providers';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';

export const metadata = {
  title: 'AnimeMe: Support your favourite anime now',
  description: 'Rate, review, support animes all over the world now. Check out the latest, trending, hottest anime currently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MyNavbar />
          {children}
          <MyFooter />
        </Providers>
      </body>
    </html>
  )
}
