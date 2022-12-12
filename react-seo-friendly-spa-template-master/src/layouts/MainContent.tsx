import { type FunctionComponent, type PropsWithChildren } from 'react';

const MainContent: FunctionComponent<PropsWithChildren> = ({ children = "" }) => {

  return (
    <main className="main-content">
       { children }
    </main>
  );
}

export default MainContent;