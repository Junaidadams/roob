import { useEffect, useState } from "react";
import client, { urlFor } from "../../sanity";
import { motion } from "framer-motion";

const CommissionDisplay = () => {
  const [commissionPieces, setCommissionPieces] = useState([]);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "commissionPiece"]{_id, title, artist, price, image}')
      .then((data) => {
        setCommissionPieces(data);
      })
      .catch(console.error);
  }, []);

  const handleClose = () => {
    setFocused(null);
  };

  return (
    <div className="relative">
      {/* Grid of commission pieces */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {commissionPieces.map((piece) => (
          <motion.div
            key={piece._id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setFocused(piece)}
            className="border-black border rounded-sm hover:cursor-pointer"
          >
            {piece.image && (
              <motion.img
                src={urlFor(piece.image).width(300).url()}
                alt={piece.title}
                className="w-full h-36 object-cover "
              />
            )}
            <h2 className="py-4 px-2 sm:text-lg font-semibold">
              {piece.title}
            </h2>
            {/* <p>{piece.artist}</p>
            <p>{piece.price}</p> */}
          </motion.div>
        ))}
      </div>

      {/* Focused image overlay */}
      {focused && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
          onClick={handleClose}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the container
          >
            {/* Container matches image size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative rounded-sm bg-[#f5f5f5] inline-block w-[70vw] h-[70vh]"
            >
              <img
                src={urlFor(focused.image).url()}
                alt={focused.title}
                className="w-full h-full object-contain rounded"
              />
              {/* Button positioned relative to the image */}
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded hover:bg-opacity-75"
                onClick={handleClose}
              >
                ×
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionDisplay;
