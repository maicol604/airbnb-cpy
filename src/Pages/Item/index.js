import React from 'react';
import styled from 'styled-components';
import { default as ItemComponent } from '../../Components/Item';
import Button from '../../Components/Button';
import Comment from '../../Components/Comment';
import Map from '../../Containers/Map';
import { Col, Row, Divider, DatePicker, Breadcrumb, Avatar } from 'antd';
import { useParams } from 'react-router-dom';
import { GetExperience } from '../../MockServer/experiences';
import {
    StarFilled,
    ShareAltOutlined,
    HeartOutlined,
    SafetyCertificateFilled,
    CalendarOutlined,
    PictureOutlined,
    LeftCircleFilled
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
        overflow: hidden;
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
            //width: 100%;
            height: 60vh;
        }
    }
    @media (max-width: 768px) {
        padding: 1em;
        .img-container{
            img{
                height: 25vh;
            }
        }
        .item{
            .share-information{
                >div{
                    .action{
                        .text{
                            display: none;
                        }
                    }
                }
            }
        }
    }
`;

const { RangePicker } = DatePicker;

const Item = (props) => {

    const params = useParams();
    const [data, setData] = React.useState(null);

    React.useEffect(()=>{
        setData(GetExperience(params.id));
    },[])
    
    return (
        data?
        <ItemWrapper>
            <div style={{position:'fixed', top:'.25em', left:'.5em', fontSize:'3em', color:'var(--primary)'}}>
                <a href='/' style={{color:'inherit'}}><LeftCircleFilled /></a>
            </div>
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
                    {data.title}
                </span>
                <div className='share-information'>
                    <div>
                        <span><StarFilled style={{marginRight:'.5em'}}/></span> 0,00 <a href='#'>Madrid,España</a>
                    </div>
                    <div>
                        <div className='action'><span><ShareAltOutlined  style={{marginRight:'.5em'}}/></span> <span className='text'>Compartir</span></div>
                        <div className='action' style={{marginLeft:'1em'}}><span><HeartOutlined  style={{marginRight:'.5em'}}/></span> <span className='text'>Guardar</span></div>
                    </div>
                </div>
                <div>
                    <Row gutter={[0, 0]}>
                        {
                            data.images.map((item, index)=>(
                                index<(data.images.length-1)?
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
                                    <div className='img-container'>
                                        <img src={item} alt=''/>
                                    </div>
                                </Col>
                                :
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
                                    <div className='img-container show-more'>
                                        <div className='img-icon'>
                                            <PictureOutlined style={{width:'40%'}}/>
                                        </div>
                                        <img src={item} alt=''/>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <Divider/>
                <section className='content'>
                    <Row gutter={[16, 16]}>
                        <Col  xs={24} sm={24} md={16} lg={16} xl={16}>
                            <div className='user-info'>
                                <Avatar 
                                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                    style={{backgroundColor:'var(--primary)', color:'var(--white)'}}
                                    src={data.user.avatar}
                                >
                                    U
                                </Avatar>
                                <div style={{marginLeft:'1em'}}>
                                    <div className='h3' style={{marginBottom:'.25em', marginTop:'0'}}>{data.user.name}</div>
                                    <div>{data.user.extra_information}</div>
                                </div>
                            </div>
                            <div style={{display:'flex', marginBottom:'1em'}}>
                                <div><span className='icon'><StarFilled style={{marginRight:'.5em'}}/></span>{data.user.previews} evaluaciones</div>
                                {
                                    data.user.verified?
                                    <div><span className='icon'><SafetyCertificateFilled style={{marginRight:'.5em', marginLeft:'1em'}}/></span>Identidad verificada</div>
                                    :
                                    <></>
                                }
                            </div>
                            <article>
                                <p>
                                    {data.user.description}
                                </p>
                            </article>
                            <Divider/>
                            <article>
                                <div className='h3' style={{marginBottom:'.25em', marginTop:'0'}}>Qué harás</div>
                                <p>
                                    {data.content.what_will_you_do}    
                                </p>
                            </article>
                            <Divider/>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <div className='booking'>
                                <div className='price'>
                                    <div><span>{data.price}</span> {data.price_by}</div>
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
                                        <div><span className='price bold'>0€ </span>por persona</div>
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
                                        <div><span className='price bold'>3€ </span>por persona</div>
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
                                        <div className='bold'>cancelación flexible</div>
                                        <div className='small'></div>
                                    </div>
                                </div>
                                <div className='booking-options'>
                                    <CalendarOutlined />
                                    <div>
                                        <div className='bold'>Inmersión cultural*</div>
                                        <div className='small'></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </article>
            <section className='map'>
                <div className='h3' style={{marginTop:'0'}}>
                    Donde iras
                </div>
                <Map
                    center={data.content.location}
                />
            </section>
            <Divider/>
            <section>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <span className='bold title'>
                            Que debes saber
                        </span>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <span className='bold subtitle'>
                            Requisitos para los viajeros
                        </span>
                        {
                            data.content.what_are_you_going_to_do.map((item, index)=>(
                                <p key={index}>
                                    {item}
                                </p>
                            ))
                        }
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <span className='bold subtitle'>
                            Que hay que llevar
                        </span>
                        {
                            data.content.what_to_bring.map((item, index)=>(
                                <p key={index}>
                                    {item}
                                </p>
                            ))
                        }
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <span className='bold subtitle'>
                            Politica de cancelacion
                        </span>
                        {
                            data.content.cancellation_policy.map((item, index)=>(
                                <p key={index}>
                                    {item}
                                </p>
                            ))
                        }
                    </Col>
                </Row>
            </section>
            <Divider/>
            <section>
                <div className='h3' style={{marginTop:'0', marginBottom:'0'}}>
                    <StarFilled style={{marginRight:'.5em'}}/> {data.content.comments_count} ({data.content.comments_reviewers} evaluaciones)
                </div>
                <div style={{opacity:'.5', marginBottom:'2em'}}>
                    <span>Mas informacion sobre las evaluaciones</span>
                </div>
                <Row gutter={[64, 32]}>
                    {
                        data.content.comments.map((item,index)=>(
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Comment
                                    //more
                                    userName={item.user.name}
                                    comment={item.comment}
                                    date={''}
                                    userImage={null}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </section>
            <Divider/>
            <div style={{width:'100%'}}>
                <div className='h3' style={{marginTop:'0'}}>
                    Experiencias similares
                </div>
                <Row gutter={[16, 16]}>
                    {
                        data.similar.map((item, i)=>(
                            <Col xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
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
            {/* <div style={{width:'100%', display:'flex', justifyContent:'center', margin:'4em 0'}}>
                <Button secondary>
                    Cargar mas
                </Button>
            </div> */}
        </ItemWrapper>
        :
        <></>
    )
}

export default Item;