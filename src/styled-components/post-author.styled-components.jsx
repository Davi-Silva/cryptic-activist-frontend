/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rotate } from './animations';


export const Author = styled.div`
	margin: 12px 0;
	ul {
		width: 100%;
		margin-bottom: 0px;
		li {
			list-style: none;
			display: inline-block;
			div {
				transform: translateY(12px);
				@media (max-width: 991px) {
					transform: translateY(10px);
				}
			}
			span {
				color: #333;
				font-weight: 700;
				margin-left: 10px;

				@media (max-width: 991px) {
					font-size: 13px;
				}
			}
		}
	}
	@media (max-width: 991px) {
		margin: 10px 0 14px 0;
	}
`;

export const AuthorLink = styled(Link)`
	&:hover {
		text-decoration: none;
	}
	img {
		height: 50px;
		width: 50px;
		border-radius: 50px;
		transform: translateY(4px);
		@media (max-width: 991px) {
			height: 45px;
			width: 45px;
		}
	}
`;

export const FollowButton = styled.button`
	background-color: #fff;
	border: 1px solid #00b170;
	border-radius: 50px;
	padding: 1px 7px;
	color: #00b170;
	font-size: 12px;
	transform: translateY(-7px);
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		background-color: #00b170;
	}
	@media (max-width: 991px) {
		font-size: 10px;
	}
`;

export const UnfollowButton = styled.button`
	background-color: #00b170;
	border: 1px solid #00b170;
	border-radius: 50px;
	padding: 1px 7px;
	color: #fff;
	font-size: 12px;
	transform: translateY(-7px);
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		background-color: #00b170;
	}
	@media (max-width: 991px) {
		font-size: 10px;
	}
`;


export const LoadingAllContentFollow = styled.button`
	background-color: #fff;
	border: 1px solid #00b170;
	border-radius: 50px;
	padding: 3px 7px;
	width: 66px;
	color: #00b170;
	margin-bottom: 3px;
	font-size: 12px;
	transform: translateY(-4px);
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	svg {
		animation: ${rotate} 1s infinite;
		color: #00b170;
		font-size: 11px;
		display: table;
		margin: 1px auto;
	}
`;


export const LoadingAllContentUnfollow = styled.button`
	background-color: #00b170;
	border: 1px solid #00b170;
	border-radius: 50px;
	padding: 3px 7px;
	width: 75px;
	margin-bottom: 3px;
	color: #fff;
	font-size: 12px;
	transform: translateY(-4px);
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	svg {
		animation: ${rotate} 1s infinite;
		color: #fff;
		font-size: 11px;
		display: table;
		margin: 1px auto;
	}
`;
