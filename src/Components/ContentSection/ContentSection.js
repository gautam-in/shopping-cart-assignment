import Content from "../Content/Content";
import Image from "../UI Components/Image/Image";
import "./ContentSection.scss";

const ContentSection = ({
  url,
  heading,
  text,
  category,
  id,
  handleClick,
  order,
}) => {
  return (
    <section className="container">
      {order % 2 !== 0 ? (
        <>
          <Image source={url} alt={`${heading} image`} />
          <Content
            className="container__content"
            heading={heading}
            text={text}
            category={category}
            id={id}
            handleClick={handleClick}
          />
        </>
      ) : (
        <>
          <Content
            className="container__content"
            heading={heading}
            text={text}
            category={category}
            id={id}
            handleClick={handleClick}
          />
          <Image source={url} alt={`${heading} image`} />
        </>
      )}
    </section>
  );
};

export default ContentSection;
