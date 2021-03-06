/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rotate } from '../animations';

export const WrittenByDiv = styled.div`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 25px 0;
  min-height: 138px;
  margin: 20px 0 30px 0;
  @media (max-width: 991px) {
    margin-bottom: 0;
    /* height: 123px; */
  } 
  @media (max-width: 575px) {
    margin-bottom: 0;
    /* height: 240px; */
    padding: 25px 0 30px 0;
  }   
`;

export const WrittenByUl = styled.ul`
  margin-bottom: 0;
  transform: translateY(-25px);
  @media (max-width: 575px) {
    transform: translateY(0px);
  }  
  .authorProfileImageLi {
    position: absolute;
    top: 20px;
    @media (max-width: 575px) {
      position: relative;
      top: 0;
      margin-bottom: -22px;
    } 
  }
  li {
    display: inline-block;
    @media (max-width: 575px) {
      width: 100%;
    }
    img {
      height: 95px;
      width: 95px;
      border-radius: 70px;
      @media (max-width: 991px) {
        width: 80px;
        height: 80px;
      }
      @media (max-width: 440px) {
        width: 75px;
        height: 75px;
      }
    }
  }
  .userInfoDiv {
    transform: translateY(20px);
    margin-left: 97px;
    @media (max-width: 991px) {
      margin-left: 79px;
    }  
    @media (max-width: 575px) {
      margin-left: 0;
      ul {
        margin: 0 auto;
      }
    } 
  }
`;

export const WrittenByAuthorLinkTop = styled(Link)`
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 575px) {
    margin: 0 auto;
    display: table;
  }  
`;

export const WrittenByAuthorInfoUl = styled.ul`
  margin-bottom: 0;
  margin-left: 15px;
  .followBtn {
    position: absolute;
    top: -12px;
    @media (max-width: 575px) {
      display: table;
      right: 0;
      position: relative;
    }  
  }
  li {
    list-style: none;
    p {
      color: #999;
      font-size: 13px;
      margin-bottom: 0;
      @media (max-width: 991px) {
        font-size: 12px;
      }
      @media (max-width: 575px) {
        text-align: center;
      }   
    }
    b {
      color: #333;
      font-size: 24px;
      letter-spacing: 1px;
      @media (max-width: 991px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        text-align: center;
      }  
    }
    .author-quote {
      color: #999;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 1px;
      width: 485px;
      margin-bottom: 0px;
      line-height: 20px;
      @media (max-width: 1199px) {
        width: 450px;
      }
      @media (max-width: 991px) {
        font-size: 12px;
        width: 305px;
        line-height: 17px;
      }
      @media (max-width: 768px) {
        width: 280px;
      }
      @media (max-width: 575px) {
        width: 80%;
        text-align: center;
        margin: 0 auto 15px auto;
        display: table;
        height: fit-content;
      }
      @media (max-width: 440px) {
        width: 100%;
      }    
    }
  }
`;


export const FollowButton = styled.button`
	background-color: #fff;
	border: 1px solid #00b170;
	border-radius: 50px;
	padding: 3px 7px;
	color: #00b170;
	font-size: 16px;
  width: 96px;
  position: absolute;
  top: 45px;
  right: -180px;
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		background-color: #00b170;
	}
  @media (max-width: 1199px) {
		font-size: 15px;
    right: -110px;
	}
	@media (max-width: 991px) {
		font-size: 13px;
    right: -100px;
	}
  @media (max-width: 768px) {
    margin-left: 15px;
    transform: translateX(15px);
  }
  @media (max-width: 575px) {
    margin: 15px auto 0 auto;
    display: table;
    position: relative;
    top: 0px;
    right: 0;
    transform: translateX(0px);
  }
`;

export const FollowButtonLoading = styled.button`
	background-color: #fff;
	border: 1px solid #00b170;
	border-radius: 50px;
	padding: 3px 7px;
	color: #00b170;
	font-size: 16px;
  width: 96px;
  position: absolute;
  top: 45px;
  right: -180px;
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		background-color: #00b170;
	}
  @media (max-width: 1199px) {
		font-size: 15px;
    right: -110px;
	}
	@media (max-width: 991px) {
		font-size: 13px;
    right: -100px;
	}
  @media (max-width: 768px) {
    margin-left: 15px;
    transform: translateX(15px);
  }
  @media (max-width: 575px) {
    margin: 15px auto 0 auto;
    display: table;
    position: relative;
    top: 0px;
    right: 0;
    transform: translateX(0px);
  }
`;


export const UnfollowButton = styled.button`
	background-color: #00b170;
	border: 1px solid #00b170;
	border-radius: 50px;
	padding: 3px 7px;
	color: #fff;
	font-size: 16px;
  width: 96px;
  position: absolute;
  top: 45px;
  right: -180px;
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		background-color: #00b170;
	}
  @media (max-width: 1199px) {
		font-size: 15px;
    right: -110px;
	}
	@media (max-width: 991px) {
		font-size: 13px;
    right: -100px;
	}
  @media (max-width: 768px) {
    margin-left: 15px;
    transform: translateX(15px);
  }
  @media (max-width: 575px) {
    margin: 15px auto 0 auto;
    display: table;
    position: relative;
    top: 0px;
    right: 0;
    transform: translateX(0px);
  }
`;

export const UnfollowButtonLoading = styled.button`
	background-color: #00b170;
	border: 1px solid #00b170;
	border-radius: 50px;
	padding: 3px 7px;
	color: #fff;
	font-size: 16px;
  width: 96px;
  position: absolute;
  top: 45px;
  right: -180px;
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		background-color: #00b170;
	}
  @media (max-width: 1199px) {
		font-size: 15px;
    right: -110px;
	}
	@media (max-width: 991px) {
		font-size: 13px;
    right: -100px;
	}
  @media (max-width: 768px) {
    margin-left: 15px;
    transform: translateX(15px);
  }
  @media (max-width: 575px) {
    margin: 15px auto 0 auto;
    display: table;
    position: relative;
    top: 0px;
    right: 0;
    transform: translateX(0px);
  }
`;

export const LoadingAllContentFollow = styled.div`
	width: 100%;
	svg {
		animation: ${rotate} 1s infinite;
		color: #00b170;
		font-size: 18px;
		display: table;
		margin: 3px auto;
    @media (max-width: 1199px) {
      font-size: 17px;
    }
    @media (max-width: 991px) {
      font-size: 13px;
    }
	}
`;


export const LoadingAllContentUnfollow = styled.div`
	width: 100%;
	svg {
		animation: ${rotate} 1s infinite;
		color: #fff;
		font-size: 18px;
		display: table;
		margin: 3px auto;
    @media (max-width: 1199px) {
      font-size: 17px;
    }
    @media (max-width: 991px) {
      font-size: 13px;
    }
	}
`;
