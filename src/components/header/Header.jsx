import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from "react-router-dom";
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import FetchContext from "../../context/fetchContext";
import { useContext, useEffect } from "react";

import "./header.scss"

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


const Header = () => {
    const { cartProducts, setCartProducts} = useContext(FetchContext);

    useEffect(()=>{
        const saved = localStorage.getItem("cartProducts");
        const initialValue = JSON.parse(saved);
        if(initialValue){
            setCartProducts(initialValue)
        }

        setInterval(() => {
            if(initialValue){
                setCartProducts(initialValue)
            }
        }, 3600000);

    },[])



    return(

    <header>
        <div className="logo-bread-continer">
            <Link to="/">
                <img src="https://srasolutions.com.au/wp-content/uploads/2017/02/Logos-fake-mock-up-illust-ss143531671-2-300x213.png" alt="" className='logo-image'/>
            </Link>
            <Breadcrumbs />
        </div>

        <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartProducts.length} color="warning">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    </header>         


    )
}

export default Header;