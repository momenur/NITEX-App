
const Title = ({ title, description }) => {
    return (
        <div className="pt-20 mb-16" data-aos="zoom-in">
            <h1 className="text-xs sm:text-sm font-light tracking-wide uppercase text-[#f34e3a]">{description}</h1>
            <h1 className="text-2xl font-bold text-gray-300 capitalize sm:text-5xl lgl:text-5xl">{title}</h1>
        </div>
    );
};

export default Title;