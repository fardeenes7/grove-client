"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { newsletterForm } from "../../lib/actions";

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
        const response = await newsletterForm(formData);
        if (response.status === 201) {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
        document.getElementById("newsletter_form").reset();
        setLoading(false);
    };

    return (
        <div>
            <h3 className="font-bold mb-2">Be the first to know</h3>
            <form id="newsletter_form" onSubmit={handleSubmit}>
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
