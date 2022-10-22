import { Modal as ModalComponent } from 'antd';
import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled(ModalComponent)`
    .ant-modal-content{
        width: fit-content;
    }
    .ant-modal{
        margin: 0;
        width: fit-content;
    }
    .ant-modal-body{
        height: auto;
        min-height: auto;
    }
    .ant-modal-wrap{
        display: flex;
        justify-content: center;
        align-content: center;
    }
`;

const Modal = (props) => {
    return (
        <ModalWrapper title={props.title} open={props.open} {...props} width={'fit-content'} height={'fit-content'}>
            {props.children}
        </ModalWrapper>
    );
};

export default Modal;
