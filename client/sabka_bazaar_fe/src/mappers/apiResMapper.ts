import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript";
export const deserialize = <T>(classReference: new () => T, jsonObject: any): T => {
  let jsonConvert: JsonConvert = new JsonConvert();
  jsonConvert.ignorePrimitiveChecks = true;
  jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
  const result = jsonConvert.deserializeObject(jsonObject, classReference);
  return result;
};
export const serialize = <T>(classReference: new () => T, jsonObject: any): T => {
  let jsonConvert: JsonConvert = new JsonConvert();
  jsonConvert.ignorePrimitiveChecks = true;
  jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
  const result = jsonConvert.serialize(jsonObject, classReference);
  return result;
};
