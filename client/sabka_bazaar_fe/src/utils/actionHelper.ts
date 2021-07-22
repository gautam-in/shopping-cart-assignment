interface IBaseActionTypes {
  LOADING: string;
  SUCCESS: string;
  ERROR: string;
}
const actionTypesCreator = (prefix: string, actionType: string): IBaseActionTypes => {
  const types = ["LOADING", "SUCCESS", "ERROR"];
  let data = {
    LOADING: "",
    SUCCESS: "",
    ERROR: ""
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
