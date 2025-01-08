import { useEffect, useState } from "react";
import client, { urlFor } from "../../sanity";

const CommissionDisplay = () => {
  const [commissionPieces, setCommissionPieces] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "commissionPiece"]{_id, title, artist, price, image}')
      .then((data) => {
        setCommissionPieces(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-2">
      {commissionPieces.map((piece) => (
        <div key={piece._id}>
          <h2>{piece.title}</h2>
          <p>{piece.artist}</p>
          <p>{piece.price}</p>
          {piece.image && (
            <img
              src={urlFor(piece.image).width(300).url()} // Use urlFor to generate the image URL
              alt={piece.title}
              className="w-28"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CommissionDisplay;
