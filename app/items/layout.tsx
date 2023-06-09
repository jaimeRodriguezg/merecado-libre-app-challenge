export const metadata = {
  title: 'Mercado Libre',
  description: 'Mercado Libre App',
};

export default function Itemsayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-vw">
      <div>{children}</div>
    </div>
  );
}
