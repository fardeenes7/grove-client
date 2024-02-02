import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

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
      className="bg-primary text-white rounded px-6 py-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <form onSubmit={handleSubmit} className="flex space-x-4 items-center">
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          placeholder="Name"
          className="mt-1 block w-full rounded-md bg-white shadow-sm"
        />
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder="Email"
          className="mt-1 block w-full rounded-md bg-white shadow-sm"
        />

        <button
          type="submit"
          className="px-4 py-2 rounded bg-secondary text-white"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default CustomModal;
