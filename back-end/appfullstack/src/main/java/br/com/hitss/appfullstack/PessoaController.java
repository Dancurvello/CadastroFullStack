package br.com.hitss.appfullstack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PessoaController {
    private final PessoaRepository pessoaRepository;

    @Autowired
    public PessoaController(PessoaRepository pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }

    @PostMapping("/salvarPessoa")
    public Pessoa salvarPessoa(@RequestBody Pessoa pessoa) {
        System.out.println("chegou aqui");
        return pessoaRepository.save(pessoa);
    }
}
