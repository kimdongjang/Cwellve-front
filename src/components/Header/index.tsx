import ThemeController from "../ThemeController";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import Transition from 'react-transition-group/Transition';

import classnames from 'classnames';


const Header = () => {
    const [isShow, setIsShow] = useState<boolean>();
    return (
        <header className='headerWrap'>
            <p className="title">
                {'Cwellve'}
            </p>
            <div className="menuWrap">
                <div className='icon' >
                    <MenuIcon onClick={() => setIsShow(true)} />
                </div>
                <Transition in={isShow} timeout={300}>
                    <div className={classnames('listWrap', isShow ? 'LeftFadeInStart' : 'LeftFadeInEnd')}>
                        <div className="icon">
                            <ArrowForwardIosIcon onClick={() => setIsShow(false)} />
                        </div>
                        <nav className="list" >
                            <ul>
                                <li><a>프로필</a></li>
                                <li><a>고객지원</a></li>
                            </ul>
                        </nav>
                    </div>
                </Transition>
                {isShow && <div className='overlay' />}
            </div>

        </header>)
};

export default Header;