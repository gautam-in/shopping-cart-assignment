import requestHandler from '../lib/requestHandler';
import { BACKEND_URL } from '../config';

export default function indexPage() {
  return (
    <button
      type="button"
      onClick={async () => {
        const data = await requestHandler.getData(`${BACKEND_URL}/banners/`);
        console.log(data);
      }}
    >
      Hi
    </button>
  );
}
