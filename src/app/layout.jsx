import Navbar from "@/components/Navbar";
import "./globals.css";
import {Poppins} from 'next/font/google';

const poppins = Poppins({subsets: ['latin'], weight:["100", "200", "300", "400", "500", "700", "800", "900"]})

export const metadata = {
  description: "Setetes darah Anda, nyawa bagi sesama.",
  title: "Donor Darah",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="id">
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
    </>   
  );
}
