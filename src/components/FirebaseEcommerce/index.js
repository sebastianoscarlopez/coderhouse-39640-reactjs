import { useEffect, useState } from "react";
import { db } from "./database";
import { getDocs, collection } from "firebase/firestore";

const getProducts = async () => {
  const productsCollection = collection(db, "products");
  const productsDocsRef = await getDocs(productsCollection);
  const productDocs = productsDocsRef.docs;
  const products = productDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  console.log(products);
  return products;
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [clientName, setClientName] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const addItem = (id) => {
    const product = products.find((product) => product.id === id);
    console.log('Add to cart:', product);
    setCartItems([...cartItems, product]);
  };

  const onNameChangeHandler = (evt) => {
    setClientName(evt.target.value);
  }

  const onBuyHandler = () => {
    console.log('Buy', clientName, cartItems);
  }

  return (
    <div>
      <h1>Products List</h1>
      {
        products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button key={product.id} onClick={() => addItem(product.id)}>Add to cart</button>
            <br/>
            </div>
          );
        })
      }
      <hr />
      <label>Client Name: </label><input type="text" placeholder="Client name" value={clientName} onChange={onNameChangeHandler} />
      <button onClick={onBuyHandler}>BUY</button>
    </div>
  );
};

export default ProductsList;
