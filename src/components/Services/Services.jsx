import Title from "../Share/Title";
import { ServicesData } from "../../assets/servicesData";
import ServiceCard from "../Share/ServiceCard";

const Services = () => {
    return (
        <section id="services" className="pb-20 border-b-[1px] border-b-gray-100">
            <Title title="Our Services" description="Tailored Solutions for Your Fitness"/>
            <div className="grid items-center justify-center grid-cols-1 gap-8 sm:grid-cols-3">
                {
                    ServicesData.map(service => <ServiceCard key={service._id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;