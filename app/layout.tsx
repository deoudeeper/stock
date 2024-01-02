import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Compzone Stock",
  description: "Shop Management",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <div className="hidden">
            <NextTopLoader color="#16a34a" />
          </div>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <ToastProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
