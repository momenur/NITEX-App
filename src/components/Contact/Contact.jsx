import Title from "../Share/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
    return (
        <section id="contact" className="pb-20 border-b-[1px] border-b-gray-100">
            <Title title="Contract Us" description="In Our Touch" />
            <div className="mx-auto">
                <div className="w-full">
                    <div className="flex flex-col justify-between w-full h-auto gap-10 lg:flex-row">
                        <ContactLeft />
                        <div className="w-[94%] lgl:w-[60%] h-full flex flex-col  items-center justify-center" data-aos="zoom-in-left">
                            <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-8 justify-center">
                                <form className="w-full">

                                    <div className="flex flex-col gap-6 py-2">
                                        <div className="flex flex-col gap-10 lgl:flex-row">
                                            <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                                                <p className="text-sm tracking-wide text-gray-400 uppercase">your name</p>
                                                <input type="text" name="to_name" id="" />
                                            </div>
                                            <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                                                <p className="text-sm tracking-wide text-gray-400 uppercase">Phone Number</p>
                                                <input type="text" name="" id="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full gap-4">
                                            <p className="text-sm tracking-wide text-gray-400 uppercase">your email</p>
                                            <input type="email" name="from_name" id="" />
                                        </div>
                                        <div className="flex flex-col w-full gap-4">
                                            <p className="text-sm tracking-wide text-gray-400 uppercase">Subject</p>
                                            <input type="text" name="" id="" />
                                        </div>
                                        <div className="flex flex-col w-full gap-4">
                                            <p className="text-sm tracking-wide text-gray-400 uppercase">message</p>
                                            <textarea name="message" cols="30" rows="8"></textarea>
                                        </div>
                                        <div>
                                            <input className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent" type="submit" value="SEND MESSAGE" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;