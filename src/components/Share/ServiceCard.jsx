
const ServiceCard = ({ service }) => {
    return (
        <div className="px-6 bg-zinc-950 hover:bg-zinc-900 hover:shadow-[#f34e3a] hover:shadow-lg h-[600px]">
            <div className="flex justify-center items-center h-[350px] border-gray-300 border-b-2">
                <img className="w-[300px] h-[300px] border-[#f34e3a] border-2 rounded-full" src={service.image} alt="" />
            </div>
            <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">{service.title}</h1>
                    <small className="px-3 py-2 bg-[#111111] shadow-[#f34e3a]  shadow-md">{service.cost}</small>
                </div>
                <small>{service.description}</small>
                <div className="flex justify-center">
                    <button className="px-3 py-2 bg-[#111111] text-gray-300 shadow-[#f34e3a] shadow-md">See More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;