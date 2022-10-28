import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./Meals.module.css";

const MealList = [
  {
    id: "m1",
    name: "Arabaşı",
    description: "Arapların yemaaağ",
    price: 31,
  },
  {
    id: "m2",
    name: "Kelle Paça",
    description: "Bıçak yenur",
    price: 31.31,
  },
];

const Meals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {MealList.map((meal) => (
            <MealItem
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default Meals;
