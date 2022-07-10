import "./item.scss"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link} from "react-router-dom";

const Item = (props) =>{
       return(
        <Card className="item-container">
            <CardMedia
            component="img"
            alt={props.info.name}
            height="auto"
            image={props.info.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.info.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.info.model}
                </Typography>
            </CardContent>
            <CardActions>
            <Link to={props.info.id}>
                <Button size="small">Learn More</Button>
            </Link>
            </CardActions>
        </Card>
     
        )
}

export default Item;