'use client';
import { FC } from 'react';
import CreditIcon from '../../../public/icons/credit-card.svg';
import DebitIcon from '../../../public/icons/debit-card.svg';
import ViewMoreIcon from '../../../public/icons/view-more.svg';
import PaymentMethodDetail from './PaymentMethodDetail';

const PaymentMethods: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white mt-6 w-full rounded-lg">
      <div className="border-l-4 border-secondary  flex flex-col p-4">
        <p className="text-base">Paga cómodo y seguro</p>
        <span className="text-sm text-gray-400">con Mercado pago</span>
      </div>
      <div className="border-l-[0.2px] gap-5 flex-col sm:flex-row  sm:gap-0 border-gray-200 text-gray flex flex-1 justify-around p-4 ">
        <PaymentMethodDetail
          icon={CreditIcon}
          title={'Hasta 12 cuostas sin interés'}
          action={'Ver más'}
        />
        <PaymentMethodDetail
          icon={DebitIcon}
          title={'Tarjeta de débito'}
          action={'Ver más'}
        />
      </div>
      <div className="border-l-[0.2px] border-gray-200 text-gray flex p-4">
        <PaymentMethodDetail
          icon={ViewMoreIcon}
          title={'Más medios de pagos'}
          action={'Ver todos'}
        />
      </div>
    </div>
  );
};

export default PaymentMethods;
