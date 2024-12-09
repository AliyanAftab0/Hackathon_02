import Image from "next/image";

const Client = () => {
  const Clients = [
    { img: "/d1.png", title: "Professional Chefs", number: "420" },
    { img: "/d2.png", title: "Items Of Food", number: "320" },
    { img: "/d3.png", title: "Years Of Experienced", number: "30+" },
    { img: "/d4.png", title: "Happy Customers", number: "220" },
  ];
  return (
    <div className="w-full h-[469px] bg-clients flex justify-center items-center    ">
      {Clients.map((client, i) => (
        <div key={i} className="w-[248px] h-[218px] flex flex-col justify-center items-center mx-auto">
            <Image src={client.img} width={120} height={120} alt="img" />
            <h1 className="text-white font-bold helvetica text-2xl text-center">{client.title}</h1>
            <h1 className="text-white font-bold helvetica text-[40px] text-center">{client.number}</h1>
        </div>
      ))}
    </div>
  );
};

export default Client;
