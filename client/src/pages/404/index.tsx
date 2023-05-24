import { FunctionComponent } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import Section from "../../components/Section";

const PageNotFound: FunctionComponent = () => (
  <Section>
    <HeadProvider>
      <Title>404 - Page not found</Title>
      <Meta name="description" content="Page is not found" />
    </HeadProvider>
    <h1>404</h1>
  </Section>
);

export default PageNotFound;
