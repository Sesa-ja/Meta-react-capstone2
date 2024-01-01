import React from 'react';
import MealRecipes from './MealRecipe'; // Importing the mealRecipes array
import './NavigationMenu.css'; // Import a CSS file for styling
import Swal from 'sweetalert2'; // Import SweetAlert library

const Card = ({ meal, handleOrder }) => (
  <div className="menu-card" key={meal.id}>
    <img src={meal.image} alt={meal.title} className="card-image" />
    <h3>{meal.title}</h3>
    <p>{meal.description}</p>
    <p>Price: ${meal.price.toFixed(2)}</p>
    <button className='OrderBtn' onClick={() => handleOrder(meal.id)}>
      Order Now
    </button>
  </div>
);

const NavigationMenu = () => {
  const handleOrder = (id) => {
    console.log("Item with id, id is clicked");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your Order has been Processed.",
          icon: "success"
        });
      }
    });
  };

  return (
    <nav>
      {/* Specials section */}
      <div className='menu-header'>
        <h2>This Week Specials!</h2>
        <button>Order Menu</button>
      </div>

      {/* Displaying menu items using Card component */}
      <div>
        <h2>Menu</h2>
        <div className="menu-cards">
          {MealRecipes.map((meal) => (
            <Card key={meal.id} meal={meal} handleOrder={handleOrder} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;