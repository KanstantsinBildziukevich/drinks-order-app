import Card from '../UI/Card';
import classes from './AvailableDrinks.module.css';
import DrinkItem from './DrinkItem/DrinkItem';

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
  const drinksList = DUMMY_DRINKS.map(drink => (
    <DrinkItem 
      key={drink.id} 
      id={drink.id}
      name={drink.name} 
      description={drink.description} 
      price={drink.price}
    />
  ));

  return (
    <section className={classes.drinks}>
      <Card>
        <ul>
          {drinksList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableDrinks;