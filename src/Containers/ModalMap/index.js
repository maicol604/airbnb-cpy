import { PropertySafetyFilled } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import Modal from '../../Components/Modal';
import Map from '../Map';

const ModalMapWrapper = styled.div`

`;
const ModalContentWrapper = styled.div`
    width: 70vw;
    height: 70vh;
    overflow: hidden;
`;

const ModalMap = (props) => {
    return (
        <ModalMapWrapper>
            {props.children}
            <Modal open={props.open} onCancel={props.onCancel} footer={null} style={{width: 'auto'}}>
                <ModalContentWrapper>
                    <Map/>
                </ModalContentWrapper>
            </Modal>
        </ModalMapWrapper>
    )
}

export default ModalMap;