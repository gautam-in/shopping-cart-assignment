export const mapCategories = categories => {
  // Filters categories which are not enabled, maps each with dir param, 
  // also sorts them based on order
  return categories
    .filter(category => category.enabled)
    .map((category, idx) => {
      const dir = idx % 2 === 0 ? "left" : "right";
      return {
        ...category,
        dir
      }
    })
    .sort((cate1, cate2) => cate1.order < cate2.order ? -1 : 
      (cate1.order > cate2.order ? 1 : 0))
}