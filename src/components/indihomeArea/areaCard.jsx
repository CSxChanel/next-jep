import Image from "next/image";
import Button from "./buttonArea";

const AreaCard = ({ image, title, description, onClick, children }) => {
  return (
    <div className="m-5 shadow-lg shadow-slate-500 w-full mx-auto bg-slate-100 rounded-xl py-5 px-5">
      <div className="">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="mx-auto"
        />
        <h5 className="my-3 font-semibold text-center text-xl border-b-2 py-3 border-rose-700">
          {title}
        </h5>
        <p className="mb-5">{description}</p>
        <Button onClick={onClick}>{children}</Button>
      </div>
    </div>
  );
};

export default AreaCard;
