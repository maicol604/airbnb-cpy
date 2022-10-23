import React from 'react';
import { Col, Row, Divider, Carousel, Select } from 'antd';

import Item from '../../Components/Item';
import Button from '../../Components/Button';
import SearchWidget from '../../Containers/SearchWidget';
import Filters from '../../Containers/Filters';
import styled from 'styled-components';
import { SearchOutlined, ControlOutlined } from '@ant-design/icons'

const items = [0,0,0,0,0,0]

const HomeWrapper = styled.div`
    .content{
        padding: 1em 8em;
    }
    .carousel-wrapper{
        margin: 1em;
        overflow: hidden;
        border-radius: 1em;
        height: 65vh;
        .carousel-item{
            width: 100%;
            min-height: 65vh;
            overflow: hidden;
            position: relative;
            display: flex !important;
            justify-content: center;
            align-items: center;
            .carousel-content{
                position: relative;
                background-color: transparent;
                z-index: 1;
                width: 100%;
                padding: 1em 10%;
                .carousel-item-title{
                    font-size: 2.5em;
                    font-weight: 600;
                    color: var(--white);
                    width: 50%;
                    & .underline{
                        text-decoration: underline var(--primary) 5px;
                    }
                }

            }
            img{
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 0;
            }
        }
    }
    
    .search-item-mobile{
        display: none;
    }
    @media (max-width: 768px) {
        .content{
            padding: 1em;
        }
        .carousel-wrapper{
            height: 55vh;
            .carousel-item{
                height: 55vh;
                .carousel-content{
                    padding: 1em;
                    .carousel-item-title{
                        font-size: 1.5em;
                        width: 100%;
                    }
                }
                .search-item{
                    display: none;
                }
                img{
                    width: auto;
                }
            }
        }
        .filters{
            display: none;
        }
    }
    
    .search-item-mobile{
        display: block;
    }
    
    .labels{
        padding: 1em;
        .label{
            padding: .25em 1em;
            border-radius: 5em;
            border: 1px solid var(--secondary);
            &:nth-child(1n){
                margin-right: 1em;
            }
        }
    }
`;

const SearchMobileWrapper = styled.div`
    padding: 1em;
    width: calc(100% - 2em);
    box-sizing: border-box;
    background-color: var(--white);
    border-radius: 5em;
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--secondary);
    //margin: 0 1em;
    box-sizing: border-box;
    .control{
        width: 2.5em;
        height: 2.5em;
        border: 1px solid var(--secondary);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(90deg);
    }
    .search-icon{
        margin-left: .5em;
    }
    .text{
        font-size: .75em;
        display: flex;
        flex-direction: column;
        .main{
            font-size: 700;
            color: var(--bold-color);
        }
        .secondary{
            font-size: .75em;
            color: var(--secondary);
        }
    }
`;

const SearchMobile = () => {
    return (
        <>
            <SearchMobileWrapper>
                <div className='search-icon'>
                    <SearchOutlined />
                </div>
                <div className='text'>
                    <span className='main'>Lorem ipsum dolor sit amet</span>
                    <span className='secondary'>Lorem ipsum dolor sit amet</span>
                </div>
                <div className='control'>
                    <ControlOutlined />
                </div>
            </SearchMobileWrapper>
        </>
    )
}

const Home = () => {

    const handleSearch = (e) => {
        console.log(e)
    }

    return (
        <HomeWrapper>
            <div className='carousel-wrapper'>
                <Carousel autoplay>
                    <div className='carousel-item'>
                        <div className='carousel-content'>
                            <div className='carousel-item-title'>
                                Lorem ipsum dolor sit amet, <span className='underline'>consectetur adipiscing elit.</span>
                            </div>
                            <div className='search-item'>
                                <SearchWidget
                                    onSearch={handleSearch}
                                />
                            </div>
                            <div className='search-item-mobile'>
                                <SearchMobile/>
                            </div>
                        </div>
                        <img src={require('../../Assets/images/carousel (2).jpeg')} alt=''/>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-content'>
                            <div className='carousel-item-title'>
                                Lorem ipsum dolor sit amet, <span className='underline'>consectetur adipiscing elit.</span>
                            </div>
                        </div>
                        <img src={require('../../Assets/images/carousel (1).jpeg')} alt=''/>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-content'>
                            <div className='carousel-item-title'>
                                Lorem ipsum dolor sit amet, <span className='underline'>consectetur adipiscing elit.</span>
                            </div>
                        </div>
                        <img src={require('../../Assets/images/carousel (3).jpeg')} alt=''/>
                    </div>
                </Carousel>
            </div>
            <div className='search-item-mobile'>
                <div className='labels'>
                    <span className='label'>Label</span>
                    <span className='label'>Label</span>
                    <span className='label'>Label</span>
                </div>
            </div>
            <span className='filters'>
                <Filters/>
            </span>
            <Divider style={{marginTop:'1em', marginBottom:'.5em'}}/>
            <div className='content'>
                <div>
                    <span className='h3' style={{marginTop:'0'}}>
                        Disponibles hoy
                    </span>
                </div>
                <div>
                    <Row gutter={[16, 16]}>
                        {
                            items.map((item, i)=>(
                                <Col xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
                                    <Item
                                        score={'Nueva'}
                                        counter={100}
                                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                        price={'Desde 200 €'}
                                        priceBy={'Por persona'}
                                        liked={false}
                                        to={'/item'}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <div>
                    <span className='h3'>
                        Anfitriones muy valorados por sus conocimientos
                    </span>
                </div>
                <div>
                    <Row gutter={[16, 16]}>
                        {
                            items.map((item, i)=>(
                                <Col xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
                                    <Item
                                        score={'Nueva'}
                                        counter={100}
                                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                        price={'Desde 200 €'}
                                        priceBy={'Por persona'}
                                        liked={false}
                                        to={'/item'}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <div>
                    <span className='h3'>
                        Todas las experiencias
                    </span>
                </div>
                <div>
                    <Row gutter={[16, 16]}>
                        {
                            [0,0,0,0,0,0,0,0,0,0,0,0].map((item, i)=>(
                                <Col xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
                                    <Item
                                        score={'Nueva'}
                                        counter={100}
                                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                        price={'Desde 200 €'}
                                        priceBy={'Por persona'}
                                        liked={false}
                                        to={'/item'}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <div style={{width:'100%', display:'flex', justifyContent:'center', margin:'4em 0'}}>
                    <Button secondary>
                        Cargar mas
                    </Button>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home;