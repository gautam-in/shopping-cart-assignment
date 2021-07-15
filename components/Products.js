import { useAppData } from '../lib/store';

export default function Products() {
  const contextData = useAppData();
  console.log(contextData);
  return <p>Hi</p>;
}
