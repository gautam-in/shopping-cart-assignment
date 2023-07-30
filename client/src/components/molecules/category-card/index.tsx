import { Box, ButtonLink, Flex, FlexProps } from "../../atoms";
import { Heading } from "../../atoms/typography/heading";
import { Text } from "../../atoms/typography/text";

import "./category.scss";

export type Category = {
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
  id: string;
};

export type CategoryCardProps = {
  category: Category;
  direction?: FlexProps["direction"];
};

export function CategoryCard(props: CategoryCardProps) {
  const { category, direction = "row" } = props;

  return (
    <Flex
      direction={direction}
      align="center"
      gap="md"
      p="sm"
      pb="xl"
      className="category-card"
    >
      <Flex align="center" gap="sm" className="flex-2" direction="col">
        <Heading variant="h3">{category.name}</Heading>
        <Text align="center" variant="p">
          {category.description}
        </Text>
        <ButtonLink to={`products/${category.key}`}>
          Explore {category.name}
        </ButtonLink>
      </Flex>

      <Box className="flex-1 category-card__image-container">
        <img
          src={`http://localhost:8000/${category.imageUrl}`}
          alt={category.name}
          className="w-full h-full"
          loading="lazy"
        />
      </Box>
    </Flex>
  );
}
