import { Title } from "@ui5/webcomponents-react";

const columnsPR = [
  {
    Header: <Title>ID</Title>,
    accessor: "id",
  },
  {
    Header: <Title>Material Code</Title>,
    accessor: "material_code",
  },
  {
    Header: <Title>Material Description</Title>,
    accessor: "material_description",
  },
  {
    Header: <Title>Supplier</Title>,
    accessor: "supplier",
  },
  {
    Header: <Title>Created At</Title>,
    accessor: "created_at",
  },
  {
    Header: <Title>Created By</Title>,
    accessor: "created_by",
  },
  {
    Header: <Title>Cost Center</Title>,
    accessor: "cost_center",
  },
];

const dataPR = [
  {
    id: 1,
    material_code: "00680673",
    material_description: "Laptop Lenovo Thinkpad T4",
    supplier: "Lenovo",
    created_at: "14/01/2025",
    created_by: "John Doe",
    cost_center: "101090",
  },
  {
    id: 2,
    material_code: "12345678",
    material_description: "Impressora HP LaserJet Pro",
    supplier: "HP",
    created_at: "10/01/2025",
    created_by: "Jane Smith",
    cost_center: "101095",
  },
  {
    id: 3,
    material_code: "98765432",
    material_description: "Monitor Dell UltraSharp",
    supplier: "Dell",
    created_at: "20/01/2025",
    created_by: "Michael Johnson",
    cost_center: "101100",
  },
  {
    id: 4,
    material_code: "56789012",
    material_description: "Mouse Logitech G Pro Wireless",
    supplier: "Logitech",
    created_at: "15/01/2025",
    created_by: "Emily Chen",
    cost_center: "101092",
  },
  {
    id: 5,
    material_code: "34567890",
    material_description: "Teclado Mecânico Corsair K70 RGB",
    supplier: "Corsair",
    created_at: "12/01/2025",
    created_by: "David Lee",
    cost_center: "101098",
  },
  {
    id: 6,
    material_code: "78901234",
    material_description: "Fones de Ouvido Sony WH-1000XM4",
    supplier: "Sony",
    created_at: "18/01/2025",
    created_by: "Olivia Martinez",
    cost_center: "101102",
  },
  {
    id: 7,
    material_code: "23456789",
    material_description: "Projetor Epson Home Cinema",
    supplier: "Epson",
    created_at: "17/01/2025",
    created_by: "Daniel Kim",
    cost_center: "101094",
  },
  {
    id: 8,
    material_code: "45678901",
    material_description: "Câmera Web Logitech C920s Pro",
    supplier: "Logitech",
    created_at: "19/01/2025",
    created_by: "Sophia Hernandez",
    cost_center: "101096",
  },
  {
    id: 9,
    material_code: "67890123",
    material_description: "Tablet Samsung Galaxy Tab S8",
    supplier: "Samsung",
    created_at: "16/01/2025",
    created_by: "Benjamin Taylor",
    cost_center: "101101",
  },
  {
    id: 10,
    material_code: "89012345",
    material_description: "Smartphone Apple iPhone 14 Pro",
    supplier: "Apple",
    created_at: "13/01/2025",
    created_by: "Ava Wilson",
    cost_center: "101093",
  },
  {
    id: 11,
    material_code: "01234567",
    material_description: "Cartuchos de Tinta HP Original",
    supplier: "HP",
    created_at: "14/01/2025",
    created_by: "Ethan Hall",
    cost_center: "101097",
  },
  {
    id: 12,
    material_code: "23456789",
    material_description: "Papel A4 90g",
    supplier: "Copimax",
    created_at: "15/01/2025",
    created_by: "Mia Moore",
    cost_center: "101103",
  },
  {
    id: 13,
    material_code: "45678901",
    material_description: "Canetas Bic Cristal",
    supplier: "Bic",
    created_at: "16/01/2025",
    created_by: "Noah Campbell",
    cost_center: "101099",
  },
  {
    id: 14,
    material_code: "67890123",
    material_description: "Pendrive SanDisk Extreme Pro",
    supplier: "SanDisk",
    created_at: "17/01/2025",
    created_by: "Olivia Rodriguez",
    cost_center: "101091",
  },
  {
    id: 15,
    material_code: "89012345",
    material_description: "Hub USB 7 Portas",
    supplier: "Belkin",
    created_at: "18/01/2025",
    created_by: "Liam Evans",
    cost_center: "101104",
  },
];

const columnsPO = [
  {
    Header: <Title>Purchase Order ID</Title>,
    accessor: "po",
  },
  {
    Header: <Title>Supplier</Title>,
    accessor: "supplier",
  },
  {
    Header: <Title>Material Code</Title>,
    accessor: "material_code",
  },
  {
    Header: <Title>Material Description</Title>,
    accessor: "material_description",
  },
  {
    Header: <Title>Quantity</Title>,
    accessor: "quantity",
  },
  {
    Header: <Title>Unit</Title>,
    accessor: "unit",
  },
  {
    Header: <Title>Currency</Title>,
    accessor: "currency",
  },
  {
    Header: <Title>Created At</Title>,
    accessor: "created_at",
  },
  {
    Header: <Title>Net Price</Title>,
    accessor: "net_price",
  },
  {
    Header: <Title>Net Value</Title>,
    accessor: "net_value",
  },
];

