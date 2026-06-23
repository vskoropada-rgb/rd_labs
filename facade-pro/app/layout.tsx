import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Утеплення фасадів Львів | Фасадні роботи під ключ — СБД ПРО",
  description:
    "Професійне утеплення фасадів у Львові та по всій Україні. Фасадні роботи під ключ: будинки, ОСББ, комерційні об'єкти. Безкоштовний кошторис. Гарантія 5 років.",
  keywords: [
    "утеплення фасаду",
    "хто утеплює фасади",
    "хто якісно утеплює фасади",
    "замовити утеплення будинку",
    "фасадні роботи ціна",
    "потрібно утеплити фасад",
    "фасадні роботи в україні",
    "фасадні роботи майстри в україні",
    "фасадні роботи Львів",
    "утеплення будинку Львів",
    "потрібно утеплити будинок",
  ],
  openGraph: {
    title: "Утеплення фасадів Львів | СБД ПРО",
    description:
      "Фасадні роботи під ключ. Безкоштовний виїзд і кошторис. 9+ років досвіду.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={geist.variable}>
      <body className="min-h-screen antialiased cursor-none lg:cursor-none">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
