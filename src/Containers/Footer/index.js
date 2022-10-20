import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import {
    RightOutlined
} from '@ant-design/icons';

const FooterWrapper = styled.div`
    padding: 1em;
    display: flex;
    justify-content: center;
    padding: 4em 8em;
    padding-top: 2em;
    color: var(--secondary);
    font-weight: 600;
    .contact-us-list, .helpfull-list{
        font-size: .75em;
        ul{
            margin: 0;
            padding: 0;
            li{
                list-style: none;
                margin: 0;
                padding: .25em 0;
                cursor: pointer;
            }
        }
    }
    .helpfull-list{

    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <div className='h3'>
                        Company name
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium consequat neque, ac rutrum nunc hendrerit at. Vivamus ligula lorem, varius in sollicitudin a, ultrices ac urna. Duis dapibus cursus nunc semper sodales. Aliquam erat volutpat. Etiam et laoreet ante. Praesent consequat a neque malesuada ornare.
                    </p>
                </Col>
                <Col span={6}>
                    <div className='h3'>
                        Helpfull links
                    </div>
                    <div className='helpfull-list'>
                        <ul>
                            <li>
                                <RightOutlined style={{marginRight:'.5em'}}/>Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <RightOutlined style={{marginRight:'.5em'}}/>Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <RightOutlined style={{marginRight:'.5em'}}/>Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <RightOutlined style={{marginRight:'.5em'}}/>Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='h3'>
                        Contact us
                    </div>
                    <div className='contact-us-list'>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, <span className='color-primary'>consectetur adipiscing elit.</span>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </FooterWrapper>
    )
}

export default Footer;