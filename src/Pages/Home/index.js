import React from 'react';
import { Col, Row, Divider, Carousel, BackTop, Select } from 'antd';

import Item from '../../Components/Item';
import Button from '../../Components/Button';
import SearchWidget from '../../Containers/SearchWidget';
import New from '../../Containers/New';
import Footer from '../../Containers/Footer';
import styled from 'styled-components';
import {
    UpOutlined,
    FilterOutlined
} from '@ant-design/icons';

const items = [0,0,0,0,0,0]

const HomeWrapper = styled.div`
    .content{
        padding: 1em 4em;
    }
    .carousel-wrapper{
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
    .filters-wrapper{
        display: flex;
        justify-content: space-between;
        padding: 0 2em;
        align-items: center;
        .ant-select-selector{
            color: var(--secondary);
            border-radius: 5em;
            outline: none;
            height: auto;
            width: auto;
            padding: .5em 2em;
            //font-size: .75em;
            .ant-select-selection-item{
                font-weight: 600;
                color: var(--secondary);
            }
        }
        .ant-select-focused .ant-select-selector,
        .ant-select-selector:focus,
        .ant-select-selector:active,
        .ant-select-open .ant-select-selector {
            //border-color: #d9d9d9 !important;
            box-shadow: none !important;
            &:hover, &:focus{
                border-color: var(--secondary) !important;
            }
        }
        .ant-select:not(.ant-select-disabled):hover .ant-select-selector{
            border-color: var(--secondary) !important;
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

const Option = Select;

const LabelWrapper = styled.div`
    font-weight: 600;
    text-transform: capitalize;
    padding: .75em 2em;
    border-radius: 5em;
    border: 1px solid rgba(0,0,0,.25);
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .25s;
    cursor: pointer;
    :hover{
        border-color: var(--secondary);
    }
`;

const Label = (props) => {
    return (
        <LabelWrapper {...props}>
            {props.children}
        </LabelWrapper>
    )
}

const Home = () => {

    const handleSearch = (e) => {
        console.log(e)
    }

    const handleChange = (e) => {

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
            <div className='filters-wrapper'>
                <Select defaultValue="1" onChange={handleChange}>
                    <Option value="1">Price</Option>
                    <Option value="2">Option 1</Option>
                </Select>
                
                <Select defaultValue="1" onChange={handleChange}>
                    <Option value="1">Available languages</Option>
                    <Option value="2">Option 1</Option>
                </Select>
                
                <Select defaultValue="1" onChange={handleChange}>
                    <Option value="1">Schedule of:</Option>
                    <Option value="2">Option 1</Option>
                </Select>

                <Divider type="vertical" style={{height:'2em'}}/>

                <Label>
                    art and culture
                </Label>
                <Label>
                    leisure
                </Label>
                <Label>
                    food and drink
                </Label>
                <Label>
                    sports
                </Label>
                <Label>
                    tours
                </Label>
                <Label>
                    <FilterOutlined style={{marginRight:'.5em'}}/> Filtros
                </Label>
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