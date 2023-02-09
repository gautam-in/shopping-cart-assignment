import Image from "next/image";
import Link from "next/link";
import { TCategory } from "../../apis/categories";

interface Category
  extends Pick<TCategory, "description" | "imageUrl" | "name"> {
  slug: string;
  rtl?: boolean;
}

export default function Category({
  description,
  imageUrl,
  name,
  slug,
  rtl = false,
}: Category) {
  return (
    <article className="flex gap-2 h-96 justify-between p-4 items-center">
      <div className="relative h-60 w-60">
        <Image fill src={imageUrl} alt={name} className="object-contain" />
      </div>
      <div className={"items-center " + (rtl ? "" : "order-first")}>
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="font-bold">{name}</h2>
          <p>{description}</p>
          <Link
            href={`/products?category=${slug}`}
            className="bg-primary p-3 text-white w-fit"
          >
            Explore {slug}
          </Link>
        </div>
      </div>
    </article>
  );
}
