import Image from "next/image";

const CardImage = ({ image }) => {
  return (
    <>
      <div className="">
        <Image
          src={image.src}
          alt={image.alt}
          width={300}
          height={200}
          className="w-full h-full object-left-bottom object-cover"
        />
        <h2 className="my-2 text-xl font-bold">{image.alt}</h2>
        <p>{image.description}</p>
      </div>
    </>
  );
};

export default CardImage;
