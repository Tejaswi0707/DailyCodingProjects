package com.coffeeshop.menu.service;
import com.coffeeshop.menu.model.Product;
import com.coffeeshop.menu.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;
    @Override
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    @Override
    public void addProduct(Product product){
        productRepository.save(product);
    }
    @Override
    public Product getProductById(Long id){
        Optional<Product> optional=productRepository.findById(id);
        Product product=null;
        if(optional.isPresent()){
            product=optional.get();
        }
        else{
            throw new RuntimeException("Product not found for id: "+id);
        }
        return product;
    }
    @Override
    public void deleteProductById(Long id){
        productRepository.deleteById(id);
    }
}
