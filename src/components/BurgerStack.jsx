import '../App.css'

import Ingredient from './Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {

  return (
    
    <ul>

      {stack.length === 0 ? (

        <li>No Ingredients</li>

      ) : (

        stack.map((ingredient, index) => (

          <Ingredient 

            key={index} 

            ingredient={ingredient} 

            handleClick={() => removeFromBurger(index)} 

            /* 4 (a) As a user, I want to click an ‘X’ button on an ingredient in my burger stack to remove it.  */

            actionLabel="X" 

          />
        ))
      )}

    </ul>
  );
};

export default BurgerStack;