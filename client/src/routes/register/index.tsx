import { Button, Flex } from "../../components/atoms";
import { Input } from "../../components/atoms/inputs";
import { Heading } from "../../components/atoms/typography/heading";
import { Text } from "../../components/atoms/typography/text";

import "./register.scss";

export default function Register() {
  return (
    <Flex
      className="flex-1 register-page"
      align="center"
      justify="center"
      direction="col"
    >
      <Flex className="register-page__container" gap="xl">
        {/* Heading and Text Section */}
        <Flex
          className="register-page__heading"
          gap="md"
          direction="col"
          justify="start"
        >
          <Heading variant="h2">Signup</Heading>
          <Text variant="span">
            We don't share your personal details with anyone.
          </Text>
        </Flex>

        {/* Register Form */}
        <Flex className="register-page__form" gap="md" direction="col">
          <Input type="text" label="First Name" />
          <Input type="text" label="Last Name" />
          <Input type="text" label="Email" />
          <Input type="password" label="Password" />
          <Input type="text" label="Confirm Password" />
          <Button>Register</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
