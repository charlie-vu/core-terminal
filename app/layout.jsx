// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

import "./assets/scss/app.scss";
import Header from "./layouts/Header";

const metaInfo = {
  title: 'The core terminal',
  description: 'Welcome to The Core Terminal - decentralized AI marketplace, leveraging blockchain technology to revolutionize the way AI resources are shared, used, and monetized.',
}
export const metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
  keywords: "Decentralized, Marketplace, AI, Web3, blockchain",
  openGraph: {
    url: 'https://www.coreterminal.ai',
    title: metaInfo.title,
    type: 'website',
    image: 'https://static.ladipage.net/622f1d6e46f10e002dc140c4/coreterminal-20240706143446-ppqom.png',
    description: metaInfo.description,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
