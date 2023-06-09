import { useEffect, useState } from "react";
import { db } from "./database";
import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
import './styles.css';

const getProducts = async () => {
  const productsCollection = collection(db, "products");
  const productsCollectionWithQuery = query(
    productsCollection,
    where("category", "==", "Electronics")
  );
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
    console.log("Add to cart:", product);
    setCartItems([...cartItems, product]);
  };

  const onNameChangeHandler = (evt) => {
    setClientName(evt.target.value);
  };

  const onBuyHandler = () => {
    console.log("Buy", clientName, cartItems);

    // Crear un objeto order, que contenga el nombre del cliente y los items del carrito
    const order = {
      clientName,
      items: cartItems,
      date: new Date(),
    };
    console.log("Order", order);

    // Le decimos a Firestore que vamos a usar la colección "orders"
    const orderCollection = collection(db, "orders");
    console.log("orderCollection", orderCollection);

    // usando addDoc agregamos la order a la colección "orders"
    // addDoc es una promise, usando .then podemos obtener el id de la nueva order
    addDoc(orderCollection, order)
      .then((newOrder) => {
        console.log("DEBERÍA ESTAR EN FIRESTORE!!");
        console.log(newOrder);
        setClientName("");
        setCartItems([]);
      })
      .catch(() => {
        console.log("ALGO SALIO MAL :-(");
      });
  };

  return (
    <div>
      <h1>Products List</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div key={product.id} className="product">
              <h2>{product.title}</h2>
              <img src={product.image} width={100} />
              <button key={product.id} onClick={() => addItem(product.id)}>
                Add to cart
              </button>
              <br />
            </div>
          );
        })}
      </div>
      <hr />
      <label>Client Name: </label>
      <input
        type="text"
        placeholder="Client name"
        value={clientName}
        onChange={onNameChangeHandler}
      />
      <button onClick={onBuyHandler}>BUY</button>
    </div>
  );
};

export default ProductsList;
