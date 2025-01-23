import "./globals.css";

export const metadata = {
  title: "UI5 PRPO",
  description:
    "SAP UI5 interface for consulting Purchase Requisitions and Purchase Orders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
