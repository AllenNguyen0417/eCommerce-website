package com.ecommerce.ecommerce.repository.inventory;

import com.ecommerce.ecommerce.model.inventory.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
//    public Optional<Product> findByUpc(String upc);
    public Product findByUpc(String brand);

}

