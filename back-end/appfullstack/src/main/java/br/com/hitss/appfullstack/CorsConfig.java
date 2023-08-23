package br.com.hitss.appfullstack;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.addAllowedOrigin("*"); // Permite todas as origens, você pode ajustar isso para origens específicas
        corsConfig.addAllowedMethod("*"); // Permite todos os métodos HTTP
        corsConfig.addAllowedHeader("*"); // Permite todos os cabeçalhos

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);

        return new CorsFilter(source);
    }
}
