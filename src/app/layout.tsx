import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeMaint - Quản lý bảo trì thiết bị thông minh",
  description: "BeMaint là giải pháp quản lý bảo trì thiết bị thông minh, giúp doanh nghiệp tối ưu hóa quy trình bảo trì, giảm chi phí và tăng tuổi thọ thiết bị.",
  keywords: "bảo trì, quản lý thiết bị, IoT, bảo trì dự đoán, quản lý tài sản, CRM, nhà máy thông minh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="light-theme">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
