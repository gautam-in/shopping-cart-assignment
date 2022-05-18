const sList = [
  {
    label: "Fruits & Vegetables",
  },
  {
    label: "Bakery Cakes and Dairy",
  },
  {
    label: "Beverages",
  },
  {
    label: "Beauty and Hygiene",
  },
  {
    label: "Baby Care",
  },
];

// const pList = [
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
//   {
//     price: 100,
//     description:
//       "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
//     imageURL: kiwi,
//     name: "ASDasd",
//   },
// ];

export const useCategoriesParsed = (response) => {
  let categories = [];
  if (response.data) {
    categories = response.data;
  }
  let eCategories = categories.filter((cat) => cat.enabled);
  eCategories.sort((a, b) => {
    if (a.order > b.order) return 1;
    else if (a.order < b.order) return -1;
    return 0;
  });
  return eCategories;
};

export const formatPrice = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};
