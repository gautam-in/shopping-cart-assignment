import requestHandler from '../lib/requestHandler';
import { BACKEND_URL } from '../config';
import { Button } from '../components/styles/Button';

export default function indexPage() {
  return (
    <div>
      <p>hello world</p>
      <Button
        type="button"
        onClick={async () => {
          const data = await requestHandler.getData(`${BACKEND_URL}/banners/`);
          console.log(data);
        }}
      >
        Hiiiiiiiiiiiiiiiiiiiiiii
      </Button>
    </div>
  );
}
