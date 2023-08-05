import { Copywrite } from "./Copywrite";
import { RedesSociais } from "./Redes-sociais";

export function Footer(){
    return (
        <footer className="footer">
            <Copywrite/>
            <RedesSociais/>
        </footer>
    )
}