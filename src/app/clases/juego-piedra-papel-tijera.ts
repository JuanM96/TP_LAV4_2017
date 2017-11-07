import { Juego } from '../clases/juego'
export class JuegoPiedraPapelTijera extends Juego{
    valorJugado:number;
    juegoEmpezado:boolean;
    resultado:string;
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Piedra, Papel y Tijera",gano,jugador);
    }
    public Verificar(valorElegido:number){
        let ret:string;
        this.JugarUnValor();
        //1 = piedra
        //2 = papel
        //3 = tijera
        if (this.valorJugado == 1) {
            if (valorElegido == 1) {
                ret = "Empate";
            }
            if (valorElegido == 2) {
                ret = "Perdiste";
            }
            if (valorElegido == 3) {
                ret = "Ganaste";
            }
        }
        if (this.valorJugado == 2) {
            if (valorElegido == 1) {
                ret = "Perdiste";
            }
            if (valorElegido == 2) {
                ret = "Empate";
            }
            if (valorElegido == 3) {
                ret = "Ganaste";
            }
        }
        if (this.valorJugado == 3) {
            if (valorElegido == 1) {
                ret = "Ganaste";
            }
            if (valorElegido == 2) {
                ret = "Perdiste";
            }
            if (valorElegido == 3) {
                ret = "Empate";
            }
        }
        this.resultado = ret;
    }
    public NuevoJuego(){
        this.juegoEmpezado = true;
        this.valorJugado = 0;
    }
    public JugarUnValor(){
        let opcion:number=Math.floor((Math.random() * 3)+1);
        this.valorJugado = opcion;
    }
}
