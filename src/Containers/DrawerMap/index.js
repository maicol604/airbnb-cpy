import React from 'react';
import Map from '../Map';
import styled from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';
import Filters from '../Filters';
import Button from '../../Components/Button';

const MapContentWrapper = styled.div`
  .drawer{
    width: 100%;
    position: fixed;
    height: 100vh;
    bottom: -100vh;
    left: 0;
    border-bottom: 1px solid red;
  }
  .content{
    position: relative;
    .button-list{
      position: absolute;
      top: calc(100vh - 7em);
      z-index: 1000;
      width: 15em;
      display: flex;
      justify-content: center;
      left: calc(50% - 7.5em);
    }
  }
  .drawer-slidein{
    animation-duration: .25s;
    animation-name: slidein;
    animation-fill-mode: both;
  }
  .drawer-slideout{
    animation-duration: .25s;
    animation-name: slideout;
    animation-fill-mode: both;
  }
  @keyframes slidein {
    from {
      bottom: -100vh;
    }
    to {
      bottom: 0;
    }
  }
  @keyframes slideout {
    from {
      bottom: 0;
      opacity: 1;
    }
    to {
      opacity: 0;
      bottom: -100vh;
    }
  }
  .filters-mobile{
    background-color: var(--white);
    padding: 1em .5em;
    display: none;
    .labels{
        padding: 0 1em;
        font-weight: 600;
        //font-size: 1.25em;
        color: var(--secondary);
        .label{
            padding: .25em 1em;
            border-radius: 5em;
            border: 1px solid rgba(0,0,0,.25);
            &:nth-child(1n){
                margin-right: .25em;
            }
        }
    }
  }
  @media (max-width: 768px) {
    .filters-mobile{
      display: block;
    }
    .filters{
      display: none;
    }
  }
`;

const DrawerMap = (props) => {

  const onClose = () => {
    props.onCancel();
  };

  return (
    <MapContentWrapper>
      <>
        {props.children}
      </>
      <div className={'drawer '+(props.open?'drawer-slidein':'drawer-slideout')}>
        <div className='content'>
          <span className='button-list'>
            <Button onClick={onClose} secondary>
              Mostar la lista <UnorderedListOutlined style={{marginLeft:'.5em'}}/>
            </Button>
          </span>
          <span className='filters'>
            <Filters/>
          </span>
          <div className='filters-mobile'>
            <div className='labels'>
              <span className='label'>Tipo de actividad</span>
              <span className='label'>Precio</span>
              <span className='label'>Idiomas</span>
            </div>
          </div>
          <Map/>
        </div>
      </div>
    </MapContentWrapper>
  );
};
export default DrawerMap;
