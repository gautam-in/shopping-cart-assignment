import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import "./image.scss";

interface IProps {
  className?: string;
  src: string;
  alt: string;
  customClass?: string;
  fallBackImageSrc?: string;
  onClick?: Function;
  type?: string;
  previewImageSrc?: string;
  loading?: "lazy" | "eager";
}

export default function Image(props: IProps) {
  const { src = "", alt, type, customClass, fallBackImageSrc = "", onClick = null, previewImageSrc = "", loading } = props;

  const [imageSrc, setImageSrc] = React.useState(previewImageSrc);
  const imageRef = useRef(null);

  const isBlur = imageSrc === previewImageSrc;
  const className = classNames(type, customClass, isBlur ? "img--blur" : "img--clear");

  const handleError = () => {
    imageRef.current.src = fallBackImageSrc;
  };

  const handleLoad = () => {
    setImageSrc(src);
  };

  useEffect(() => {
    setImageSrc(previewImageSrc);
    handleLoad();
  }, [previewImageSrc, src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      ref={imageRef}
      onClick={() => {
        onClick && onClick();
      }}
      loading={loading}
      onError={() => {
        handleError();
      }}
      onLoad={() => handleLoad()}
    />
  );
}
