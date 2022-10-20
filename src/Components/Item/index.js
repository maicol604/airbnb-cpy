import React from 'react';
import styled from 'styled-components';
import {
  StarFilled,
  HeartFilled,
  HeartTwoTone
} from '@ant-design/icons';

const ItemWrapper = styled.div`
    font-size: 1em;
    font-weight: 500;
    color: #222;
    position: relative;
    transition: all .25s;
    .img{
        border-radius: .5em;
        overflow: hidden;
        display: flex;
        position: relative;
        img{
            width: 100%;
        }
        .heart{
            position: absolute;
            top: 1em;
            right: 1em;
            color: #fff;
            font-size: 1.5em;
            cursor: pointer;
            svg{
                path:first-child{
                    fill: #fff;
                }
                path:last-child{
                    fill: rgba(0,0,0,.5);
                }
            }
        }
    }
    .item-score{
        margin-top: .5em;
        span{
            margin-left: .5em;
        }
    }
    .item-text{
        margin-bottom: .5em;
    }
    .price{
        font-weight: bold;
    }
    .secondary-text-color{
        color: #5a5a5a;
    }
    &:hover{
        transform: translateY(-.25em);
    }
`;

const Item = (props) => {

    const handleLiked = () => {
    }

    return (
        <ItemWrapper>
            <picture className='img'>
                <img src={'https://placeimg.com/500/700/any'} alt=''/>
                <div className='heart' onClick={handleLiked}>
                    {!props.liked?<HeartTwoTone />:<HeartFilled />}
                </div>
            </picture>
            <div className='item-score item-text'>
                <StarFilled style={{margin: '0'}}/>
                <span>{props.score}</span>
                <span className='secondary-text-color'>({props.counter})</span>
            </div>
            <div className='item-text'>
                {props.title}
            </div>
            <div className='item-text'>
                <span className='price'>{props.price}</span> <span className='secondary-text-color'>{props.priceBy}</span>
            </div>
        </ItemWrapper>
    )
}

export default Item;