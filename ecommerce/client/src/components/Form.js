import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="upc">UPC</label>
        <input className="form-control" id="upc" />
      </div>
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <input className="form-control" id="brand" />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input className="form-control" id="category" />
      </div>
      <div className="form-group">
        <label htmlFor="productDescription">Product Description</label>
        <input className="form-control" id="description" />
      </div>
      <div className="form-group">
        <label htmlFor="pricePerUnit">Price Per Unit</label>
        <input className="form-control" id="price" />
      </div>
      <div className="form-group">
        <label htmlFor="availableStock">Available Stock</label>
        <input className="form-control" id="availableStock" />
      </div>
      <div className="form-group">
        <label htmlFor="reservedStock">Reserved Stock</label>
        <input className="form-control" id="reservedStock" />
      </div>
      <div className="form-group">
        <label htmlFor="shippedStock">Shipped Stock</label>
        <input className="form-control" id="shippedStock" />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Image URL</label>
        <input className="form-control" id="imageUrl" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
export default Form;
