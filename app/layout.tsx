import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Chatbot } from '@/components/Chatbot'
import { PageLoader } from '@/components/page-loader'
import { PromoPopup } from '@/components/promo-popup'
import { FloatingOfferButton } from '@/components/FloatingOfferButton'

import './globals.css'


const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })


export const metadata: Metadata = {

  title: 'Anandam Residency',

  description:
    'Invest in premium residential plots with clear title deed, bank loan facility, and excellent connectivity.',


  openGraph: {

    title: 'Anandam Residency',

    description:
      'Invest in premium residential plots with clear title deed, bank loan facility, and excellent connectivity.',


    url: 'https://www.anandamresidency.in/',


    siteName: 'Anandam Residency',


    images: [
      {
        url: 'https://www.anandamresidency.in/Anandam-Preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Anandam Residency',
      },
    ],


    locale: 'en_IN',

    type: 'website',

  },


  twitter: {

    card: 'summary_large_image',

    title: 'Anandam Residency',

    description:
      'Premium residential plots with clear title deed and excellent connectivity.',

    images: [
      'https://www.anandamresidency.in/Anandam-Preview.jpg'
    ],

  },


  icons: {

    icon: [
      {
        url: '/Anandam Residency Logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },

      {
        url: '/Anandam Residency Logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },

      {
        url: '/Anandam Residency Logo.jpeg',
        type: 'image/svg+xml',
      },
    ],

    apple: '/Anandam Residency Logo.jpeg',

  },


  viewport: {

    width: 'device-width',

    initialScale: 1,

    maximumScale: 5,

  },

}



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode

}>) {


  return (

    <html lang="en" className="bg-white">


      <head>

        {/* Google Tag Manager */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KQV23QMH');
            `,
          }}
        />

        {/* End Google Tag Manager */}

      </head>



      <body className="font-sans antialiased bg-white relative">


        {/* Google Tag Manager (noscript) */}

        <noscript>

          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQV23QMH"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden'
            }}
          />

        </noscript>

        {/* End Google Tag Manager (noscript) */}



        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >

          <source src="/DJI_0775.mp4" type="video/mp4" />

        </video>



        {/* Dark Overlay */}

        <div className="fixed inset-0 bg-black/30 -z-10"></div>




        <Suspense fallback={null}>

          <PageLoader />

          <PromoPopup />

        </Suspense>



        <Header />


        {children}


        <Footer />



        <WhatsAppButton />


        <Chatbot />


        <FloatingOfferButton />



        {process.env.NODE_ENV === 'production' && <Analytics />}



      </body>


    </html>

  )

}