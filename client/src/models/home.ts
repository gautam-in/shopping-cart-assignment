import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("BannerItem")
export class BannerItem {
  @JsonProperty("bannerImageUrl", String)
  bannerImageUrl: string = "";
  @JsonProperty("bannerImageAlt", String)
  bannerImageAlt: string = "";
  @JsonProperty("isActive", Boolean)
  isActive: boolean = false;
  @JsonProperty("order", Number)
  order: number = 0;
  @JsonProperty("id", String)
  id: string = "";
}

@JsonObject("BannerList")
export class BannerList {
  @JsonProperty("banners", [])
  banners: BannerItem[] = undefined;
}

@JsonObject("CategoryItem")
export class CategoryItem {
  @JsonProperty("name", String)
  name: string = "";
  @JsonProperty("key", String)
  key: string = "";
  @JsonProperty("description", String)
  description: string = "";
  @JsonProperty("enabled", Boolean)
  enabled: boolean = false;
  @JsonProperty("order", Number)
  order: number = 0;
  @JsonProperty("imageUrl", String)
  imageUrl: string = "";
  @JsonProperty("id", String)
  id: string = "";
}

@JsonObject("CategoryList")
export class CategoryList {
  @JsonProperty("categories", [])
  categories: CategoryItem[] = undefined;
}
