import { Text, Title } from "@ui5/webcomponents-react";
import BarChartMock from "./components/barChartMock";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-[400px]">
  <main className="w-full h-full px-20">
    <Title level="H1">Releationship between Purchase Requisitions and Purchase Orders by Month</Title>
    <BarChartMock />
  </main>
</div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/josehenriqueroveda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>Developed by: Jose Henrique Roveda</Text>
        </a>
      </footer>
    </div>
  );
}
