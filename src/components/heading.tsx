type Props = {
  title: string;
  children: React.ReactNode;
};

const Heading = ({ title, children }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-full md:col-span-5">
        <h3>{title}</h3>
        <hr className="max-w-32 mt-5 opacity-50" />
      </div>
      <div className="col-span-full md:col-span-7">
        <div className="flex flex-col gap-10">{children}</div>
      </div>
    </div>
  );
};

export default Heading;
