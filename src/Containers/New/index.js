import React from 'react';
import styled from 'styled-components';
import Button from '../../Components/Button';

const NewWrapper = styled.div`
    background-color: #000;
    position: relative;
    display: flex;
    overflow: hidden;
    border-radius: 1em;
    height: 50vh;
    margin-top: 2em;
    margin-left: 8em;
    margin-right: 8em;
    padding: 4em;
    img{
        width: 100%;
        opacity: .75;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color: var(--white);
        z-index: 2;
        .title{
            font-size: 2.5em;
            font-weight: 700;
        }
        .description{
            font-weight: 600;
            margin-bottom: 1.5em;
        }
    }
    @media (max-width: 768px) {
        padding: 1em;
        margin-left: 1em;
        margin-right: 1em;
    }
`;

const New = (props) => {
    return (
        <NewWrapper>
            <div className='content'>
                <div className='title'>{props.title}</div>
                <div className='description'>{props.description}</div>
                <Button primary>
                    {props.action}
                </Button>
            </div>
            <img src={props.background} alt=''/>
        </NewWrapper>
    )
}

export default New;