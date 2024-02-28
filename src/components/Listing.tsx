import { Product } from "../App";

interface Props {
    product: Product;
}

const Listing = ({product}: Props) => {
    return (
        <div>{product.title}</div>
     );
}
 
export default Listing;