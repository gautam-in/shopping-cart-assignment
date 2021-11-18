import LeftImageCategories from "./catageoryComponents/LeftImageCategories";
import RightImgeCategories from './catageoryComponents/RightImgeCategories'


export default function AllCategories({ categories }) {
  return categories.map((item, idx) => {
    let newIdx = idx+2

    if (newIdx%2  === 0) {
      return <LeftImageCategories key={idx} item={item} />;
    }
    if (newIdx%2 !== 0) {

      return <RightImgeCategories key={idx} item={item}/>
    }
  });
}
