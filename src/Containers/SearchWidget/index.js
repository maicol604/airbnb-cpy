import React from 'react';
import { Divider, Select } from 'antd';
import styled from 'styled-components';
import Button from '../../Components/Button';
import {
    EnvironmentFilled
} from '@ant-design/icons';

const { Option } = Select;

const SearchWidgetWrapper = styled.div`
    background-color: var(--bg-color);
    padding: .5em;
    border-radius: 5em;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    margin-top: 1em;
    width: 100%;
    input{
        border: none;
        outline: none;
        padding: 1em;
        &::placeholder {
            font-weight: 600;
            opacity: 1;
            color: var(--secondary);
        }
    }
    .location{
        color: var(--secondary);
    }
    .ant-select-selector{
        border: none !important;
        outline: none;
        .ant-select-selection-item{
            font-weight: 600;
            color: var(--secondary);
        }
    }
    .ant-select-focused .ant-select-selector,
    .ant-select-selector:focus,
    .ant-select-selector:active,
    .ant-select-open .ant-select-selector {
        border-color: #d9d9d9 !important;
        box-shadow: none !important;
    }
    .search-item{
        width: 20%;
    }
`;

const dividerStyles = {height:'2em', borderWidth:'2px'};

const SearchWidget = (props) => {

    const handleChange = (e) => {

    }

    return (
        <SearchWidgetWrapper>
            <input placeholder='What are you loking for' className='search-item'/>
            <Divider type="vertical" style={{...dividerStyles}}/>
            <div className='location search-item' style={{display:'flex', justifyContent:'space-between', cursor:'pointer'}}>
                <span>Location</span> <span><EnvironmentFilled /></span>
            </div>
            <Divider type="vertical" style={{...dividerStyles}}/>
            <div className='search-item'>
                <Select defaultValue="1" onChange={handleChange}>
                    <Option value="1">All categories</Option>
                    <Option value="2">Option 1</Option>
                </Select>
            </div>
            <Divider type="vertical" style={{...dividerStyles}}/>
            <div className='search-item' style={{width:'15%', display:'flex', justifyContent: 'flex-end', padding:'.5em'}}>
                <Button primary>
                    Search
                </Button>
            </div>
        </SearchWidgetWrapper>
    )
}

export default SearchWidget;