const dataPO = [
  {
    po: 12345,
    supplier: "Acme Corporation",
    material_code: "ABC123",
    material_description: "Parafusos Phillips",
    quantity: 1000,
    unit: "unit",
    currency: "BRL",
    created_at: "2023-11-23",
    net_price: 0.25,
    net_value: 250,
  },
  {
    po: 12346,
    supplier: "Global Supplies",
    material_code: "XYZ456",
    material_description: "Canetas esferográficas azuis",
    quantity: 5000,
    unit: "caixa",
    currency: "USD",
    created_at: "2023-12-05",
    net_price: 1.5,
    net_value: 7500,
  },
  {
    po: 12347,
    supplier: "Tech Solutions",
    material_code: "DEF789",
    material_description: "Cabos USB-C",
    quantity: 200,
    unit: "unit",
    currency: "EUR",
    created_at: "2023-11-28",
    net_price: 5.0,
    net_value: 1000,
  },
  {
    po: 12348,
    supplier: "Paper Mill",
    material_code: "GHI012",
    material_description: "Papel A4",
    quantity: 10000,
    unit: "resma",
    currency: "BRL",
    created_at: "2023-12-02",
    net_price: 15.0,
    net_value: 150000,
  },
  {
    po: 12349,
    supplier: "Electric Company",
    material_code: "JKL345",
    material_description: "Lâmpadas LED",
    quantity: 500,
    unit: "unit",
    currency: "USD",
    created_at: "2023-11-30",
    net_price: 3.0,
    net_value: 1500,
  },
  {
    po: 12350,
    supplier: "Food Supplier",
    material_code: "MNO678",
    material_description: "Café em grãos",
    quantity: 50,
    unit: "kg",
    currency: "BRL",
    created_at: "2023-12-01",
    net_price: 20.0,
    net_value: 1000,
  },
  {
    po: 12351,
    supplier: "Office Supplies",
    material_code: "PQR901",
    material_description: "Clipes",
    quantity: 10000,
    unit: "caixa",
    currency: "USD",
    created_at: "2023-11-29",
    net_price: 2.0,
    net_value: 20000,
  },
  {
    po: 12352,
    supplier: "Cleaning Supplies",
    material_code: "STU234",
    material_description: "Detergente",
    quantity: 50,
    unit: "litro",
    currency: "EUR",
    created_at: "2023-12-03",
    net_price: 10.0,
    net_value: 500,
  },
  {
    po: 12353,
    supplier: "Tech Gadgets",
    material_code: "VWX567",
    material_description: "Fones de ouvido",
    quantity: 100,
    unit: "unit",
    currency: "BRL",
    created_at: "2023-12-04",
    net_price: 80.0,
    net_value: 8000,
  },
  {
    po: 12354,
    supplier: "Fabric Supplier",
    material_code: "YZ123",
    material_description: "Tecido algodão",
    quantity: 1000,
    unit: "metro",
    currency: "USD",
    created_at: "2023-11-25",
    net_price: 5.0,
    net_value: 5000,
  },
  {
    po: 12355,
    supplier: "Hardware Store",
    material_code: "ABC456",
    material_description: "Parafusos",
    quantity: 5000,
    unit: "caixa",
    currency: "EUR",
    created_at: "2023-12-06",
    net_price: 3.0,
    net_value: 15000,
  },
  {
    po: 12356,
    supplier: "Software Company",
    material_code: "DEF789",
    material_description: "Licença software",
    quantity: 1,
    unit: "licença",
    currency: "BRL",
    created_at: "2023-12-07",
    net_price: 5000.0,
    net_value: 5000,
  },
  {
    po: 12357,
    supplier: "Furniture Store",
    material_code: "GHI012",
    material_description: "Cadeira ergonômica",
    quantity: 20,
    unit: "unit",
    currency: "USD",
    created_at: "2023-12-08",
    net_price: 200.0,
    net_value: 4000,
  },
  {
    po: 12358,
    supplier: "Stationery Supplier",
    material_code: "JKL345",
    material_description: "Canetas marca-texto",
    quantity: 1000,
    unit: "caixa",
    currency: "EUR",
    created_at: "2023-12-09",
    net_price: 1.0,
    net_value: 1000,
  },
  {
    po: 12359,
    supplier: "Electronics Store",
    material_code: "MNO678",
    material_description: "Carregador de celular",
    quantity: 50,
    unit: "unit",
    currency: "BRL",
    created_at: "2023-12-10",
    net_price: 25.0,
    net_value: 1250,
  },
];

const mockData = {
  columnsPR,
  dataPR,
  columnsPO,
  dataPO,
};

export default mockData;
