package com.swe7.aym.jpa.category.dto;

import com.swe7.aym.jpa.category.Category;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CategorySaveDto {
    private String context;

    @Builder
    public CategorySaveDto(String context){
        this.context = context;
    }

    public Category toEntity(){
        return Category.builder()
                .context(context)
                .build();
    }
}
