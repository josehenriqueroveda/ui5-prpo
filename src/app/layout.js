import "./globals.css";
import { Bar } from "@ui5/webcomponents-react";
import { Button } from "@ui5/webcomponents-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "UI5 PRPO",
  description:
    "SAP UI5 interface for consulting Purchase Requisitions and Purchase Orders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <body>
        <div>
          <Bar
            design="Header"
            endContent={
              <span>
                <Button design="Negative">
                  <Link href="/">Logout</Link>
                </Button>
              </span>
            }
            startContent={
              <span>
                <Link href="/">
                  <Image
                    alt="SAP Logo"
                    width={48}
                    height={48}
                    src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"
                  />
                </Link>
              </span>
            }
          >
            <span>
              <Button design="Default">
                <Link href="/purchase-requisition">Purchase Requisiton</Link>
              </Button>
            </span>
            <span>
              <Button design="Default">
                <Link href="/purchase-order">Purchase Order</Link>
              </Button>
            </span>
          </Bar>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
