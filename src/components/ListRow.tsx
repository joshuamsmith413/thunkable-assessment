import React, { ReactNode } from 'react';
import FormIcon from 'src/assets/FormIcon.svg';
import 'src/styles/ListRow.scss'

type TProps = {
    child: ReactNode;
}

export default function ListRow({ child }: TProps) {

    return (
        <div className="list-row">
            <img src={FormIcon} alt="beaver icon" className="beaver-icon"/>
            {child}
        </div>
    )
}