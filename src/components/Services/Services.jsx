import Title from "../Share/Title";
import { ServicesData } from "../../assets/servicesData";
import ServiceCard from "../Share/ServiceCard";

const Services = () => {
    return (
        <section id="services">
            <Title title="Our Services" description="Tailored Solutions for Your Fitness"/>
            <div className="grid items-center justify-center grid-cols-3 gap-8">
                {
                    ServicesData.map(service => <ServiceCard key={service._id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;