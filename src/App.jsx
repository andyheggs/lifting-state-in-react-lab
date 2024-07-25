
/*
*User stories:

Here are the user stories for this lab:

1. As a user, I want to be able to see a list of the ingredients that can be added to my burger on the left side of the screen.

2. As a user, I want to be able to see a stack of the ingredients that make up my burger on the right side of the screen.

3 (a) As a user, I want to click a ‘+’ button on an ingredient to add it to my burger stack. 
  (b) This action will place the ingredient on the stack displayed on the right side of the screen, while keeping the original ingredient list on the left unchanged.

4 (a) As a user, I want to click an ‘X’ button on an ingredient in my burger stack to remove it. 
  (b) This will take the ingredient off the stack on the right side of the screen, without changing the ingredient list on the left.

*/

import { useState } from 'react';
import './App.css'
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
    
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  // User Story: Initialise stack state to hold the ingredients in the burger
  const [stack, setStack] = useState([]);

  // User Story: Function to add an ingredient to the stack
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  // User Story: Function to remove an ingredient from the stack
  const removeFromBurger = (index) => {
    setStack(stack.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {/* 1. As a user, I want to be able to see a list of the ingredients that can be added to my burger on the left side of the screen.*/}
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />

        {/* 2. As a user, I want to be able to see a stack of the ingredients that make up my burger on the right side of the screen.*/}
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
