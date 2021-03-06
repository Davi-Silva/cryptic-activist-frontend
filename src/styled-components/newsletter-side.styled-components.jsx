/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  &::after {
    content: '';
    height: 1px;
    width: 25%;
    display: table;
    margin: 25px auto 0px auto;
    background: #ddd;
  }
  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`;

export const Title = styled.h6`
  color: #999;
  font-size: 11px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 991px) {
    font-size: 8px;
  }
  @media (max-width: 766px) {
    font-size: 13px;
  }
`;

export const Email = styled.input`
  background: #f5f5f5;
  color: #aaa;
  font-size: 14px;
  padding: 10px 15px 10px 50px;
  border: none;
  border-radius: 5px;
  letter-spacing: 1px;
  width: 100%;
  transition: all .25s ease-in-out;
  transition-delay: .1s;
  &::placeholder {
    font-weight: 400;
    letter-spacing: 1px;
    color: #aaa;
  }
  &:focus {
    outline: none;
    background: #fff;
  }
  &:hover {
    background: #fff;
  }
  @media (max-width: 991px) {
    padding: 6px 20px 6px 30px;
    font-size: 11px;
    border-radius: 3px;
  }
  @media (max-width: 766px) {
    font-size: 14px;
    padding: 8px 12px 8px 43px;
  }
`;

export const Icon = styled.div`
  position: relative;
  left: 17px;
  top: -33px;
  svg {
    color: #aaa;
    @media (max-width: 991px) {
      font-size: 10px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  @media (max-width: 991px) {
    left: 11px;
    top: -26px;
  }
  @media (max-width: 766px) {
    left: 16px;
    top: -33px;
  }
  @media (max-width: 576px) {
    left: 16px;
    top: -32px;
  }
`;
