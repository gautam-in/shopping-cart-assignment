import Head from 'next/head';

import Login from './login';
import Signup from './signup';

import {
  ArticleWrapper,
  LeftSectionWrapper,
  LeftSectionContent,
  TitleWrapper,
  TagLineWrapper,
} from 'styles/login.styled.js';

const MainLoginSignup = ({ type }) => {
  const componentsParts = {
    component: type === 'login' ? Login : Signup,
    title: type === 'login' ? 'Login' : 'Signup',
    tagLine:
      type === 'login'
        ? 'Get access to your Orders, Wishlist and Recommendations'
        : 'We do not share your personal details with anyone',
  };

  return (
    <ArticleWrapper>
      <Head>
        <title>{componentsParts.title}</title>
      </Head>
      <LeftSectionWrapper>
        <LeftSectionContent>
          <TitleWrapper>{componentsParts.title}</TitleWrapper>
          <TagLineWrapper>{componentsParts.tagLine}</TagLineWrapper>
        </LeftSectionContent>
      </LeftSectionWrapper>
      {<componentsParts.component />}
    </ArticleWrapper>
  );
};

export default MainLoginSignup;
