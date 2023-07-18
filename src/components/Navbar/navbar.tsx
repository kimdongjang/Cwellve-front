// import { FiAlignJustify } from "react-icons/fi";
// import style from './Navbar.module.scss'

import ThemeController from "../ThemeController";


const Navbar = () => {
    return (
        <header className='navbar'>
            <div className='navbarWrap'>
                {/* <FiAlignJustify /> */}
                <ThemeController />
                <nav className='nav'>
                    <ul>
                        <li><a>회사소개</a></li>
                        <li><a>서비스소개</a></li>
                        <li><a>특화서비스</a></li>
                        <li><a>시스템</a></li>
                        <li><a>고객지원</a></li>
                    </ul>
                </nav>
            </div>
        </header>)
};

export default Navbar;