import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import cn from "classnames";

import Button from "../Common/Button";
import Section from "../Section";
import "./styles.scss";

const CategoryBanner = ({
  name,
  description,
  imageUrl,
  id,
  slug,
  variant,
}: any) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({});

  return (
    <Section>
      <div
        ref={ref}
        className={cn(
          "category-banner",
          `category-banner--${variant}`,
          "shadow--sm"
        )}
      >
        <div className="category-banner__picture-wrapper">
          {inView && (
            <picture>
              <img src={imageUrl} alt={name} />
            </picture>
          )}
        </div>

        <div className="category-banner__info">
          <h2
            className="category-banner__info-title"
            id={`category-title-${name}`}
          >
            {name}
          </h2>
          <p className="category-banner__info-description">{description}</p>
          <Button
            type="submit"
            variant="primary"
            aria-describedby={`category-title-${name}`}
            onClick={() => navigate(`/products?category=${id}`)}
          >
            Explore {slug}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CategoryBanner;
