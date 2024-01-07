import "./navbar.scss"
import { useEffect, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserFilters } from "../../store/slices/userFilterSlice";
import { useSelector } from "react-redux";

const Navbar = () => {

    const [user] = useState(false);
    const [data, setData] = useState(null);
    const [serchFilter, setSearchFilter] = useState(null);
    const proData = useSelector((state) => state.products.data);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Getting data from cart.
    const cartData = useSelector((state) => state.cart.cartData);
    // console.log(data);
    // console.log(serchFilter);

    useEffect(() => {

        setData(proData);
        
    },  [proData]);


    return (
        <div className="navbar">

            <div className="logoContainer">
            <Link to="/home">
                <span className="logo">Shopkart</span>
            </Link>
            
            </div>
            <div className="location-container">

                <Button variant="outlined"><PlaceIcon/>Delhi</Button>
            
            </div>

            <div className="searchBar">

                <SearchIcon className="search-icon"/>
                <input className="product-search" type="text" placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                />
                <Button 
                    className="search-btn" variant="outlined" size="small"
                    onClick={() => {
                        console.log(data);
                        let filtered = data.filter((item) => 
                        item.title.toLowerCase().includes(search.toLowerCase())
                            
                        );
                        //setSearchFilter(filtered);
                       
                        dispatch(setUserFilters(filtered));
                        navigate('/searchandfilter');
                        //console.log(filtered);
                    }}
                >
                search
                </Button>
            </div>

            {user && (
                <div className="loginContainer">

                    <div className="login"><button className="loginBtn">Log in</button></div>
                    <div className="signIn"><button className="signBtn">Sign up</button></div>

                </div>
                )
            }


            {!user &&

                <div className="user">
                <div className="user-profile">
                    <Button variant="contained"><PersonIcon/>Tarun</Button>
                </div>
                 
                 <Link to="/cart">
                 
                    <div className="user-cart">
                        <Button variant="contained"><ShoppingCartIcon/>{cartData.length}</Button>
                    </div>

                </Link>
                
            </div>

            }
            
            

        </div>
    )
}

export default Navbar;