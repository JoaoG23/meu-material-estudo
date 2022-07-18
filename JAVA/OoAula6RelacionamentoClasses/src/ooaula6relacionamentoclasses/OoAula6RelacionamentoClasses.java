package ooaula6relacionamentoclasses;
public class OoAula6RelacionamentoClasses {
    public static void main(String[] args) {
        Lutador l[] = new Lutador[6];
        l[0] = new Lutador("Pretty Boy", "França", 31, 1.75f, 68.9f, 11, 2,1);
        l[1] = new Lutador("PutScript", "Brasil", 31, 1.68f, 80.9f, 12, 1,1);
   
       // l[0].ganharLuta();
        l[0].perderLuta();
        l[0].perderLuta();
        l[0].apresentar();
        l[1].apresentar();
    }
    
}
