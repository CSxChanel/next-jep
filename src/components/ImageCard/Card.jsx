import { priority } from "next-sitemap.config";
import Image from "next/image";

const Card = ({ image }) => {
  return (
    <>
      <Image
        src={image.src}
        alt={image.alt || "Image"}
        width={340}
        height={200}
        // priority={priority}
        style={{ width: "100%", height: "100%" }}
        className="overflow-hidden min-w-[320px] h-[225px]"
      />
    </>
  );
};

export default Card;
