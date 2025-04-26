import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Alwin Paul Abraham - Full Stack Developer",
  description: "Hey this is Alwin. I am a technology leader and co-founder of WorkingAs1 Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
