import styles from '@/styles/Header.module.scss';
import { useState } from 'react'
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.nav}>
            <Navbar color="light" light expand="md">
                <NavbarBrand className={styles.nav_head} >
                    <Link href="/">
                        <a>
                            TradeView
                        </a>

                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Chart</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Trade</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Markets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Screeners</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Community</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default Header;