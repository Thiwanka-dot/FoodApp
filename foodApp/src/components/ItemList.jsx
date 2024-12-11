import Item from "./Item";

export default function ItemList({ food, isLoading }) {
    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : food.extendedIngredients ? (
                food.extendedIngredients.map((item, index) => (
                    <Item item={item} index={index}/>
                ))
            ) : (
                <p>No ingredients available.</p>
            )}
        </div>
    );
}
