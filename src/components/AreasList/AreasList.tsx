import React from 'react';
import cx from 'classnames';
import { motion } from "framer-motion";
import { AreasListProps, IconProps } from '../../types/Calculator';
import { components } from './AreasList-styles';
import { AREAS } from '../../enums';
import { containerAnimation, areaAnimation } from './utils';

function AreasList(props: AreasListProps) {
	const { areas, active, onSelect } = props;

	return (
		<motion.ul
			className="flex flex-col w-1/4 mr-12"
			variants={containerAnimation}
			initial="hidden"
			animate="visible"
		>
			{areas.map((area, index) => (
				<motion.li
					key={`area-${index}`}
					className={cx("al-content", { active: active === area }, components.className)}
					variants={areaAnimation}
					onClick={() => onSelect(area)}
				>
					<Icon name={area} />
					<span className="ml-8">{area}</span>
				</motion.li>
			))}
			{components.styles}
		</motion.ul>
	)
}


function Icon(props: IconProps) {
	const { name } = props;

	switch(name) {
		case AREAS.DESIGN: {
			return (
				<div className="bg-yellow-200 p-3 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						className="fill-current text-yellow-400"
						viewBox="0 0 24 24"
					>
						<path d="M11.333 8.701l-7.837 4.262s-1.339 5.254-3.497 8.604l2.419 2.433c3.314-2.133 8.604-3.511 8.604-3.511l4.263-7.837-3.952-3.951zm-1.664 10.091c-1.241.365-3.64 1.131-5.915 2.207l1.806-1.806c.348-.349.8-.569 1.288-.63.647-.081 1.113-.63 1.113-1.263 0-.703-.569-1.275-1.275-1.275-.637 0-1.183.471-1.263 1.113-.06.487-.281.94-.629 1.288l-1.779 1.779c1.072-2.274 1.825-4.652 2.184-5.891l5.778-3.143 1.838 1.837-3.146 5.784zm2.345-12.252s2.148-3.969 3.475-6.54l8.511 8.511c-2.582 1.321-6.556 3.459-6.556 3.459l-5.43-5.43z"/>
					</svg>
				</div>
			)
		}
		case AREAS.DEVELOP: {
			return (
				<div className="bg-blue-200 p-3 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						className="fill-current text-blue-400"
						viewBox="0 0 24 24"
					>
						<path d="M13 12v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201zm5.362-12.201c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z"/>
					</svg>
				</div>
			)
		}
		case AREAS.MARKETING: {
			return (
				<div className="bg-red-200 p-3 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						className="fill-current text-red-400"
						viewBox="0 0 24 24"
					>
						<path d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
					</svg>
				</div>
			)
		}
		case AREAS.VISUAL: {
			return (
				<div className="bg-green-200 p-3 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						className="fill-current text-green-400"
						viewBox="0 0 24 24"
					>
						<path d="M4 11c-2.21 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm10 2c.702 0 1.373-.127 2-.35v6.35c0 1.104-.896 2-2 2h-10c-1.104 0-2-.896-2-2v-6.35c.627.223 1.298.35 2 .35 2.084 0 3.924-1.068 5-2.687 1.076 1.619 2.916 2.687 5 2.687zm4 1v4l6 3v-10l-6 3zm-4-11c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/>
					</svg>
				</div>
			)
		}
		default: return null;
	}
}

export default AreasList;