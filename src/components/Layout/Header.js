import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton'
import drinksImage from '../../assets/drinks.jpg'
import classes from './Header.module.css';

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Drinks</h1>
      <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
      <img src={drinksImage} alt='wine bottle on the table'/>
    </div>
  </Fragment>
};

export default Header;