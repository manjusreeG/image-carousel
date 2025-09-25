import React from "react";

interface ImageCarouselProps {
    src: string;
    alt: string;
    caption?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {
    const { src, alt, caption } = props;

    return (
    <>
        <img className="absolute inset-0 z-0 w-full h-full object-cover" src={src} alt={alt} />
        <div>{caption}</div>
        <h2>Image Label</h2>
    </>);
};

export default ImageCarousel;