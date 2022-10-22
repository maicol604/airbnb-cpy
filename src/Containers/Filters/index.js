import React from 'react';
import styled from 'styled-components';
import {Divider, Select } from 'antd';
import {
    FilterOutlined
} from '@ant-design/icons';

const FiltersWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2em;
    align-items: center;
    background-color: var(--white);
    padding: 1em 4em;
    .ant-select-selector{
        color: var(--secondary);
        border-radius: 5em !important;
        outline: none !important;
        height: auto !important;
        width: auto !important;
        padding: .5em 2em !important;
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
`;

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

const Option = Select;

const Filters = () => {

    const handleChange = (e) => {

    }

    return (
        <FiltersWrapper>
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
        </FiltersWrapper>
    )
}

export default Filters;