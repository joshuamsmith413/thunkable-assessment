import React, { useState, Dispatch, SetStateAction, MouseEvent } from 'react';

import 'src/styles/Header.scss';
import Beaver from 'src/assets/FacebookBeaver.svg';
import ThunkableBeaver from 'src/assets/ThunkableBeaver.png';
import PlusSign from 'src/assets/PlusSign.svg';
import PlusSignHover from 'src/assets/PlusSignHover.svg';

type TProps = {
    formShow: boolean;
    setFormAndBackground: () => void;
}

export default function Header({ formShow, setFormAndBackground }: TProps) {
    const [hover, setHover] = useState<boolean>(false);

    const mouseOver = (e: MouseEvent<HTMLImageElement>) => {
        setHover(true);
        e.currentTarget.src = PlusSignHover;
    }

    const mouseOut = (e: MouseEvent<HTMLImageElement>) => {
        if (!formShow) {
            setHover(false);
        }
        e.currentTarget.src = PlusSign;
    }

    const handleClick = () => {
        setFormAndBackground();
    }

    return (
        <div className={`header ${!hover && 'no-hover'}`}>
            <div className="left">
                <img
                    src={hover ? ThunkableBeaver : Beaver}
                    alt="beaver" 
                    className="beaver"
                />
                <div className='projects-title'>MY PROJECTS</div>
            </div>
            <img
                src={PlusSign}
                alt="plus sign"
                className="plus"
                onMouseOver={e => mouseOver(e)}
                onMouseOut={e => mouseOut(e)}
                onClick={handleClick}
            />
        </div>
    )
}