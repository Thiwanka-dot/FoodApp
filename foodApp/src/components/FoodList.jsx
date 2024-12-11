import FoodItem from "./FoodItem";
import styles from "./fooditem.module.css"

export default function FoodList({foodData, setFoodId}){
    return <div className={styles.foodDivide}>
        {foodData.map((food)=>(
            <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
        ))}
    </div>
}