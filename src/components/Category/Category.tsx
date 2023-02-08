import Image from "next/image";
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
    <article className="flex gap-2 h-96 justify-around p-4">
      <img src={imageUrl} alt={name} className="max-w-[10rem]" />
      <div className={"flex items-center " + (rtl ? "" : "order-first")}>
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="font-bold">{name}</h2>
          <p>{description}</p>
          <button className="bg-primary p-2 text-white w-fit">
            Explore {slug}
          </button>
        </div>
      </div>
    </article>
  );
}
