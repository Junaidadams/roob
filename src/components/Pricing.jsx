import { useEffect, useState } from "react";
import client from "../../sanity";

const Pricing = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    client
      .fetch(
        '*[_type == "pricing"]{_id, name, price, currency, description, validUntil}'
      )
      .then((data) => {
        setPrices(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Pricing</h1>
      <div>
        {prices.length > 0 ? (
          prices.map((price) => (
            <div
              key={price._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <h1 className="text-2xl">
                <strong> {price.name}</strong>
              </h1>
              <p>
                <strong>Price:</strong> {price.price} {price.currency}
              </p>
              <p>
                <strong>Description:</strong> {price.description}
              </p>
              {price.validUntil && (
                <p>
                  <strong>Valid Until:</strong>{" "}
                  {new Date(price.validUntil).toLocaleDateString()}
                </p>
              )}
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
