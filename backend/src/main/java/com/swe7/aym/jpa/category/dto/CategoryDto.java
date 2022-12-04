package com.swe7.aym.jpa.category.dto;

import com.swe7.aym.jpa.category.Category;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class CategoryDto {
    private Long id;
    private String context;

    public CategoryDto(Category category) {
        this.id = category.getCategoryId();
        this.context = category.getContext();
    }
}
