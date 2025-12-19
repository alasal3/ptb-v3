import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "برايم توب بيلد | Prime Top Build",
  description: "استثمارك الآمن في أصول المستقبل.",
  icons: {
    icon: "https://primetopbuild.com/assets/whitelogo-n5D6un3T.png",
  },
};
export const dynamic = 'force-dynamic'; // SSR for OffersBar

import OffersBar from "@/components/OffersBar";
import FloatingActions from "@/components/FloatingActions";
import { getNews } from "@/lib/api";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const news = await getNews();

  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.variable} antialiased font-tajawal bg-[#0D1117] text-[#e2e8f0] overflow-x-hidden`}
      >
        <OffersBar news={news} />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
