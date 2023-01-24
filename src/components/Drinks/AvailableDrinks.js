import classes from './AvailableDrinks.module.css';
import { assertClassExpression } from '@babel/types';

const DUMMY_DRINKS = [
  {
    id: 'm1',
    name: 'Ceylon Tea',
    description: 'Finest leaves',
    price: 4.99,
  },
  {
    id: 'm2',
    name: 'Jägermeister Long',
    description: 'A german specialty!',
    price: 10.5,
  },
  {
    id: 'm3',
    name: 'Tennessee Bullet',
    description: 'American, harsh, wild',
    price: 9.99,
  },
  {
    id: 'm4',
    name: 'Green coffee',
    description: 'Healthy...and green...',
    price: 5.99,
  },
];

const AvailableDrinks = () => {
  const drinksList = DUMMY_DRINKS.map(drink => <li>{drink.name}</li>);

  return (
    <section className={classes.drinks}>
      <ul>
        {drinksList}
      </ul>
    </section>
  );
};

export default AvailableDrinks;