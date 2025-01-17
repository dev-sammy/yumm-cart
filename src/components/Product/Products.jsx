import { useEffect } from "react";
import Product from "./Product";
import { useHttp } from "../../hooks/useHttp";
import { API_URL } from "../../constants/apiUrl";

const Products = () => {
    const {data, error, loading, fetchData} = useHttp();

    useEffect(() => {
        fetchData(API_URL.meals, {method: 'GET'});
    }, []);

    if(loading){
      return <p id="meals">Loading...</p>
    }

    if(error){
      return <p id="meals">{error}</p>
    }

    return <ul id="meals">{data && data.map(meal => <Product key={meal.id} {...meal}/>)}</ul>
}

export default Products;