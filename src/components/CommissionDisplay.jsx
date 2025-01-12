import { useEffect, useState } from "react";
import client, { urlFor } from "../../sanity";
import { motion } from "framer-motion";
import { LuX } from "react-icons/lu";

const CommissionDisplay = () => {
  const [commissionPieces, setCommissionPieces] = useState([]);
  const [focused, setFocused] = useState(null); // Stores the currently focused piece

  useEffect(() => {
    client
      .fetch('*[_type == "commissionPiece"]{_id, title, artist, price, image}')
      .then((data) => {
        setCommissionPieces(data);
      })
      .catch(console.error);
  }, []);

  const handleClose = () => {
    setFocused(null); // Close the focused image
  };

  return (
    <div className="relative">
      {/* Grid of commission pieces */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {commissionPieces.map((piece) => (
          <div key={piece._id}>
            <h2>{piece.title}</h2>
            <p>{piece.artist}</p>
            <p>{piece.price}</p>
            {piece.image && (
              <motion.img
                src={urlFor(piece.image).width(300).url()}
                alt={piece.title}
                className="w-full h-36 object-cover p-[1px] bg-black rounded-sm hover:cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setFocused(piece)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Focused image overlay */}
      {focused && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
          onClick={handleClose}
        >
          <div className="relative">
            <motion.img
              src={urlFor(focused.image).width(800).url()} // Larger version of the image
              alt={focused.title}
              className="max-w-full max-h-full object-contain rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded hover:bg-opacity-75"
              onClick={handleClose}
            >
              <LuX />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionDisplay;
