/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rotate, loadingTiles } from './animations';

export const PostListTitleDiv = styled.div`
	margin-bottom: 30px;
	margin-top: 10px;
	&::after {
		content: '';
		height: 2px;
		width: 97%;
		display: block;
		position: absolute;
		background: #000;
		margin-right: 10px;
		@media (max-width: 991px) {
			width: 95.8%;
		}
		@media (max-width: 768px) {
			width: 94%;
		}
		@media (max-width: 495px) {
			width: 93.5%;
		}
		@media (max-width: 469px) {
			width: 93%;
		}
		@media (max-width: 464px) {
			width: 92.5%;
		}
		@media (max-width: 416px) {
			width: 92%;
		}
		@media (max-width: 377px) {
			width: 91.5%;
		}
		@media (max-width: 354px) {
			width: 91%;
		}
		@media (max-width: 347px) {
			width: 90.5%;
		}
		@media (max-width: 321px) {
			width: 90%;
		}
		@media (max-width: 305px) {
			width: 89.5%;
		}
		@media (max-width: 297px) {
			width: 89%;
		}
		@media (max-width: 279px) {
			width: 88.5%;
		}
		@media (max-width: 269px) {
			width: 88%;
		}
		@media (max-width: 259px) {
			width: 87.5%;
		}
		@media (max-width: 241px) {
			width: 87%;
		}
	}
`;

export const SeeAll = styled(Link)`
	font-size: 16px;
	text-transform: uppercase;
	border-radius: 4px;
	color: #999;
	display: block;
	padding: 5px 10px;
	transform: translateY(-5px);
	font-weight: 900;
	float: right;
	transition: .2s all ease-in-out;
	&:hover {
		background-color: #f2f3f5;
		text-decoration: none;
		color: #999;
	}
	&:active {
		background-color: #e0e0e0;
		color: #0058e4;
	}
	@media (max-width: 768px) {
		font-size: 15px;
		transform: translateY(-4px);
	}
	@media (max-width: 576px) {
		font-size: 14px;
		transform: translateY(-4px);
	}
`;


export const PostListTitle = styled.h3`
	color: 16px;
	font-weight: 900;
	letter-spacing: 1px;
	font-size: 20px;
	@media (max-width: 991px) {
		font-size: 18px;
	}
	@media (max-width: 769px) {
		font-size: 16px;
	}
`;

export const ColumnLeft = styled.div`
	padding: 0 8px 0 15px;
	@media (max-width: 768px) {
		padding: 0 15px;
	}
`;

export const ColumnCenter = styled.div`
	padding: 0 8px 0 8px;
	@media (max-width: 768px) {
		padding: 0 15px;
	}
`;


export const ColumnRight = styled.div`
	padding: 0 15px 0 8px;
	@media (max-width: 768px) {
		padding: 0 15px;
	}
`;

export const Card = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  &:hover {
    text-decoration: none;
  }
`;

export const Cover = styled.div`
  /* border-radius: 6px; */
	height: 190px;
	width: 100%;
	margin-bottom: 15px;
	@media (max-width: 1199px) {
		height: 160px;
	}
	@media (max-width: 991px) {
		height: 135px;
	}
	@media (max-width: 769px) {
		height: 135px;
		margin-bottom: 24px;
	}
	@media (max-width: 574px) {
		height: 150px;
	}
`;

export const CoverLoading = styled.div`
	background: #eaeaea;
	height: 190px;
	width: 100%;
	margin-bottom: 15px;
	animation: ${loadingTiles} 1s infinite;
	@media (max-width: 1199px) {
		height: 160px;
	}
	@media (max-width: 991px) {
		height: 135px;
	}
	@media (max-width: 769px) {
		height: 135px;
		margin-bottom: 24px;
	}
	@media (max-width: 574px) {
		height: 150px;
	}
`;

export const BackgroundWrapper = styled.div`
	background: linear-gradient(0deg, rgba(0,0,0,0.8491771708683473) 0%, rgba(0,212,255,0) 100%);
	height: 190px;
	width: 100%;
	@media (max-width: 1199px) {
		height: 160px;
	}
	@media (max-width: 991px) {
		height: 135px;
	}
	@media (max-width: 769px) {
		height: 135px;
	}
	@media (max-width: 574px) {
		height: 150px;
	}
`;

export const PublishedOn = styled.b`
  color: #fff;
  font-size: 12px;
	@media (max-width: 991px) {
		font-size: 11px;
	}
`;

export const PostInfoDiv = styled.div`
	top: 60px;
	position: absolute;
	width: 350px;
	padding: 0 5px;
	@media (max-width: 1199px) {
		top: 30px;
		width: 215px;
	}
	@media (max-width: 991px) {
		top: 20px;
	}
`;

export const Title = styled.h5`
	color: #fff;
	font-size: 17px;
	font-weight: 900;
	width: 256px;
	margin: 0;
	@media (max-width: 1199px) {
		font-size: 14px;
		width: 215px;
	}
	@media (max-width: 991px) {
		font-size: 15px;
	}
`;

export const CategoryDiv = styled.div`
	padding: 0 0 0 8px;
	top: 162px;
	position: absolute;
	&::before {
		content: '';
		height: 15px;
		width: 2px;
		display: block;
		position: absolute;
		top: 4px;
		background: #fff;
	}
	@media (max-width: 1199px) {
		top: 130px;
	}
	@media (max-width: 991px) {
		top: 110px;
	}
`;

export const Category = styled.span`
	color: #333;
	text-align: center;
	color: #fff;
	font-weight: 700;
	font-size: 15px;
	padding-left: 6px;
	display: block;
	width: 150px;
	text-align: left;
	@media (max-width: 991px) {
		font-size: 14px;
	}
`;

export const LoadingAllContent = styled.div`
	width: 100%;
	svg {
		animation: ${rotate} 1s infinite;
		color: #333;
		font-size: 18px;
		display: table;
		margin: 25px auto;
	}
`;

export const PostList = styled.ul`
	margin-bottom: 0px;
	div {
		overflow: hidden;
		::-webkit-scrollbar {
			display: none;
		}

		::-webkit-scrollbar-track {
			display: none;
		}

		::-webkit-scrollbar-thumb {
			display: none;
		}

		::-webkit-scrollbar-thumb:hover {
			display: none;
		}
	}
`;

export const NoContentDiv = styled.div`
	margin: 35px auto;
	display: table;
`;

export const NoContentImg = styled.img`
	height: 90px;
	width: 90px;
	margin: 5px auto;
	display: table;
`;

export const NoContentP = styled.p`
	color: #999;
	font-size: 16px;
	margin: 0 auto;
	display: table;
`;

export const ByTagDiv = styled.ul`
	display: block;
	margin: 8px 0;
`;

export const ByTag = styled.b`
	color: #333;
	font-size: 11px;
	margin: 15px 5px 15px 0px;
	font-weight: 900;
	width: 20px;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const ByTagName = styled.span`
	color: #999;
	font-size: 13px;
	margin-top: 15px;
	margin-bottom: 15px;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const StickyWrapper = styled.div`
	position: sticky;
	top: 60px;
`;
