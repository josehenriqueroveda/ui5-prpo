import {
  Button,
  DateRangePicker,
  Label,
  Option,
  Select,
  Title,
  Input,
  AnalyticalTable
} from "@ui5/webcomponents-react";
import mocks from "../database/mockData";

export default function PurchaseRequisitionPage() {

  return (
    <div className="p-8">
      <Title level="H1">Purchase Requisition</Title>
      <div className="p-6">
        <form>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Label className="mr-4">Purchase Requisition ID</Label>
              <Input name="id" type="text" placeholder="Ex. 0010073721" />
            </div>

            <div className="flex flex-col ml-10">
              <Label className="mr-4">Material Code</Label>
              <Input
                name="material-code"
                type="text"
                placeholder="Ex. 000009704832"
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
              <Label className="mr-4">Supplier</Label>
              <Input name="supplier" type="text" placeholder="Ex. SAP Brazil" />
            </div>
          </div>

          <div className="flex flex-row mt-10">
            <div className="flex flex-col">
              <Label className="mr-4">Created At</Label>
              <DateRangePicker name="created-at"/>
            </div>

            <div className="flex flex-col ml-10">
              <Label className="mr-4">Created By</Label>
              <Input name="created-by" type="text" placeholder="Ex. John Doe" />
            </div>

            <div className="flex flex-col ml-10">
              <Label className="mr-4">Cost Center</Label>
              <Select name="cost-center" valueState="None">
                <Option>Select...</Option>
                <Option>102030</Option>
                <Option>112233</Option>
                <Option>908070</Option>
                <Option>100100</Option>
                <Option>801210</Option>
              </Select>
            </div>

            <div className="flex flex-col ml-10 w-48 justify-center">
              <Button design="Emphasized"> Search</Button>
            </div>
          </div>
          <div className="mt-10">
            <AnalyticalTable
              columns={mocks.columns}
              data={mocks.data}
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
