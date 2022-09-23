import React, { useState, useCallback, useEffect } from 'react';

import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const setMeals = async (meals) => {
  await fetch(
    'https://testing-react-96b3e-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
    {
      method: 'POST',
      body: JSON.stringify(meals),
      headers: {
        'Content-Type': 'applicatoon/json',
      },
    }
  );
};

const AvailableMeals = (props) => {
  const [availableMeals, setAvailableMeals] = useState([]);
  // setMeals(DUMMY_MEALS)
  const fetchMeals = useCallback(async () => {
    const response = await fetch(
      'https://testing-react-96b3e-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
    );

    const meals = await response.json();
    setAvailableMeals(meals["-NCdz7jCCXMEHD11g_vU"]);
  }, []);
  useEffect(() => {
    fetchMeals();
  }, []);

  const mealsList = availableMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      price={meal.price}
      title={meal.name}
      description={meal.description}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
