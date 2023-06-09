'use cliebt';
import { FC } from 'react';
import Image from 'next/image';

interface PaymentMethodDetailProps {
  icon: any;
  title: string;
  action: string;
}

const PaymentMethodDetail: FC<PaymentMethodDetailProps> = ({
  icon,
  title,
  action,
}) => {
  return (
    <div className="flex gap-4">
      <Image
        src={icon}
        width={48}
        height={48}
        alt="credit card mercado libre"
      />
      <div className="flex flex-col gap-1">
        <p className="text-base">{title}</p>
        <p className="text-sm text-secondary hover:cursor-pointer">{action}</p>
      </div>
    </div>
  );
};

export default PaymentMethodDetail;
