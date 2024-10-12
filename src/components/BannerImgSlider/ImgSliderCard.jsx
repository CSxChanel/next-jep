// components/SliderCard.jsx
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImgSliderCard = ({ image }) => {
  return (
    <div>
      <LazyLoadImage
        alt={image.alt}
        effect="blur"
        src={image.src}
        className="w-[220px] h-full md:w-[250px] lg:w-[300px] object-center object-cover rounded-2xl border-2 cursor-pointer shadow-lg"
      />
    </div>
  );
};

export default ImgSliderCard;
