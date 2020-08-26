import React from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { components } from './Nav-styles';
import Container from '../Container';

function Nav() {
	return (
		<>
			<Container className={cx("nav-container", components.className)}>
				<motion.h2
					initial="hidden"
					animate="visible"
					variants={{ hidden: { y: -100 }, visible: { y: 0 } }}
					className={cx("nav-title", components.className)}
				>
					Tigrenator
				</motion.h2>
			</Container>
			{components.styles}
		</>
	)
}

export default Nav;