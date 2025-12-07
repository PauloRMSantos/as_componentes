import "./Header.css"
import { Link } from "react-router-dom";

function Header(props) {
    return (<>
        <div className="w-full h-30 bg-black text-white font-bold flex text-2xl items-center">
            <h1>{props.name}</h1>

            <header className="flex">
                <nav className="flex gap-5 list-none">
                    <li><Link to={"/"}>HOME</Link></li>
                    <li> | </li>
                    <li><Link to={"/products"}>PRODUTOS</Link></li>
                    <li> | </li>
                    <li><Link to={"/contact"}>CONTATO</Link></li>
                </nav>
                <div className="justify-end">
                    <a href="https://youtu.be/cBmkH37USnA"><img src="src/assets/react.svg" alt="" /></a>
                </div>
            </header>
        </div>
    </>
    )
}

export default Header