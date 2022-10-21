import React from 'react';
import styled from 'styled-components';
import { default as ItemComponent } from '../../Components/Item';
import Button from '../../Components/Button';
import Map from '../../Containers/Map';
import { Col, Row, Divider, DatePicker, Breadcrumb, Avatar } from 'antd';
import {
    StarFilled,
    ShareAltOutlined,
    HeartOutlined,
    SafetyCertificateFilled,
    CalendarOutlined,
    PictureOutlined
} from '@ant-design/icons';

const ItemWrapper = styled.div`
    font-weight: 600;
    padding: 2em 8em;
    .title{
        font-size: 1.25em;
        margin-bottom: 1em;
        display: inline-block;
    }
    .subtitle{
        font-weight: 700;
        display: inline-block;
        width: 100%;
        margin-bottom: 1em;
    }
    p{
        font-weight: 500;
    }
    .item{
        display: flex;
        flex-direction: column;
        .bold{
            color: var(--bold-color);
            font-weight: 700;
        }
        .small{
            font-size: .75em;
        }
        .share-information{
            display: flex;
            justify-content: space-between;
            >div{
                display: flex;
                margin-bottom: 1em;
                .action{
                    cursor: pointer;
                    transition: all .25s;
                    &:hover{
                        color: var(--primary);
                    }
                }
                a{
                    color: var(--bold-color);
                    text-decoration: underline;
                    font-weight: 600;
                    margin-left: 1em;
                }
            }
        }
        .content{
            color: var(--secondary);
            margin-bottom: 2em;
            .icon{
                color: var(--bold-color);
            }
            .user-info{
                display: flex;
                margin-bottom: 1em;
            }
            .booking{
                border: 1px solid rgba(0,0,0,.25);
                border-radius: 1em;
                padding: 1em;
                display: flex;
                flex-direction: column;
                .price{
                    div span{
                        font-size: 1.5em;
                        font-weight: 700;
                        color: var(--bold-color);
                    }
                    a{
                        color: var(--secondary);
                        text-decoration: underline;
                    }
                }
                .date-picker{
                    margin-top: 1em;
                    display: flex;
                    margin-bottom: 1em;
                    .ant-picker{
                        padding: 1em;
                        border-radius: 1em;
                        width: 100%;
                    }
                }
                .booking-start, .booking-end{
                    display: flex;
                    justify-content: space-between;
                    .bold{
                        color: var(--bold-color);
                        margin-right: .5em;
                        font-weight: 700;
                    }
                    .date{
                        font-weight: 700;
                        color: var(--bold-color);
                    }
                    .hours{
                        font-size: .75em;
                    }
                    a{
                        font-size: .75em;
                        color: var(--bold-color);
                        text-decoration: underline;
                    }
                    .end{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: space-between;
                        >div{
                            margin-bottom: .5em;
                        }
                    }
                }
                .booking-options{
                    display: flex;
                    align-items: center;
                    margin-top: 1em;
                    >div{
                        margin-left: 1em;
                    }
                }
            }
        }
    }
    .map{
        width: 100%;
        height: 60vh;
        overflow: hidden;
        border-radius: 1em;
        margin-bottom: 1em;
        margin-top: 1em;
    }
    .request-popup .leaflet-popup-content-wrapper {
        border-radius: 0px;
    }
    .img-container{
        width: 100%;
        background-color: #000;
        &.show-more{
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .img-icon{
                position: absolute;
                color: var(--white);
                font-size: 5em;
                opacity: 0;
                transition: all .25s;
            }
            &:hover{
                img{
                    opacity: .5;
                }
                .img-icon{
                    opacity: 1;
                }
            }
        }
        img{
            transition: all .25s;
            width: 100%;
        }
    }
`;

const { RangePicker } = DatePicker;

