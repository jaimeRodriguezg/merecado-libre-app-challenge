import { Carousel, PaymentMethods, Benefits } from './components';
import { imagesCarousel } from './utils/static';

export default function Home() {
  return (
    <div className="container w-full">
      <Carousel
        className="-ml-4 -mr-4 sm:-ml-24 sm:-mr-24 md:-ml-48 md:-mr-48 h-full"
        images={imagesCarousel}
      />
      <PaymentMethods />
      <Benefits />
    </div>
  );
}
