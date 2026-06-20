import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Jesutoba Lopez | ML Engineer · Data Engineer · Software Engineer",
  description:
    "Portfolio of Jesutoba Lopez — Machine Learning Engineer, Data Engineer, Software Engineer, and Platform Engineer. Master's in Predictive Analytics, Austin Peay State University.",
  keywords: [
    "Machine Learning Engineer",
    "Data Engineer",
    "Software Engineer",
    "SRE",
    "Platform Engineer",
    "Python",
    "Databricks",
    "Terraform",
    "Grafana",
    "Jesutoba Lopez",
  ],
  authors: [{ name: "Jesutoba Lopez" }],
  openGraph: {
    title: "Jesutoba Lopez | ML Engineer · Data Engineer · Software Engineer",
    description:
      "Building intelligent systems, scalable data platforms, and reliable cloud infrastructure.",
    type: "website",
    locale: "en_US",
    url: "https://jesutobalopez.com",
    siteName: "Jesutoba Lopez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesutoba Lopez | ML Engineer · Data Engineer",
    description:
      "Building intelligent systems, scalable data platforms, and reliable cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
