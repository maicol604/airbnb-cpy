import React from 'react';
import Map from '../Map';
import styled from 'styled-components';
import { CloseCircleFilled } from '@ant-design/icons';
import Filters from '../../Containers/Filters';

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

  }
  .header{
    height: 30vh;
    background: rgb(0,0,0);
    background: rgba(0,0,0,.5);//linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(255,255,255,0) 100%);
  }
  .header-in{
    animation-delay: .25s;
    animation-duration: .25s;
    animation-name: headerin;
    animation-fill-mode: both;
  }
  .header-out{
    animation-duration: .25s;
    animation-name: headerout;
    animation-fill-mode: both;
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
  @keyframes headerin {
    from {
      opacity: 0;
    }
    to {
      bottom: 1;
    }
  }
  @keyframes headerout {
    from {
      bottom: 1;
    }
    to {
      bottom: 0;
    }
  }
  .close{
    position: absolute;
    right: 1em;
    top: 1em;
    color: var(--white);
    font-size: 2em;
    cursor: pointer;
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
        <div className={'header '+(props.open?'header-in':'header-out')} onClick={onClose}>
          <div className='close'><CloseCircleFilled /></div>
        </div>
        <div className='content'>
          <Filters/>
          <Map/>
        </div>
      </div>
    </MapContentWrapper>
  );
};
export default DrawerMap;
