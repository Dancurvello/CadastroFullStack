package br.com.hitss.appfullstack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "br.com.hitss.appfullstack")
public class AppFullStackApplication {
	public static void main(String[] args) {
		SpringApplication.run(AppFullStackApplication.class, args);
	}
}
