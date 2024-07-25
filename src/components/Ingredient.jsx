import '../App.css'

const Ingredient = ({ ingredient, handleClick, actionLabel }) => {

    return (

      <li style={{ backgroundColor: ingredient.color }}>

        {ingredient.name}

        <button onClick={handleClick}>{actionLabel}</button>
        
      </li>
    );
  };
  
  export default Ingredient;