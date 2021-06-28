import styles from '@/styles/Footer.module.scss';
import { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {


    return (
        <div className={styles.footer}>
            <p >Tradeview</p>
            <p className="text-muted">Select market data provided by ICE Data Services
            © 2021 TradingView</p>
        </div >
    );
}

export default Header;