package com.swe7.aym.controller;

import com.swe7.aym.category.CategoryService;
import com.swe7.aym.category.dto.CategoryDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class CategoryController {

    private final CategoryService categoryService;
    @GetMapping("/api/cate")
    public List<CategoryDto> findAll(){
        return categoryService.findAll();
    }
}
