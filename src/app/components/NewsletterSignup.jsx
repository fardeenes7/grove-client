"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const NewsletterSignup = () => {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Make POST request with form data
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/newsletter/subscribe/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await response.json();
            if (response.status === 201) {
                toast.success("You have been subscribed to our newsletter");
            } else {
                throw new Error(data.message);
            }
            setFormData({ email: "" });
            document.getElementById("email").value = "";
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h3 className="font-bold mb-2">Be the first to know</h3>
            <form onSubmit={handleSubmit}>
                <div className="relative flex">
                    <input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="p-4 rounded-lg text-black focus:outline-none pr-[3.5rem]"
                        onChange={handleChange}
                        required
                        name="email"
                    />
                    <button
                        type="submit"
                        className="absolute h-full mr-5 md:right-[-30px] right-0 2xl:right-0 md:top-0 px-4 md:pr-4 py-4 rounded-r-lg bg-white text-black font-bold"
                    >
                        {loading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsletterSignup;
