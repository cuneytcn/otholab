type Props = {
  img: string;
  name: string;
};

const ClientCard = ({ img, name }: Props) => {
  return (
    <div className="p-10 aspect-square bg-white relative flex justify-center items-center group">
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <img src={img} alt={name} className="max-w-full h-36 lg:h-52 object-cover" />
      </div>
      <h3 className="opacity-0">{name}</h3>
      <div className="absolute inset-0 w-full h-full bg-white/90 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible flex justify-center items-center p-10">
        <h6 className="text-center">{name}</h6>
      </div>
    </div>
  );
};

export default ClientCard;
