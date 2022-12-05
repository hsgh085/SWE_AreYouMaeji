package com.swe7.aym.jpa.category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    public Category findByCategoryId(Long id);

    Category findByContextContaining(String category);
}
