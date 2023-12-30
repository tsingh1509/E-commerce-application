import "./home.scss"

import TopFive from "../../components/topFive/TopFive"
import Slider from "../../components/slider/Slider";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import Footer from "../../components/footer/Footer";
import Category from "../../components/category/Category";
import ProductsList from "../../components/productsList/ProductsList";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/slices/productsSlice";
const Home = () => {

    const products = useFetch('https://fakestoreapi.com/products');
    const data = products.data;

    const dispatch = useDispatch();
    dispatch(setProducts(data));
    
    return(
        <div>
            <div className="fixed"> <Navbar /></div>
            <div className="cat"><Category/></div>
            
            <Slider/>
            <TopFive/>
            <Filter/>
            <ProductsList/>
            <Footer/>
        </div>
    )
}

export default Home;