import Ingredients from "./ingredients";
import Product from "./products";

const initialIngredients = [
    {
        name: "Sausage",
        group: "Meat",
        unit: "kg",
        price: 2.5,
        critical: 10
    },
    {
        name: "Mayonnaise",
        group: "Creamy condiment",
        unit: "gr",
        price: 3,
        critical: 5
    },
    {
        name: "Tomatoes",
        group: "Vegetable",
        unit: "gr",
        price: 10,
        critical: 6
    },
    
];

const initialProducts = [
    {
        name: "Supreme Pizza",
        category: "Dough",
        ingredients: [], 
        price: 20
    },
    {
        name: "Margherita Pizza",
        category: "Dough",
        ingredients: [],
        price: 5
    },
    
];

export const seed = async function () {
    try {
        
        await Ingredients.deleteMany({});
        await Product.deleteMany({});
        
        const createdIngredients = await Ingredients.insertMany(initialIngredients);

        initialProducts.forEach(async (product) => {
            const productIngredients = createdIngredients.map(ingredient => ingredient._id);
            product.ingredients = productIngredients;
            await Product.create(product);
        });

        console.log('Seeding completed successfully!');
    } catch (error) {
        console.error('Error while seeding:', error);
    }
}