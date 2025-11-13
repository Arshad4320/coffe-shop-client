import React from "react";
import { useLoaderData, Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { name, quantity, supplier, test, details, photoUrl, price } = coffee;

  return (
    <div className="max-w-3xl mx-auto my-10 bg-[#fdf8f4] rounded-2xl  p-8">
      <Link
        to="/"
        className="flex items-center gap-2 text-brown-700 font-medium hover:underline mb-4"
      >
        <ArrowLeft size={18} /> Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Coffee Image */}
        <div className="flex justify-center">
          <img
            src={photoUrl}
            alt={name}
            className="w-72 h-72 object-cover rounded-xl "
          />
        </div>

        {/* Coffee Info */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{name}</h2>
          <p className="text-lg text-gray-600 mb-4">{details}</p>

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-medium">Taste:</span> {test}
            </p>
            <p>
              <span className="font-medium">Quantity:</span> {quantity} pcs
            </p>
            <p>
              <span className="font-medium">Price:</span>{" "}
              <span className="text-green-600 font-semibold">${price}</span>
            </p>
          </div>

          <button className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
