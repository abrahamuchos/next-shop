interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: Vendor;
  product_type: string;
  created_at: Date;
  handle: string;
  updated_at: Date;
  published_at: Date;
  template_suffix: null;
  published_scope: PublishedScope;
  tags: string;
  status: Status;
  admin_graphql_api_id: string;
  variants: Variant[];
  options: Option[];
  images: Image[];
  image: Image;
}

interface Image {
  id: number;
  alt: null;
  position: number;
  product_id: number;
  created_at: Date;
  updated_at: Date;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: string[]|number[];
}

interface Option {
  id: number;
  product_id: number;
  name: Name;
  position: number;
  values: Option1[];
}

enum Name {
  Title = "Title",
}

enum Option1 {
  DefaultTitle = "Default Title",
}

enum PublishedScope {
  Global = "global",
}

enum Status {
  Active = "active",
}

interface Variant {
  id: number;
  product_id: number;
  title: Option1;
  price: string;
  sku: null;
  position: number;
  inventory_policy: InventoryPolicy;
  compare_at_price: null | string;
  fulfillment_service: FulfillmentService;
  inventory_management: null;
  option1: Option1;
  option2: null;
  option3: null;
  created_at: Date;
  updated_at: Date;
  taxable: boolean;
  barcode: null;
  grams: number;
  weight: number;
  weight_unit: WeightUnit;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  requires_shipping: boolean;
  admin_graphql_api_id: string;
  image_id: null;
}

enum FulfillmentService {
  Manual = "manual",
}

enum InventoryPolicy {
  Deny = "deny",
}

enum WeightUnit {
  Kg = "kg",
}

enum Vendor {
  FutureWorld = "Future World",
}