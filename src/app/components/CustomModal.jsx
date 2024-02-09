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
      className="bg-primary text-white rounded px-6 py-8 z-20 relative shadow-[0px_0px_250px_5px_rgba(0,0,0,0.3)] shadow-cyan-500/50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 shadow-lg"
    >
      <div className="flex flex-col sm:flex-row items-center ">
        <Image
          src={WelcomeImg}
          alt="welcome_to_grove"
          className="w-full object-cover h-64 rounded sm:w-1/2 sm:h-auto"
        />
        <div className="w-px bg-[#313B40] h-full sm:h-auto self-stretch mx-4"></div>
        <form
          onSubmit={handleSubmit}
          className="w-full mt-4 sm:mt-0 sm:w-1/2 sm:ml-4 gap-4 flex flex-col"
        >
         
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            placeholder="Name"
            className="mt-1 block w-full py-3 px-4 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />

        
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
        className="absolute top-4 right-4 m-2 text-white text-4xl"
      >
        X
      </button>
    </Modal>
  );
}

export default CustomModal;
