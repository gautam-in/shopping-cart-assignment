import 'jsdom-global/register';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure} from "enzyme";

import { cleanup } from '@testing-library/react';

jest.useFakeTimers()

afterEach(cleanup);


jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => (
    <children.type {...children.props} href={href} />
  )
}));
configure({ adapter: new Adapter() });


