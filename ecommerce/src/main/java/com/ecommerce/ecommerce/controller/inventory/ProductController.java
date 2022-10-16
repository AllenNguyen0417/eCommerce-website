package com.ecommerce.ecommerce.controller.inventory;


import com.ecommerce.ecommerce.model.inventory.Product;
import com.ecommerce.ecommerce.service.inventory.ProductService;
import com.ecommerce.ecommerce.status.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/inventory")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        if (products.size() > 0) {
            return ResponseEntity.status(HttpStatus.OK).body(products);
        }
        else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
    }

    @PostMapping("/createproduct")
    public ResponseEntity<String> createProduct(@RequestBody Product product) {
        Status stt = productService.createProduct(product);

        if (stt == Status.SUCCESS) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Product Create Successfully!");
        }
        else if (stt == Status.PRODUCT_ALREADY_EXISTS) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product with the upc = " + product.getUpc() + " already exists!");
        }
        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

}
