import { Fragment } from 'react';
import DrinksSum from './DrinksSum';
import AvailableDrinks from './AvailableDrinks';

const Drinks = () => {
  return (
  <Fragment>
    <DrinksSum />;
    <AvailableDrinks />;
  </Fragment>
  );
};

export default Drinks;