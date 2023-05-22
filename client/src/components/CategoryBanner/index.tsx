import { useNavigate } from "react-router-dom";
import cn from "classnames";

import Button from "../Common/Button";
import Section from "../Section";
import "./styles.scss";

export const CategoryBanner = ({
  name,
  description,
  imageUrl,
  id,
  slug,
  variant,
}: any) => {
  console.log(variant);
  const navigate = useNavigate();

  return (
    <Section>
      <div
        className={cn(
          "category-banner",
          `category-banner--${variant}`,
          "shadow--sm"
        )}
      >
        <div className="category-banner__picture-wrapper">
          <picture>
            <img src={imageUrl} alt={name} />
          </picture>
        </div>

        <div className="category-banner__info">
          <h2 className="category-banner__info-title" id="category-title">
            {name}
          </h2>
          <p className="category-banner__info-description">{description}</p>
          <Button
            type="submit"
            variant="primary"
            aria-describedby="category-title"
            onClick={() => navigate(`/products?category=${id}`)}
          >
            Explore {slug}
          </Button>
        </div>
      </div>
    </Section>
  );
};
