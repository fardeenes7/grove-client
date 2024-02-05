import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import WelcomeImg from "../../../public/assets/welcome_img.svg";
import Image from "next/image";

Modal.setAppElement("#root"); // replace '#root' with your app element id

function CustomModal({ isOpen, onRequestClose }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://api.example.com/subscribe",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-primary text-white rounded px-6 py-4 z-20 relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <Image
          src={WelcomeImg}
          alt="welcome_to_grove"
          className="w-full object-cover h-64 rounded sm:w-1/2 sm:h-auto"
        />
        <div className="w-px bg-white h-full sm:h-auto self-stretch mx-4"></div>
        <form
          onSubmit={handleSubmit}
          className="w-full mt-4 sm:mt-0 sm:w-1/2 sm:ml-4"
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            placeholder="Name"
            className="mt-1 block w-full py-3 px-4 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Email"
            className="mt-1 block w-full py-3 px-4 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="mt-4 w-full py-3 px-4 rounded bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
      <button
        onClick={onRequestClose}
        className="absolute top-0 right-0 m-2 text-white text-4xl"
      >
        X
      </button>
    </Modal>
  );
}

export default CustomModal;
