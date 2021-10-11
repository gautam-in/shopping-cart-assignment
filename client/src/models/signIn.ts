import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("SignIn")
export class SignIn {
  @JsonProperty("email", String)
  email: string = "";
  @JsonProperty("password", String)
  password: string = "";
}

@JsonObject("SignUp")
export class SignUp {
  @JsonProperty("firstName", String)
  firstName: string = "";
  @JsonProperty("lastName", String)
  lastName: string = "";
  @JsonProperty("email", String)
  email: string = "";
  @JsonProperty("password", String)
  password: string = "";
  @JsonProperty("confirmPassword", String)
  confirmPassword: string = "";
}
