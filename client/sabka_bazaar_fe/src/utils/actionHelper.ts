interface IBaseActionTypes {
  LOADING: string;
  SUCCESS: string;
  ERROR: string;
  CLEAR: string;
}
const actionTypesCreator = (prefix: string, actionType: string): IBaseActionTypes => {
  const types = ["LOADING", "SUCCESS", "ERROR", "CLEAR"];
  let data = {
    LOADING: "",
    SUCCESS: "",
    ERROR: "",
    CLEAR: ""
  };

  types.forEach((type: string) => {
    let completeActionType = `${prefix}/${actionType}_${type}`;
    Object.assign(data, {
      [type]: completeActionType
    });
  });

  return data;
};
export const ActionHelper = { actionTypesCreator };
