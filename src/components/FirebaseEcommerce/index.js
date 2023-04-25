import { useEffect } from "react";
import { db } from "./database";
import { getDocs, collection } from "firebase/firestore";

const getProducts = async () => {
  const productsCollection = collection(db, "products");
  const productsDocsRef = await getDocs(productsCollection);
  const productDocs = productsDocsRef.docs; 
  const products = productDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  })
  console.log(products);
  return products;
};

const ProductsList = () => {

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products List</h1>
    </div>
  );
};

export default ProductsList;
