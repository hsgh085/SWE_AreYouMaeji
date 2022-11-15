package com.swe7.aym.category;

import com.swe7.aym.category.dto.CategoryDto;
import com.swe7.aym.category.dto.CategorySaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Long save(CategorySaveDto categorySaveDto){
        return categoryRepository.save(categorySaveDto.toEntity()).getCategoryId();
    }
    public List<CategoryDto> findAll(){
        return categoryRepository.findAll()
                .stream()
                .map(CategoryDto::new)
                .collect(Collectors.toList());
    }

    public Category findByContext(String context){
        return categoryRepository.findByContextContaining(context);
    }

}
