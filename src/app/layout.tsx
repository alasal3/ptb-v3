import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://primetopbuild.com'),
  title: {
    default: "برايم توب بيلد | Prime Top Build",
    template: "%s | برايم توب بيلد"
  },
  description: "استثمارك الآمن في أصول المستقبل. شركة برايم توب بيلد للتطوير العقاري تقدم مشاريع سكنية وتجارية متميزة في أرقى المواقع.",
  keywords: ["عقارات", "استثمار عقاري", "شقق للبيع", "برايم توب بيلد", "مطور عقاري", "Prime Top Build", "Real Estate", "Investment", "Apartments for sale"],
  authors: [{ name: "Prime Top Build" }],
  creator: "Prime Top Build",
  publisher: "Prime Top Build",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "برايم توب بيلد | Prime Top Build",
    description: "استثمارك الآمن في أصول المستقبل.",
    url: 'https://primetopbuild.com',
    siteName: 'Prime Top Build',
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "برايم توب بيلد | Prime Top Build",
    description: "استثمارك الآمن في أصول المستقبل.",
    creator: '@primetopbuild',
  },
  icons: {
    icon: "https://primetopbuild.com/assets/whitelogo-n5D6un3T.png",
    apple: "https://primetopbuild.com/assets/whitelogo-n5D6un3T.png",
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
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
