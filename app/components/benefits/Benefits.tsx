'use client';
import { FC } from 'react';
import { Title } from '../ui';
import BenefitDetail from './BenefitDetail';

const Benefits: FC = () => {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <Title
        title="Beneficios de Mercado Puntos"
        subtitle="Ver todos los beneficios"
      />
      <div className="flex flex-col gap-4 sm:gap-0 md:flex-row justify-between mt-5 mb-5">
        <BenefitDetail
          benefitImage={{
            src: '/publicity/disney_stars2.jpg',
            alt: 'Disney Stars Plus Mercado Libre',
          }}
          benefitImageLogo={{
            src: '/publicity/combo-plus-logo.jpg',
            alt: 'Logo combo plus Mercado Libre',
          }}
          title="Sin cargo con el nivel 6"
          subtitle="Disney+ y Star+"
        />

        <BenefitDetail
          benefitImage={{
            src: '/publicity/hbo.jpg',
            alt: 'HBO Mercado Libre',
          }}
          benefitImageLogo={{
            src: '/publicity/hbo-logo.png',
            alt: 'Logo HBO Mercado Libre',
          }}
          header="7 DÍAS GRATIS"
          title="Hasta 30% OFF"
          subtitle="HBO Max"
        />

        <BenefitDetail
          benefitImage={{
            src: '/publicity/paramount.jpg',
            alt: 'Paramount Mercado Libre',
          }}
          benefitImageLogo={{
            src: '/publicity/paramount-logo.png',
            alt: 'Logo Paramount Mercado Libre',
          }}
          header="7 DÍAS GRATIS"
          title="Hasta 30% OFF"
          subtitle="Paramount+"
        />
      </div>
    </div>
  );
};

export default Benefits;
