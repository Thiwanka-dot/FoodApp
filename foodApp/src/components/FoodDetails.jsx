import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({foodId}){
    const [food,setFood]= useState({})
    const [isLoading,setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "986d98fdc9764ff4b8838a483ea15650";
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFood(data);
            setIsLoading(false)
        }
        fetchFood()
    },[foodId])
    return (
        <div className={styles.recipeData}>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImg} src={food.image} alt="" />
            </div>
            <div className={styles.recipeDetails}>
                <span>
                    <strong>⏲ {food.readyInMinutes} mins</strong>
                </span>
                <span>
                    <strong>👪 Serves {food.servings}</strong>
                </span>
                <span>
                    <strong>🥩 {food.vegetarian ? "Vegetarian" : "Non-vegetarian"}</strong>
                </span>
                <span>
                    <strong>{food.vegan ? "🌱 Vegan" : ""}</strong>
                </span>
            </div>
            <div>
                <span>
                    <strong>💲 {(food.pricePerServing / 100).toFixed(2)} Per serving</strong>
                </span>
            </div>
            <h2>Ingredients</h2>
            <ItemList food={food} isLoading={isLoading}/>
            <h2>Instructions</h2>
            <div className={styles.recipeInstructions}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : food.analyzedInstructions && food.analyzedInstructions.length > 0 ? (
                    <ol>
                        {food.analyzedInstructions[0].steps.map((step, index) => (
                            <li key={index}>{step.step}</li>
                        ))}
                    </ol>
                ) : (
                    <p>No instructions available.</p>
                )}
            </div>
        </div>
    );
    
}