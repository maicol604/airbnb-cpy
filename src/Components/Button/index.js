import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';


const CustomBtnWrapper = styled(Button)`
    border-radius: 5em;
    padding: 1.5em 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    &.primary{
        background-color: var(--primary);
        border-color: var(--primary);
        color: var(--white);
        &:hover{
            background-color: var(--white);
            color: var(--primary);
            border-color: var(--primary);
        }
    }
    &.secondary{
        background-color: var(--bold-color);
        border-color: var(--bold-color);
        color: var(--white);
        &:hover{
            background-color: var(--white);
            color: var(--bold-color);
            border-color: var(--bold-color);
        }
    }
`;

const CustomBtn = (props) => {
    return (
        <CustomBtnWrapper {...props} className={props.primary?'primary':(props.secondary?'secondary':'')}>
            {props.children}
        </CustomBtnWrapper>
    )
}

export default CustomBtn;