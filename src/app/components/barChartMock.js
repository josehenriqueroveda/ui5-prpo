"use client";
import { BarChart } from "@ui5/webcomponents-react-charts";

export default function BarChartMock() {
  return (
    <BarChart
      dataset={[
        {
          name: "January",
          purchase_requisitions: 300,
          purchase_orders: 100,
          purchased_products: 756,
        },
        {
          name: "February",
          purchase_requisitions: 330,
          purchase_orders: 230,
          purchased_products: 880,
        },
        {
          name: "March",
          purchase_requisitions: 404,
          purchase_orders: 240,
          purchased_products: 700,
        },
        {
          name: "April",
          purchase_requisitions: 80,
          purchase_orders: 280,
          purchased_products: 604,
        },
        {
          name: "May",
          purchase_requisitions: 300,
          purchase_orders: 100,
          purchased_products: 756,
        },
        {
          name: "June",
          purchase_requisitions: 330,
          purchase_orders: 230,
          purchased_products: 880,
        },
        {
          name: "July",
          purchase_requisitions: 470,
          purchase_orders: 20,
          purchased_products: 450,
        },
        {
          name: "August",
          purchase_requisitions: 180,
          purchase_orders: 220,
          purchased_products: 104,
        },
        {
          name: "September",
          purchase_requisitions: 360,
          purchase_orders: 200,
          purchased_products: 1000,
        },
        {
          name: "October",
          purchase_requisitions: 500,
          purchase_orders: 250,
          purchased_products: 200,
        },
        {
          name: "November",
          purchase_requisitions: 404,
          purchase_orders: 240,
          purchased_products: 700,
        },
        {
          name: "December",
          purchase_requisitions: 80,
          purchase_orders: 280,
          purchased_products: 604,
        },
      ]}
      dimensions={[
        {
          accessor: "name",
        },
      ]}
      measures={[
        {
          accessor: "purchase_orders",
          label: "Purchase Orders",
          opacity: 0.6,
        },
        {
          accessor: "purchase_requisitions",
          hideDataLabel: true,
          label: "Purchase Requisitions",
        },
      ]}
    />
  );
}
