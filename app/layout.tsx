import { Providers } from './providers';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';

export const metadata = {
  title: 'AnimeMe: Support your favourite anime now',
  description: 'Rate, review, support animes all over the world now. Check out the latest, tren+-ding, hottest anime currently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // toast.warn('This is the second warn message!!')
  return (
    <html lang="en">
      <body style={{minHeight:'100vh', position:'relative'}}>
        <Providers>
          {/* NAVBAR */}
          <div style={{ position:'sticky', top:'0', zIndex:'999' }}>
            <MyNavbar />
          </div>

          {/* TOAST MESSAGES */}
          {/* <ToastContainer
            position='top-center'
          /> */}

          {/* BODY CONTENTS */}
          <div style={{paddingBottom:'27.75rem'}}>{children}</div>

          {/* FOOTER */}
          <div style={{ position:'absolute', bottom:'0', width:'100%'}}>
            <MyFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}