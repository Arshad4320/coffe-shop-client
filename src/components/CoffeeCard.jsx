import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ item, coffees, setCoffees }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Coffee deleted successfully!",
            icon: "success",
          });

          const remainingCoffees = coffees.filter(
            (coffee) => coffee._id !== id
          );
          setCoffees(remainingCoffees);
        }
      }
    });
  };
  return (
    <div className="bg-gray-100 p-8">
      <div className="flex justify-around">
        <img
          src={item?.photoUrl}
          // alt={item?.name}
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div>
          <p>
            <span className="font-medium">name:</span>
            {item?.name}
          </p>
          <p>
            <span className="font-medium">price</span>
            {item.price}
          </p>
          <p>
            <span className="font-medium">test</span>: {item.test}
          </p>
        </div>
        <div className="action space-y-2">
          <p>
            {" "}
            <Link
              to={`/coffee-details/${item._id}`}
              className="text-center p-1 text-white bg-black rounded-md"
            >
              Details
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to={`/edit-coffee/${item._id}`}
              className="text-center p-1 text-white bg-blue-600 rounded-md"
            >
              Edit
            </Link>
          </p>
          <p
            onClick={() => {
              handleDelete(item._id);
            }}
            className="text-center cursor-pointer p-1 text-white bg-red-600 rounded-md"
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
