import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("ProductItem")
export class ProductItem {
  @JsonProperty("name", String)
  name: string = "";
  @JsonProperty("imageURL", String)
  imageURL: string = "";
  @JsonProperty("description", String)
  description: string = "";
  @JsonProperty("price", Number)
  price: number = 0;
  @JsonProperty("stock", Number)
  stock: number = 0;
  @JsonProperty("category", String)
  category: string = "";
  @JsonProperty("sku", String)
  sku: string = "";
  @JsonProperty("id", String)
  id: string = "";
}

@JsonObject("ProductsList")
export class ProductsList {
  @JsonProperty("products", [])
  products: ProductItem[] = undefined;
}
