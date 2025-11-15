import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);
  const product = products.find((product) => product.id === +id);

  console.log(product);
  if (!product) {

    return <button onClick={() => navigate('/products')}>Go to products page</button>;
  }

  return (
    <div>
      <h1>Product Detail Page</h1>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt="Product image" />
    </div>
  );
}

export default ProductDetail;
