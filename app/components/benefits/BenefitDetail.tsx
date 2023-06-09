'use client';
import { FC } from 'react';
import Image from 'next/image';
import { ImageType } from '@/app/types/images.types';

interface BenefitDetailProps {
  benefitImage: ImageType;
  benefitImageLogo: ImageType;
  header?: string;
  title: string;
  subtitle: string;
}

const BenefitDetail: FC<BenefitDetailProps> = ({
  benefitImage,
  benefitImageLogo,
  header,
  title,
  subtitle,
}) => {
  return (
    <div className="relative">
      <div className="rounded-md overflow-hidden w-full sm:w-90 h-64">
        <Image
          width={360}
          height={250}
          src={benefitImage.src}
          alt={benefitImage.alt}
        />
        <div className="absolute bottom-0 left-0 bg-custom-gradient p-6 w-full">
          <div className="flex gap-2">
            <div className="rounded-md overflow-hidden w-20 h-20">
              <Image
                width={80}
                height={80}
                src={benefitImageLogo.src}
                alt={benefitImageLogo.alt}
              />
            </div>
            <div className="flex flex-col gap-1">
              {header && (
                <p className="font-semibold text-sm text-white">{header}</p>
              )}
              <p className="font-semibold text-lg text-white">{title}</p>
              <p className="font-semibold text-white">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitDetail;
