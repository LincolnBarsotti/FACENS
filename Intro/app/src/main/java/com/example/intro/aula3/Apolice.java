package com.example.intro.aula3;

public class Apolice {
    private Integer numero, idade;
    private String nome;
    private char sexo;
    private Double valorAutomovel;

    public Apolice(){

    }

    public Apolice(Integer numero, String nome, Integer idade, char sexo, Double valorAutomovel){
        this.idade = idade;
        this.numero = numero;
        this.nome = nome;
        this.sexo = sexo;
        this.valorAutomovel = valorAutomovel;
    }


    public Double calcularValor() {
        Double valorCalculado = 0.0;

        if (this.sexo == 'M' && this.idade <= 25) {
            valorCalculado = this.valorAutomovel * 10 / 100;
        } else if (this.sexo == 'M') {
            valorCalculado = this.valorAutomovel * 5 / 100;
        } else if (this.sexo == 'F') {
            valorCalculado = this.valorAutomovel * 2 / 100;
        }

        return valorCalculado;
    }


}
