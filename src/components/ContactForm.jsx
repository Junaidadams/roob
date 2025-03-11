import { useState } from "react";
import axios from "axios";
import { PiSpinnerGapDuotone, PiCheckCircleDuotone } from "react-icons/pi";
import { FaExclamationCircle } from "react-icons/fa";

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
    setStatus({
      success: null,
      message: "",
      loading: true,
    });
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mail-server-6sjb.onrender.com/api/mail/roob-commission-request",
        formData
      );
      setStatus({
        success: true,
        message: "Form submitted successfully!",
        loading: false,
      });
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
        loading: false,
      });
      console.log(error);
    }
  };

  return (
    <div className=" p-2 mx-2 mt-2 mb-10  flex flex-col">
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
        <div className="flex">
          <div className="w-1/2 mr-1">
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
          <div className="w-1/2 ml-1">
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
              <option value="lineart">Lineart</option>
              <option value="colour">Colour</option>
            </select>
          </div>
        </div>
        <div></div>
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
          disabled={status}
          type="submit"
          className="w-full py-2 px-4 rounded-sm border-gray-700 bg-black text-white hover:bg-opacity-80 border flex"
        >
          {status ? (
            <span className="w-full">
              {status.loading ? (
                <span className="flex">
                  <span className="ml-auto mr-1 animate-pulse">
                    Sending ...
                  </span>
                  <span className="mr-auto ml-1 my-auto">
                    <PiSpinnerGapDuotone className="ani animate-spin mr-auto" />
                  </span>
                </span>
              ) : status.failed ? (
                <span className="flex">
                  <span className="ml-auto mr-1">Failed to send</span>
                  <span className="mr-auto ml-1 my-auto">
                    <FaExclamationCircle className="mr-auto" />
                  </span>
                </span>
              ) : status.success ? (
                <span className="flex w-full">
                  <span className="ml-auto mr-1">Sent</span>
                  <span className="mr-auto ml-1 my-auto">
                    <PiCheckCircleDuotone className="mr-auto" />
                  </span>
                </span>
              ) : (
                "Submit"
              )}
            </span>
          ) : (
            <span className="mx-auto">Submit</span>
          )}
        </button>
        {status && (
          <p className={`mb-4 sm:text-lg text-center mx-auto w-full`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
