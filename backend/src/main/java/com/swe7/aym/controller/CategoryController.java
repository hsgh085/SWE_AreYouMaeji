package com.swe7.aym.controller;

import com.swe7.aym.category.CategoryService;
import com.swe7.aym.category.dto.CategoryDto;
import com.swe7.aym.category.dto.CategorySaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/cate/*")
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
