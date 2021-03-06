import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MostViewedDiv = styled.div`
  padding: 25px 0;
`;

export const MostViewedCourses = styled.h3`
  color: #333;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const Filter = styled.div`
  background: #f2f3f5;
  width: 200px;
  height: 300px;
  display: table;
  margin: 0 auto;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;


export const Ul = styled.ul`
  overflow-x: scroll;
  overflow-y: hidden;
  height: 275px;
  white-space: nowrap;
  margin-bottom: 0;
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Li = styled.li`
  display: inline-block;
  margin: 0 25px 0 0;
  height: 300px;
`;

export const Wrapper = styled.div`
  border: 1px solid #efefef;
  border-radius: 4px;
  color: #333;
  width: 200px;
  background: #fff;
  height: 270px;
  margin: 0;
  display: block;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
  transition: .2s all ease-in-out;
  &:hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    border: 1px solid #e2e2e2;
  }
`;

export const CourseCoverLink = styled(Link)`
  width: 100%;
  height: 150px;
`;

export const CourseCover = styled.div`
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Content = styled.div`
  padding: 10px;
  height: 170px; 
  width: 200px;
`;

export const Title = styled(Link)`
  color: #333;
  font-size: 16px;
  letter-spacing: 1px;
  position: relative;
  line-height: 21px;
  max-width: 178px;
  transition: .2s all ease-in-out;
  white-space: pre-wrap;
  &:hover {
    text-decoration: none;
    color: #0058e4;
  }
  p {
    line-height: 20px;
    margin-bottom: 5px;
    height: 40px;
  }
`;

export const PulbishedOnDate = styled.p`
  margin-bottom: 0;
  font-size: 13px;
`;

export const Author = styled(Link)`
  color: #333;
  font-size: 12px;
  position: relative;
  top: 62px;
  &:hover {
    text-decoration: none;
    color: #0058e4;
  }
`;

export const Price = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: 700;
  position: relative;
  top: 10px;
`;
