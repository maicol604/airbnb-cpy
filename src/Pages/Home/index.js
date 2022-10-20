import React from 'react';
import { Col, Row, Divider, Carousel, BackTop } from 'antd';

import Item from '../../Components/Item';
import Button from '../../Components/Button';
import SearchWidget from '../../Containers/SearchWidget';
import New from '../../Containers/New';
import Footer from '../../Containers/Footer';
import styled from 'styled-components';
import {
    UpOutlined
} from '@ant-design/icons';

const items = [0,0,0,0,0,0]

const HomeWrapper = styled.div`
    .content{
        padding: 1em 4em;
    }
    .carousel-wapper{
        margin: 1em;
        overflow: hidden;
        border-radius: 1em;
        height: 80vh;
        .carousel-item{
            width: 100%;
            min-height: 80vh;
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
    .backtop{
        width: 4em;
        height: 4em;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary);
        color: var(--white);
    }
`;

const Home = () => {

    const handleSearch = (e) => {
        console.log(e)
    }

    return (
        <HomeWrapper>
            <div className='carousel-wapper'>
                <Carousel autoplay>
                    <div className='carousel-item'>
                        <div className='carousel-content'>
                            <div className='carousel-item-title'>
                                Lorem ipsum dolor sit amet, <span className='underline'>consectetur adipiscing elit.</span>
                            </div>
                            <div>
                                <SearchWidget
                                    onSearch={handleSearch}
                                />
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
            <Divider />
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
                                <Col span={4} key={i}>
                                    <Item
                                        score={'Nueva'}
                                        counter={100}
                                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                        price={'Desde 200 €'}
                                        priceBy={'Por persona'}
                                        liked={false}
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
                                <Col span={4} key={i}>
                                    <Item
                                        score={'Nueva'}
                                        counter={100}
                                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                        price={'Desde 200 €'}
                                        priceBy={'Por persona'}
                                        liked={false}
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
                                <Col span={6} key={i}>
                                    <Item
                                        score={'Nueva'}
                                        counter={100}
                                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                        price={'Desde 200 €'}
                                        priceBy={'Por persona'}
                                        liked={false}
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
                <New
                    title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    action={'Become a host'}
                    background={require('../../Assets/images/carousel (2).jpeg')}
                />
            </div>
            <Divider />
            <Footer/>
            <BackTop>
                <div className='backtop'>
                    <UpOutlined />
                </div>
            </BackTop>
        </HomeWrapper>
    )
}

export default Home;