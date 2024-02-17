import React from "react";

const Findus = () => {
    const destination = "2354+Hardwick+St.+Dallas,+TX+75208";
    return (
        <div className="container flex flex-col md:flex-row justify-around items-center max-w-[1380px] mx-auto">
            <div className="p-5 flex flex-col gap-3">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-black text-secondary">
                    <span className="tracking-widest">THE</span>
                    <br />
                    GROVE
                </h1>
                <p className="text-lg font-bold uppercase">Address:</p>
                <p className="font-medium">
                    2354 Hardwick St. Dallas, TX 75208
                </p>
                <p className="text-lg font-bold uppercase">Opening Hours:</p>
                <p className=" font-bold">
                    Mon-Sat:<span className="font-medium"> 8am-10pm</span>
                </p>
                <p className="font-bold">
                    Sun:<span className="font-medium"> 8am-9pm</span>
                </p>
                <p className="text-lg font-medium">
                    EMAIL:
                    <span className="underline">info@grovepickleball.com</span>
                </p>
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${destination}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Directions
                    </button>
                </a>
            </div>
            <div className="">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.7304001072753!2d-96.82893082386167!3d32.77288747366548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9965ba814bf7%3A0xdbadd87be7a10a40!2s2354%20Hardwick%20St%2C%20Dallas%2C%20TX%2075208!5e0!3m2!1sen!2sus!4v1707585686174!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="max-w-full max-h-full"
                />
            </div>
        </div>
    );
};

export default Findus;
