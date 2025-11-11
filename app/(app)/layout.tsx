import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer companyName="Bumi Teak Furniture" copyrightYear={2025} />
      </body>
    </html>
  );
}
