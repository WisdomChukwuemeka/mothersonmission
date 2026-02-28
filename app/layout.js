import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import Footer from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mothers on Mission International | Empowering Nigerian Mothers for Lasting Change",
  description: "A non-denominational, non-profit organization founded in 2016, dedicated to empowering Nigerian mothers through spiritual growth, education, economic opportunities, and community development. We've impacted over 4,800 mothers across 32 states with programs in literacy, business training, health, and civic engagement.",
  keywords: [
    "Nigerian mothers empowerment",
    "women's education Nigeria",
    "economic opportunities for mothers",
    "community development Nigeria",
    "non-profit organization Nigeria",
    "spiritual growth for women",
    "literacy programs Nigeria",
    "women's advocacy",
    "poverty alleviation Nigeria",
    "Mothers on Mission International",
    "Amb Vivian Anyanwu",
    "Amb Jarlath Anyanwu"
  ],
  authors: [{ name: "Mothers on Mission International", url: "https://mominternational.org" }],
  openGraph: {
    title: "Mothers on Mission International | Empowering Nigerian Mothers",
    description: "Discover how we're transforming lives through holistic programs in education, economic empowerment, and community building across Nigeria.",
    url: "https://mominternational.org",
    siteName: "Mothers on Mission International",
    images: [
      {
        url: "/logo/logo.png", // Use your founder image or a dedicated OG image
        width: 1200,
        height: 630,
        alt: "Ambassadors Vivian and Jarlath Anyanwu, Founders of Mothers on Mission International",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mothers on Mission International | Empowering Nigerian Mothers",
    description: "Join our mission to empower mothers and build stronger communities in Nigeria. Learn about our impact since 2016.",
    images: ["/logo/logo.png"], // Or a custom Twitter image
    // creator: "@yourngohandle", // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Assuming you have a favicon
    shortcut: "/favicon.ico",
    apple: "/logo/logo.png",
  },
  metadataBase: new URL("https://mominternational.org"), // Replace with your actual domain
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
