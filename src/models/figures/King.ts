import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/bKing.png"
import WhiteLogo from "../../assets/wKing.png"

export class King extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean{
        if(!super.canMove(target)) return false

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        return dx <= 1 && dy <= 1;
    }
}