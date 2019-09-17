import apisauce from "apisauce";

let instance = null;

const create = (baseURL = "http:/localhost:3000/") => {
    if(instance !== null){
        return instance;
    }
    const api = apisauce.create({
        baseURL,
        header: {
            "Cache-Conotrol": "no-cache",
            Accept: "application/json; version=0",
            "Content-Type": "application/json"
        },
        timeout: 15000
    });

    api.getCategories = () => {
        return api.get("/categories");
    };

    api.getRecipes = filter => {
        return api.get("/recipes", {
            categoryId: filter,
            _expand: "category"
        });
    };

    api.favorites = () => {
        return api.get("favorites", {
            favorite: 1,
            _expand: "category"
        });
    };

    api.getRecomended = () => {
        return api.get("recomended", {
            recomended: 1,
            _expand: "category"
        });
    }



    instance = api;
    return instance;

}

export default {create};