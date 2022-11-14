package com.swe7.aym.category.dto;

import com.swe7.aym.category.Category;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class CategoryDto {
    private Long id;
    private String context;

    public CategoryDto(Category category) {
        this.context = category.getContext();
    }
}
