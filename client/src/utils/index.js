
export const filteredProductsData = (data,id)  => data.filter((value) => value.category === id);

export function filterDropDownData(data,id){
    let result = data.find((val) => val.id === id)
    return result.name
  }