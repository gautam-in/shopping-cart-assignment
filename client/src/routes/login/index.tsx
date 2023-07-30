import { Button, Flex } from "../../components/atoms";
import { Input } from "../../components/atoms/inputs";
import { Heading } from "../../components/atoms/typography/heading";
import { Text } from "../../components/atoms/typography/text";

import "./login.scss";

export function Component() {
  return (
    <Flex
      className="flex-1 login-page"
      direction="col"
      align="center"
      justify="center"
    >
      <Flex gap="xl" className="login-page__container">
        {/* Heading and Text Section */}
        <Flex
          className="login-page__heading"
          gap="md"
          direction="col"
          justify="start"
        >
          <Heading variant="h2">Login</Heading>
          <Text variant="span">
            Get access to your Orders, Wishlists & Recommendations.
          </Text>
        </Flex>

        {/* Login Form */}
        <Flex className="login-page__form" gap="md" direction="col">
          <Input type="text" label="Email" />
          <Input type="password" label="Password" />
          <Button>Login</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

Component.displayName = "Login";
