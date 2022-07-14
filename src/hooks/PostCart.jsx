import axios from "axios";


const PostCart = (data) => {

    try {
        const sendCart = async () =>{
            const result = await axios.post('https://front-test-api.herokuapp.com/api/cart', data)
           // console.log(result.data)
        }
       sendCart()
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
  return 
}

export default PostCart
