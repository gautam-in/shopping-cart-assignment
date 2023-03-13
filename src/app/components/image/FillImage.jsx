import Image from "next/image";

export default function FillImage({ src, alt, priority }) {
  return (
    <Image
      fill
      src={src}
      alt={alt}
      priority={priority}
      sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
    />
  );
}
