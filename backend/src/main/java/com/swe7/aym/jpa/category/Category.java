package com.swe7.aym.jpa.category;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(length = 100)
    @NotNull
    private String context;

    @Builder
    public Category(Long categoryId, String context){
        this.categoryId = categoryId;
        this.context = context;
    }
}
