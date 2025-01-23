import {
  Button,
  DateRangePicker,
  Label,
  Title,
  Input,
  AnalyticalTable,
} from "@ui5/webcomponents-react";
import mockData from "../database/mockData";

export default function PurchaseRequisitionPage() {
  return (
    <div className="p-8">
      <Title level="H1">Purchase Order</Title>
      <div className="p-6">
        <form>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Label className="mr-4">Purchase Order ID</Label>
              <Input name="id" type="text" placeholder="Ex. 0010073721" />
            </div>

            <div className="flex flex-col ml-10">
              <Label className="mr-4">Purchase Requisition ID</Label>
              <Input name="id-pr" type="text" placeholder="Ex. 0010073721" />
            </div>

            <div className="flex flex-col ml-10">
              <Label>Supplier</Label>
              <Input name="supplier" type="text" placeholder="Ex. SAP Brazil" />
            </div>
          </div>

          <div className="flex flex-row mt-10">
            <div className="flex flex-col">
              <Label>Material Code</Label>
              <Input
                name="material-code"
                type="text"
                placeholder="Ex. SAP Brazil"
              />
            </div>

            <div className="flex flex-col ml-10">
              <Label className="mr-4">Material Description</Label>
              <Input
                name="description"
                className="w-full sm:w-80"
                type="text"
                placeholder="Ex. Laptop Lenovo Thinkpad T4"
              />
            </div>

            <div className="flex flex-col ml-10">
              <Label className="mr-4">Created At</Label>
              <DateRangePicker name="created-at" />
            </div>

            <div className="flex flex-col ml-10 w-48 justify-center">
              <Button design="Emphasized"> Search</Button>
            </div>
          </div>
          <div className="mt-10">
            <AnalyticalTable
              columns={mockData.columnsPO}
              data={mockData.dataPO}
              headerRowHeight={60}
              sortable={true}
              filterable={true}
              alternateRowColor={true}
              withNavigationHighlight
            />
          </div>
        </form>
      </div>
    </div>
  );
}
