/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundDrawer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, .2);
  z-index: 9999999999;
  height: 100%;
  width: 100%;
  top: 41px;
  display: none;
`;

export const Drawer = styled.nav`
  height: 100%;
  width: 250px;
  background: #fff;
  position: fixed;
  top: 41px;
  z-index: 99999999999;
  padding: 15px;
  transform: translateX(-250px);
  .closeDrawer {
    position: absolute;
    top: 15px;
    right: 15px;
    transform: rotate(45deg);
    color: #999;
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.1, 1.1) rotate(45deg);
      color: #0058e4;
    }
    &:active {
      transform: scale(0.95, 0.95) rotate(45deg);
    }
  }
`;

export const ProfileDrawerUl = styled.ul`
  width: 100%;
  height: 60px;
  display: block;
  li {
    list-style: none;
    display: inline-block;
    position: relative;
    p {
      margin-bottom: 0;
      transform: translateY(-4px);
    }
  }
`;

export const ProfileImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50px;
`;

export const ProfileName = styled.span`
  color: #333;
  font-size: 17px;
  letter-spacing: 1px;
`;

export const ProfileRanking = styled.p`
  color: #0058e4;
  font-size: 15px;
  &:hover {
    color: #0058e4;
    text-decoration: none;
  }
`;

export const SideDrawerUl = styled.ul`
  width: 100%;
  margin: 20px 0;
`;

export const SideDrawerSubUl = styled.ul`
  width: 100%;
  margin: 5px 0;
  background: #efefef;
`;

export const SideDrawerLi = styled.li`
  margin: 3px 0;
  list-style: none;

`;

export const SideDrawerButtonTo = styled.button`
  color: #999;
  font-size: 16px;
  width: 100%;
  display: block;
  padding: 5px 7px;
  transition: all .3s ease-in-out;
  text-align:left;
  border: none;
  line-height: unset;
  background: #fff;
  &:hover {
    color: #333;
    text-decoration: none;
    /* background: #efefef; */
    border-radius: 3px;
  }
  &:focus {
    outline: none;
    color: #333;
  }
`;

export const SideDrawerLinkTo = styled(Link)`
  color: #999;
  font-size: 16px;
  width: 100%;
  display: block;
  padding: 5px 7px;
  transition: all .3s ease-in-out;
  text-align:left;
  border: none;
  background: transparent;
  &:hover {
    color: #333;
    text-decoration: none;
    background: #efefef;
    border-radius: 3px;
  }
  &:focus {
    outline: none;
  }
`;

export const SideDrawerLinkToAdmin = styled(Link)`
  transition: all .3s ease-in-out;

  &:hover {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  border: none;
  background: #ff0000;
`;

export const Login = styled(Link)`
  color: #0058e4;
  font-size: 16px;
  &:hover {
    color: #0058e4;
    text-decoration: none;
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 50%;
  background: #ddd;
  display: block;
  margin: 0 auto;
  display: table;
`;

export const LogoutDiv = styled.div`
  position: absolute;
  display: block;
  bottom: 50px;
  width: 88%;
`;

export const Logout = styled.button`
  color: #333;
  padding: 5px 7px;
  background: #fff;
  border: none;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  &:hover {
    color: #333;
    text-decoration: none;
    background: #efefef;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: #d8d8d8;
  }
`;
