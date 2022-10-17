import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Container from "./Container";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

export function Inventory() {
  const triggerText = "Create Product";

  const onSubmit = async (event) => {
    const productData = new FormData();
    productData.append("upc", event.target.upc.value);
    productData.append("productName", event.target.name.value);
    productData.append("brand", event.target.brand.value);
    productData.append("category", event.target.category.value);
    productData.append("productDescription", event.target.description.value);
    productData.append("pricePerUnit", event.target.price.value);
    productData.append("imageUrl", event.target.imageUrl.value);
    productData.append("availableStock", event.target.availableStock.value);
    productData.append("reservedStock", event.target.reservedStock.value);
    productData.append("shippedStock", event.target.shippedStock.value);
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/api/inventory/createproduct",
        data: productData,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const OnClickDelete = (event) => {
    console.log("hello");
    // const upcDelete = new FormData();
    // try {
    //   // make axios post request
    //   const response = await axios({
    //     method: "post",
    //     url: "http://localhost:8080/api/inventory/createproduct",
    //     data: productData,
    //     headers: { "Content-Type": "application/json" },
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const url = "http://localhost:8080/api/inventory/products";
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/inventory/products")
      .then((response) => {
        setProduct(response.data);
      });
  }, [url]);

  if (product) {
    return (
      <div>
        <h1>Inventory</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Product Description</th>
              <th scope="col">Price Per Unit</th>
              <th scope="col">Available Stock</th>
              <th scope="col">Reserved Stock</th>
              <th scope="col">Shipped Stock</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr>
                <td>{item.productName}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.productDescription}</td>
                <td>{item.pricePerUnit}</td>
                <td>{item.availableStock}</td>
                <td>{item.reservedStock}</td>
                <td>{item.shippedStock}</td>
                <td>
                  <img src={item.imageUrl} height={100} width={100} />
                </td>
                <td>
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="large">
                    <Fab size="small" color="secondary" aria-label="add">
                      <EditIcon />
                    </Fab>
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Container triggerText={triggerText} onSubmit={onSubmit} />
      </div>
    );
  }
}
