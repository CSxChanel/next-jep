const CardImage = ({image}) => {
    return (
        <div className="w-full h-full rounded-lg overflow-hidden">
            <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export default CardImage;