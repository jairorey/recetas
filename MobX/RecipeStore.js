import { observable, computed } from "mobx";
import API from "../Services/Api";
const api = API.create();

const categoriesData = [
    {
      "id": "1",
      "name":"Fish"
    },
    {
      "id": "2",
      "name":"Meat"
    },
    {
      "id": "3",
      "name":"Breakfast"
    },
    {
      "id": "4",
      "name":"Fruit"
    },
    {
      "id": "5",
      "name":"Vegan"
    }
  ];


  const dataList = [
    {
      "id": "52944",
      "name":"Escovitch Fish",
      "categoryId":"1",
      "categoryName":"Fish",
      "duration": "11",
      "complexity": "Hard",
      "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "people": "3",
      "ingredients": "5 whole small/medium sized Snappers. \r\n Grount. \r\n Parrot or Goat Fish cleaned. \r\n 1 1/2 tsp. (7 ml) Salt \r\n 1 1/2 tsp. (7 ml) Pepper \r\n 3 Garlic \r\n Cooking Oil \r\n White Vinegar \r\n 2 Onions \r\n 2 Scotch Bonnet Pepper \r\n 10 pimentos",
      "description": "Wash fish in vinegar and water. Dry fish in paper towel and place on a plate. Cut a small deep gashes on each side of the fish. Rub salt and pepper on outside and in the cavities you made and on the outside. then put the fish on a plate or in a shallow bowl. Place oil in a frying pan/sauce pan. Enough to fry one side of the fish. Please note that this is not a deep fry therefore the fish should NOT be completely submerged in the oil. Place 2 cloves of Garlic in the pot and heat on high. Put cinnamon stick in a pot of boiling water to alleviate the smell of the frying fish. Remove garlic cloves from pot. Carefully place fish on its side in to the hot oil. (as many as the frying pan hold). Fry crisp and turn down the heat as necessary. Turn other side and fry crisp. Place fried fish on a plate with dry paper towels. Slice onions, scotch bonnet pepper, Place onions, scotch bonnet pepper, and pimento in a small pot with vinegar. Boil contents on stove for approx. 5 min. (Be careful of your eyes burning if contents are overheated), Pour contents on the fried fish for a hot and spicy flavor"
    },
    {
      "id": "1",
      "categoryName":"Otro",
      "name":"Escovitch Fish",
      "categoryId":"2",
      "duration": "11",
      "complexity": "Hard",
      "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "people": "3"
    },
    {
      "id": "2",
      "categoryName":"Fish",
      "name":"Escovitch Fish",
      "categoryId":"2",
      "duration": "11",
      "complexity": "Hard",
      "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "people": "3"
    },
    {
      "id": "3",
      "categoryName":"Fish",
      "name":"Escovitch Fish",
      "categoryId":"3",
      "duration": "11",
      "complexity": "Hard",
      "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "people": "3"
    },
    {
      "id": "4",
      "categoryName":"Fish",
      "name":"Escovitch Fish",
      "categoryId":"4",
      "duration": "11",
      "complexity": "Hard",
      "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "people": "3"
    }
  ];

class RecipeStore {
    @observable categories = [];
    @observable recipes = [];
    @observable favorites = [];
    @observable recomended = [];
    @observable loading = false;

    @computed
    get categoriesSource() {
        return this.categories.slice();
    }

    @computed
    get recipesSource() {
        return this.recipes.slice();
    }

    @computed
    get favoritesSource() {
        return this.favorites.slice();
    }

    @computed
    get recomendedSource() {
        return this.recomended.slice();
    }

    async getCategories() {
        this.loading = true;

        const response = await api.getCategories();

        this.loading = false;
        if (response.ok && response.data) {
          this.categories = response.data;
        } else {
          this.categories = [];
        }
    }

    getRecipes(categoryId = null) {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;

            if(categoryId) {
                this.recipes = dataList.filter(
                    item => {
                        return item.categoryId == categoryId;
                    }
                );
            } else {
                this.recipes = dataList;
            }
        },1000);
    }
    getFavorites() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.favorites = dataList;
        },1000);
    }
    getRecomended() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.recomended = dataList;
        },1000);
    }
}

export default RecipeStore;