// import { FiAlignJustify } from "react-icons/fi";
import style from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <header className={style.header}>
            <div className={style.headerWrap}>
                {/* <FiAlignJustify /> */}
                <nav className={style.nav}>
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
