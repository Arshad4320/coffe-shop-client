import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffee = useLoaderData();
  const [coffees, setCoffees] = useState(coffee);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffee.map((item) => (
          <CoffeeCard
            coffees={coffees}
            setCoffees={setCoffees}
            item={item}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
