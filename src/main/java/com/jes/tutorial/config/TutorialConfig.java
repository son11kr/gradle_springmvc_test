package com.jes.tutorial.config;

import com.jes.tutorial.IndexController;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by jes on 2016. 12. 1..
 */
@Configuration
public class TutorialConfig {
    @Bean
    public IndexController indexController() {
        return new IndexController();
    }
}
