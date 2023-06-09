'use client';
import { FC } from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import Image from 'next/image';
import type { ImageType } from '@/app/types/images.types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CustomCarouselProps {
  images: ImageType[];
  carouselProps?: CarouselProps;
  className?: string;
}

const CustomCarousel: FC<CustomCarouselProps> = ({
  images,
  carouselProps,
  className,
}) => {
  return (
    <div className={`${className} `}>
      <Carousel showStatus={false} autoPlay {...carouselProps}>
        {images.map((image) => (
          <div className="relative w-full h-auto" key={image.id}>
            <Image
              placeholder="blur"
              blurDataURL="/carousel/carousel1.webp"
              src={image.src}
              alt={image.alt}
              width={1200}
              height={200}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
