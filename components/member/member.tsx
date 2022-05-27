import Image from "next/image";

type MemberProps = {
  name: string;
  image: string;
  socialId: string;
};

const Member: React.FC<MemberProps> = ({ name, image, socialId }) => {
  return (
    <>
      <div>
        <Image src={image} width={1266} height={1455} alt={name} />
        <div>
          <h3 className="text-2xl xl:text-3xl">{name}</h3>
          <h4 className="text-base">{socialId}</h4>
        </div>
      </div>
    </>
  );
};

export default Member;
