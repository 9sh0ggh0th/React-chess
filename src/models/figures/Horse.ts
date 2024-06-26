import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/bHorse.png"
import WhiteLogo from "../../assets/wHorse.png"

export class Horse extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
        this.name = FigureNames.HORSE
    }

    canMove(target: Cell): boolean{
        if(!super.canMove(target)) return false
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}