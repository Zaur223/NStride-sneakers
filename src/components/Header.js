import NavMenu from "./NavMenu";
import MenuBar from "./MenuBar";
import { useState } from "react";

function Header() {
    const [isHamburgerActive, setIsHamburgerActive] = useState(true);

    const hamburgerHandler = (isActive) => {
        setIsHamburgerActive(isActive);
    }

    return (
        <header>
            <MenuBar isHamburgerActive={isHamburgerActive} />
            <NavMenu onHamburger={hamburgerHandler} />
        </header>
    )
}

export default Header;