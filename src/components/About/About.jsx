import aboutImg from '../../assets/images/otherImages/about.jpg'
import Title from '../Share/Title';

const About = () => {
    return (
        <section id="about" className='pb-20 border-b-[1px] border-b-gray-100'>
            <Title title="About us" description="23 Years of Fitness Excellence" />
            <div className='grid items-center justify-center grid-cols-1 gap-10 sm:grid-cols-2'>
                <div className='text-gray-400' data-aos="flip-left">
                    <h1 className='pb-2 text-4xl font-bold'>Unleashing Your <span className='text-[#f34e3a] border-[#f34e3a] border-b-[2px]'>Potential</span></h1>
                    <small className='text-[#f34e3a]'>Since 2000 - 2023</small>
                    <p className='pt-6'>Elevate Fitness is your path to a stronger, healthier you. Our dedicated team and cutting-edge facility are here to guide you on a fitness journey. From personalized training to diverse classes, we empower you to reach new heights in physical and mental well-being. Join us and rise to your full potential.</p>
                </div>
                <img className='w-[600px] border-[#f34e3a] border-2 rounded-md' src={aboutImg} alt="" data-aos="zoom-in" />
            </div>
        </section>
    );
};

export default About;