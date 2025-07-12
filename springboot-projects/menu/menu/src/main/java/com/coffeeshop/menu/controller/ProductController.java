package com.coffeeshop.menu.controller;
import com.coffeeshop.menu.model.Product;
import com.coffeeshop.menu.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ProductController{

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public String viewHomePage(Model model){
        model.addAttribute("listProducts", productService.getAllProducts());
        return "menu";
    }

    @GetMapping("/showNewProductForm")
    public String showNewProductForm(Model model){
        model.addAttribute("product", new Product());
        return "add-new-product";
    }


    @PostMapping("/saveProduct")
    public String saveProduct(@ModelAttribute("product") Product product){
        productService.addProduct(product);
        return "redirect:/";
    }

    @GetMapping("/showFormForUpdate/{id}")
    public String showFormForUpdate(@PathVariable Long id, Model model){
        Product product=productService.getProductById(id);
        model.addAttribute("product", product); //This makes the product object accessible in the view (e.g., a Thymeleaf template) with the name "product".
        return "update-product";
    }

    @GetMapping("/deleteProduct/{id}")
    public String deleteProduct(@PathVariable Long id){
        productService.deleteProductById(id);
        return "redirect:/";
    }
}