package com.swe7.aym.jpa.controller;

import com.swe7.aym.jpa.category.CategoryService;
import com.swe7.aym.jpa.category.dto.CategoryDto;
import com.swe7.aym.jpa.category.dto.CategorySaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/cate")
public class CategoryController {

    private final CategoryService categoryService;
    @GetMapping("/")
    public List<CategoryDto> findAll(){
        return categoryService.findAll();
    }
    @PostMapping("/")
    public Long save(@RequestBody CategorySaveDto requestDto){
        return categoryService.save(requestDto);
    }
}
