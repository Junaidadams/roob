import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    contactEmail: "",
    type: "",
    variant: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://your-backend-url.com/api/contact",
        formData
      );
      setStatus({ success: true, message: "Form submitted successfully!" });
      setFormData({
        firstName: "",
        contactEmail: "",
        type: "",
        variant: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
      console.log(error);
    }
  };

  return (
    <div className=" p-2 m-2  flex flex-col ">
      {status && (
        <p
          className={`mb-4 text-sm ${
            status.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contactEmail"
            className="block text-sm font-medium mb-1"
          >
            Contact Email
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium mb-1">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded"
            required
          >
            <option value="">Select Type</option>
            <option value="pfp/icon">PFP / Icon</option>
            <option value="portrait"> Portrait</option>
            <option value="fullbody">Full Body</option>
            <option value="sillyfullbody">Silly Fullbody</option>
            {/* Add your options here */}
          </select>
        </div>
        <div>
          <label htmlFor="variant" className="block text-sm font-medium mb-1">
            Variant
          </label>
          <select
            id="variant"
            name="variant"
            value={formData.variant}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded"
            required
          >
            <option value="">Select Variant</option>
            {/* Add your options here */}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-sm border-gray-700 bg-black text-white hover:bg-opacity-80 border"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
