import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import Layout from "@/components/Layout";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neurix Data Solutions",
  description: "Automation methods for Power BI, Alteryx, SQL Server, and Oracle SQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${robotoSlab.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
