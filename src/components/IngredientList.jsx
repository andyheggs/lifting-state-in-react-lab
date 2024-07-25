import '../App.css'
import Ingredient from './Ingredient';

//  1. As a user, I want to be able to see a list of the ingredients that can be added to my burger on the left side of the screen.

const IngredientList = ({ ingredients, addToBurger }) => {

    return (

    <ul>

        {ingredients.map((ingredient, index) => (

        <Ingredient 

            key={index} 

            ingredient={ingredient} 

            handleClick={() => addToBurger(ingredient)} 

           /* 3 (a) As a user, I want to click a ‘+’ button on an ingredient to add it to my burger stack.  */

            actionLabel="+" 

        />
        ))}
        
    </ul>
    );
};

export default IngredientList;