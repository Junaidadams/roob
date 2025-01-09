import { useEffect, useState } from "react";
import client from "../../sanity";

const Pricing = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    client
      .fetch(
        '*[_type == "pricing"]{_id, name, lineartPrice, colourPrice, description, validUntil}'
      )
      .then((data) => {
        setPrices(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1  sm:grid-cols-2 ">
        {prices.length > 0 ? (
          prices.map((price) => (
            <div
              key={price._id}
              className="border-gray-700 border p-2 m-2 rounded-sm bg-pastelblue bg-opacity-25 flex flex-col "
            >
              <div>
                <h1 className="text-xl font-medium">{price.name}</h1>
                <p>
                  Lineart = <strong>£{price.lineartPrice}</strong>
                </p>
                <p>
                  Colour = <strong>£{price.colourPrice}</strong>
                </p>
              </div>
              <div>
                <p>Example:</p>
                <img
                  src="./heroimg.png"
                  className="bg-white bg-opacity-25 rounded-sm"
                />
              </div>
            </div>
          ))
        ) : (
          <p>No pricing information available.</p>
        )}
      </div>
    </div>
  );
};

export default Pricing;
