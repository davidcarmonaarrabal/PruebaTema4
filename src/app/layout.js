import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuPrincipal from "@/components/menu-principal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hospital",
  description: "Examen T4 Servidor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen `}
      >
        <MenuPrincipal/>
        <main className="h-full grow overflox-y-auto">
          {children}
        </main>         
      </body>
    </html>
  );
}
