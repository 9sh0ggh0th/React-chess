import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/bBishop.png"
import WhiteLogo from "../../assets/wBishop.png"

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell): boolean{
        if(!super.canMove(target)) return false
        if(this.cell.isEmptyDiagonal(target)) return true
        return false
    }
}