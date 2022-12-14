import React from 'react';
import { Col, Row, Divider, Carousel, Select } from 'antd';

import Item from '../../Components/Item';
import Button from '../../Components/Button';
import SearchWidget from '../../Containers/SearchWidget';
import Filters from '../../Containers/Filters';
import styled from 'styled-components';
import { SearchOutlined, ControlOutlined } from '@ant-design/icons';

import { GetExperiences } from '../../MockServer/experiences';

const items = [0,0,0,0,0,0]

const HomeWrapper = styled.div`
    position: relative;
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
            padding-top: 0;
        }
        .carousel-wrapper{
            height: 50vh;
            .carousel-item{
                min-height: 50vh;
                align-items: flex-end;
                padding-bottom: 7.5em;
                .carousel-content{
                    padding: 1em;
                    .carousel-item-title{
                        font-size: 2em;
                        width: 100%;
                    }
                }
                img{
                    width: auto;
                }
            }
        }
        .filters{
            display: none;
        }
        .search{
            .search-item-mobile{
                display: block;
            }
            .search-item{
                display: none;
            }
        }
    }
    .search{
        position: absolute;
        z-index: 1;
        width: 100%;
        left: 0;
        padding-left: 10%;
        padding-right: 10%;
        top: calc(65vh - 18em);
    }
    .labels{
        padding: 1em 1em;
        font-weight: 600;
        //font-size: 1.25em;
        color: var(--secondary);
        .label{
            white-space: nowrap;
            padding: 6px 14px;
            border-radius: 5em;
            border: 1px solid rgba(0,0,0,.25);
            &:nth-child(1n){
                margin-right: .25em;
            }
        }
    }
`;

const SearchMobileWrapper = styled.div`
    padding: .5em 1em;
    width: calc(100% - 0em);
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

    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        setData(GetExperiences());
    },[])

    const handleSearch = (e) => {
        console.log(e)
    }

    return (
        <HomeWrapper>
            <div className='carousel-wrapper'>
                <div className='search'>
                    <div className='search-item'>
                        <SearchWidget
                            onSearch={handleSearch}
                        />
                    </div>
                    <div className='search-item-mobile'>
                        <SearchMobile/>
                    </div>
                </div>
                <Carousel autoplay>
                    <div className='carousel-item'>
                        <div className='carousel-content'>
                            <div className='carousel-item-title'>
                                Lorem ipsum dolor sit amet, <span className='underline'>consectetur adipiscing elit.</span>
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
                    <span className='label'>Tipo de actividad</span>
                    <span className='label'>Precio</span>
                    <span className='label'>Idiomas</span>
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
                            data.map((item, i)=>(
                                <Col xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
                                    <Item
                                        images={item.images}
                                        score={item.valuation}
                                        reviewers={item.reviewers}
                                        counter={100}
                                        title={item.title}
                                        price={item.price}
                                        priceBy={item.price_by}
                                        liked={false}
                                        to={'/item/'+item.id}
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
                            [].map((item, i)=>(
                                <Col xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
                                    <Item
                                        score={'Nueva'}
                                        counter={100}
                                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                        price={'Desde 200 ???'}
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
                            [].map((item, i)=>(
                                <Col xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
                                    <Item
                                        score={'Nueva'}
                                        counter={100}
                                        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                        price={'Desde 200 ???'}
                                        priceBy={'Por persona'}
                                        liked={false}
                                        to={'/item'}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                {/* <div style={{width:'100%', display:'flex', justifyContent:'center', margin:'4em 0'}}>
                    <Button secondary>
                        Cargar mas
                    </Button>
                </div> */}
            </div>
        </HomeWrapper>
    )
}

export default Home;