const Item = (props) => {
    return (
        <ItemWrapper>
            <section>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="">Madrid Epaña</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Arte y cultura</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Arte</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Fotografia</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </section>
            <article className='item'>
                <span className='h3'>
                    Amazing pictures in the herat of Madrid
                </span>
                <div className='share-information'>
                    <div>
                        <span><StarFilled style={{marginRight:'.5em'}}/></span> 0,00 <a href='#'>Madrid,España</a>
                    </div>
                    <div>
                        <div className='action'><span><ShareAltOutlined  style={{marginRight:'.5em'}}/></span> Compartir</div>
                        <div className='action' style={{marginLeft:'1em'}}><span><HeartOutlined  style={{marginRight:'.5em'}}/></span> Compartir</div>
                    </div>
                </div>
                <div>
                    <Row gutter={[0, 0]}>
                        <Col span={6}>
                            <div className='img-container'>
                                <img src={'https://placeimg.com/500/700/any'} alt=''/>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='img-container'>
                                <img src={'https://placeimg.com/500/700/any'} alt=''/>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='img-container'>
                                <img src={'https://placeimg.com/500/700/any'} alt=''/>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='img-container show-more'>
                                <div className='img-icon'>
                                    <PictureOutlined style={{width:'40%'}}/>
                                </div>
                                <img src={'https://placeimg.com/500/700/any'} alt=''/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Divider/>
                <section className='content'>
                    <Row gutter={[16, 16]}>
                        <Col span={16}>
                            <div className='user-info'>
                                <Avatar 
                                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                    style={{backgroundColor:'var(--primary)', color:'var(--white)'}}
                                >
                                    U
                                </Avatar>
                                <div style={{marginLeft:'1em'}}>
                                    <div className='h3' style={{marginBottom:'.25em', marginTop:'0'}}>Lorem ipsum dolor sit amet</div>
                                    <div>Lorem ipsum dolor sit amet</div>
                                </div>
                            </div>
                            <div style={{display:'flex', marginBottom:'1em'}}>
                                <div><span className='icon'><StarFilled style={{marginRight:'.5em'}}/></span>12 evaluaciones</div>
                                <div><span className='icon'><SafetyCertificateFilled style={{marginRight:'.5em', marginLeft:'1em'}}/></span>Identidad verificada</div>
                            </div>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, diam nec egestas congue, dolor odio lacinia ipsum, quis imperdiet ante eros a leo. Sed luctus urna consectetur dui mollis pretium. Sed commodo, nunc ut pretium aliquam, erat eros porta nisl, at tempus dolor elit eu nisi. Vestibulum feugiat, lorem nec lobortis bibendum, ligula arcu gravida lectus, sit amet pellentesque ante metus ut nisi. Fusce at tortor justo. In iaculis justo convallis mollis commodo. Sed pretium lectus et tristique aliquet. Sed purus augue, aliquam quis eros vitae, tincidunt efficitur magna. 
                                </p>
                            </article>
                            <Divider/>
                            <article>
                                <div className='h3' style={{marginBottom:'.25em', marginTop:'0'}}>Lorem ipsum dolor sit amet</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, diam nec egestas congue, dolor odio lacinia ipsum, quis imperdiet ante eros a leo. Sed luctus urna consectetur dui mollis pretium. Sed commodo, nunc ut pretium aliquam, erat eros porta nisl, at tempus dolor elit eu nisi. Vestibulum feugiat, lorem nec lobortis bibendum, ligula arcu gravida lectus, sit amet pellentesque ante metus ut nisi. Fusce at tortor justo. In iaculis justo convallis mollis commodo. Sed pretium lectus et tristique aliquet. Sed purus augue, aliquam quis eros vitae, tincidunt efficitur magna. 
                                </p>
                            </article>
                            <Divider/>
                        </Col>
                        <Col span={8}>
                            <div className='booking'>
                                <div className='price'>
                                    <div><span>Desde 00€</span> por persona</div>
                                    <a>Mostrar precios</a>
                                </div>
                                <div className='date-picker'>
                                    <RangePicker />
                                </div>
                                <div className='booking-start'>
                                    <div>
                                        <div className='date'>Lorem ipsum dolor sit amet</div>
                                        <div className='hours'>Lorem ipsum dolor sit amet</div>
                                        <a href='#'>Lorem ipsum dolor sit amet</a>
                                    </div>
                                    <div className='end'>
                                        <div><span className='price bold'>46€</span>Lorem ipsum</div>
                                        <Button primary>
                                            Elegir
                                        </Button>
                                    </div>
                                </div>
                                <Divider/>
                                <div className='booking-start'>
                                    <div>
                                        <div className='date'>Lorem ipsum dolor sit amet</div>
                                        <div className='hours'>Lorem ipsum dolor sit amet</div>
                                        <a href='#'>Lorem ipsum dolor sit amet</a>
                                    </div>
                                    <div className='end'>
                                        <div><span className='price bold'>46€</span>Lorem ipsum</div>
                                        <Button primary>
                                            Elegir
                                        </Button>
                                    </div>
                                </div>
                                <Divider/>
                                <div>
                                    <Button style={{width:'100%', fontWeight:'700'}}>
                                        Mostrar mas fechas
                                    </Button>
                                </div>
                                <div className='booking-options'>
                                    <CalendarOutlined />
                                    <div>
                                        <div className='bold'>Lorem ipsum dolor sit amet</div>
                                        <div className='small'>Lorem ipsum dolor sit amet</div>
                                    </div>
                                </div>
                                <div className='booking-options'>
                                    <CalendarOutlined />
                                    <div>
                                        <div className='bold'>Lorem ipsum dolor sit amet</div>
                                        <div className='small'>Lorem ipsum dolor sit amet</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </article>
            <section className='map'>
                <Map/>
            </section>
            <Divider/>
            <section>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <span className='bold title'>
                            Lorem ipsum dolor sit amet
                        </span>
                    </Col>
                    <Col span={8}>
                        <span className='bold subtitle'>
                            Lorem ipsum dolor sit amet
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                    </Col>
                    <Col span={8}>
                        <span className='bold subtitle'>
                            Lorem ipsum dolor sit amet
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                    </Col>
                    <Col span={8}>
                        <span className='bold subtitle'>
                            Lorem ipsum dolor sit amet
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nunc, consequat at blandit ac, condimentum non odio. Nullam eu ultricies eros, lacinia feugiat tellus. Quisque pharetra magna non nibh tincidunt lobortis. Etiam rutrum mi augue, ut sagittis arcu congue at. Praesent venenatis sem id augue varius dignissim.
                        </p>
                    </Col>
                </Row>
            </section>
            <Divider/>
            <div style={{width:'100%'}}>
                <div className='h3' style={{marginTop:'0'}}>
                    Experiencias similares
                </div>
                <Row gutter={[16, 16]}>
                    {
                        [0,0,0,0,0,0].map((item, i)=>(
                            <Col span={4} key={i}>
                                <ItemComponent
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
            <section>

            </section>
        </ItemWrapper>
    )
}

export default Item;