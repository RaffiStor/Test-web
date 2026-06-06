import "./globals.css";

export const metadata = {
  title: "SMPNSATUKURUN-BY-RAFFI",
  description: "School Management System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}