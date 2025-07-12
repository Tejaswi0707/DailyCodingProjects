package com.coffeeshop.menu.repository;
import com.coffeeshop.menu.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
