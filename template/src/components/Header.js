import logo from "../img/logo.png"

export function Header(){
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" />
            <h1>Header</h1>
        </header>
    )
}