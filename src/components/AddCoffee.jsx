import React from "react";
import { data } from "react-router";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.coffee.value;
    const chef = form.coffeeChef.value;
    const supplier = form.coffeeSupplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      test,
      category,
      details,
      photoUrl,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged.true) {
          form.reset();
        }
        console.log(data);
      });
  };

  return (
    <div className=" min-h-screen p-10">
      {/* Main content */}
      <div className="max-w-4xl mx-auto bg-[#F4F3F0] shadow-md rounded-lg p-10">
        <p className="text-left text-sm font-medium text-gray-600 mb-5 cursor-pointer">
          ← Back to home
        </p>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold mb-4 text-[#374151]">
            Add New Coffee
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              name="coffee"
              placeholder="Enter coffee name"
              className="w-full border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          {/* Chef */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Chef</label>
            <input
              type="text"
              name="coffeeChef"
              placeholder="Enter coffee chef"
              className="w-full border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Supplier
            </label>
            <input
              type="text"
              name="coffeeSupplier"
              placeholder="Enter coffee supplier"
              className="w-full border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          {/* Taste */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Taste
            </label>
            <input
              type="text"
              name="test"
              placeholder="Enter coffee taste"
              className="w-full border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="w-full border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="w-full border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          {/* Photo */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-1 text-gray-700">
              Photo
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter photo URL"
              className="w-full border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          {/* Submit button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-[#331A15] font-semibold py-3 rounded-md hover:bg-[#b89a73] transition"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
