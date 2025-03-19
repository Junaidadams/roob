import { useEffect, useState } from "react";
import client, { urlFor } from "../../sanity";

const Pricing = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    client
      .fetch(
        '*[_type == "pricing"]{_id, name, lineartPrice, colourPrice, description, validUntil, image}'
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
              className="border-gray-700 border border-t-2 p-2 m-2 rounded-sm bg-pastelpink bg-opacity-50 flex flex-col "
            >
              <div>
                <h1 className="text-xl lg:text-2xl font-medium">
                  {price.name}
                </h1>
                <p>
                  Lineart = <strong>£{price.lineartPrice}</strong>
                </p>
                <p>
                  Colour = <strong>£{price.colourPrice}</strong>
                </p>
              </div>
              <div>
                {/* <p className="font-semibold">Example:</p> */}
                <img
                  src={urlFor(price.image).url()}
                  alt={price.name}
                  className="bg-white bg-opacity-25 rounded-sm p-5 mt-5"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="tracking-wider p-4 sm:text-lg">
            Pricing information is currently unavailable, please try again
            later.
          </p>
        )}
      </div>
    </div>
  );
};

export default Pricing;
