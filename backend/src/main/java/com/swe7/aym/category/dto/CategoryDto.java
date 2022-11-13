package com.swe7.aym.category.dto;

import com.swe7.aym.category.Category;

import javax.persistence.Column;

public class CategoryDto {
    private Long id;
    private String context;

    public CategoryDto(Category category) {
        this.context = category.getContext();
    }
}
