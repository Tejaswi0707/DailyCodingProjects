package com.coffeeshop.menu.service;
import java.util.List;
import com.coffeeshop.menu.model.Product;

public interface ProductService {
    List<Product> getAllProducts();
    void addProduct(Product product);
    Product getProductById(Long id); //to fetch a Product from the database by its ID(eg. product with ID=3)
    void deleteProductById(Long id);
}
