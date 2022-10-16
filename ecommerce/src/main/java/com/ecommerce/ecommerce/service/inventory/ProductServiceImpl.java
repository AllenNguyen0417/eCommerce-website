package com.ecommerce.ecommerce.service.inventory;

import com.ecommerce.ecommerce.model.inventory.Product;
import com.ecommerce.ecommerce.repository.inventory.ProductRepository;
import com.ecommerce.ecommerce.status.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products;
    }

    @Override
    public Status createProduct(Product newProduct) {
        List<Product> products = productRepository.findAll();
        String newUpc = newProduct.getUpc();
        for(Product product: products) {
            if (newUpc.equals(product.getUpc())) {
                return Status.PRODUCT_ALREADY_EXISTS;
            }
        }
        productRepository.save(newProduct);
        return Status.SUCCESS;
    }

    @Override
    public Status updateProduct(Product product) {
        return null;
    }

    @Override
    public Status deleteProduct(Product product) {
        return null;
    }
}
