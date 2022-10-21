import React from 'react';
import styled from 'styled-components';
import {
  StarFilled,
  HeartFilled,
  HeartTwoTone,
  LeftCircleFilled,
  RightCircleFilled
} from '@ant-design/icons';
import { Carousel } from 'antd';

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
    .item-carousel{
        min-height: 10em;
        width: 100%;
        position: relative;
        z-index: 1;
        display: flex;
        justify-items: center;
        align-items: center;
        overflow: hidden;
        .arrows{
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: space-between;
            z-index: 10;
            padding: .25em;
            color: var(--white);
            cursor: pointer;
            font-size: 2em;
            height: 10em;
            align-items: center;
            .arrow-left, .arrow-right{
                transition: all .25s;
                position: relative;
                opacity: 0;
            }
            .arrow-left{
                left: -4em;
            }
            .arrow-right{
                right: -4em;
            }
            &:hover{
                .arrow-left, .arrow-right{
                    opacity: 1;
                }
                .arrow-left{
                    left: 0;
                }
                .arrow-right{
                    right: 0;
                }
            }
        }
        .carousel-container{
            flex: 0 0 auto;
            width: 100%;
        }
    }
`;

const Item = (props) => {

    const handleLiked = () => {
    }

    const eventHandler = React.useRef(null);

    const next = (e) => {
        eventHandler.current.next();
    }
    const previous = () => {
        eventHandler.current.prev();
    }

    return (
        <ItemWrapper>
            <picture className='img'>
                {/* <img src={'https://placeimg.com/500/700/any'} alt=''/>
                <div className='heart' onClick={handleLiked}>
                    {!props.liked?<HeartTwoTone />:<HeartFilled />}
                </div> */}
                <div className='item-carousel'>
                    <div className='arrows'>
                        <span className='arrow-left'><LeftCircleFilled onClick={previous}/></span>
                        <span className='arrow-right'><RightCircleFilled onClick={next}/></span>
                    </div>
                    <div className='carousel-container'>
                        <Carousel ref={eventHandler}>
                            <div>
                                <img src={'https://placeimg.com/501/700/any'} alt=''/>
                            </div>
                            <div>
                                <img src={'https://placeimg.com/500/701/any'} alt=''/>
                            </div>
                            <div>
                                <img src={'https://placeimg.com/501/700/any'} alt=''/>
                            </div>
                            <div>
                                <img src={'https://placeimg.com/501/701/any'} alt=''/>
                            </div>
                        </Carousel>
                    </div>
                </div>
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