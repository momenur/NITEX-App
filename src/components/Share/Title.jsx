
const Title = ({title, description}) => {
    return (
        <div className="pt-20 mb-16">
            <h1 className="text-sm font-light tracking-wide uppercase text-[#f34e3a]">{description}</h1>
            <h1 className="text-5xl font-bold text-gray-300 capitalize lgl:text-5xl">{title}</h1>
        </div>
    );
};

export default Title;