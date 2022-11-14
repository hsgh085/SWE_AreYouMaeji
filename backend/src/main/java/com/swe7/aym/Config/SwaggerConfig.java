package com.swe7.aym.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
@EnableWebMvc
public class SwaggerConfig {
    private ApiInfo swaggerInfo() {
        return new ApiInfoBuilder().title("AYM API")
                .description("AYM API documentation").build();
    }

    @Bean
    public Docket swaggerApi() {
        return new Docket(DocumentationType.OAS_30)
                .useDefaultResponseMessages(true)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.swe7.aym.controller"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(swaggerInfo());

    }
}