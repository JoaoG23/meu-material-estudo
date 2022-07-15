/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulatiposprimitivos;

import java.util.Scanner;

/**
 *
 * @author Joao Dev
 */
public class AulaTiposPrimitivos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        
        // Entrada de dados
        Scanner teclado = new Scanner(System.in);
        
        System.out.println("Digite o nome do aluno");
        String nome = teclado.nextLine();
        System.out.println("Digite agora sua nota:");
        float nota = teclado.nextFloat();
 
        
        //1ª Forma de se fazer 
//        System.out.println("A nota é : " + nota); 
        //2ª Forma de se fazer - %.2 casa decimais
        System.out.format("A nota de %s é %.2f \n",nome, nota);
        //3ª format
        System.out.printf("A nota de %s é %.2f \n",nome, nota);
        
    }
    
}
