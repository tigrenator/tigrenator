import React from 'react';
import cx from 'classnames';
import { components, baseStyles } from './Nav-styles';
import Container from '../Container';

function Nav() {
	return (
		<>
			<Container className={cx("nav-container", components.className)}>
				<h2 className="nav-title">Tigrenator</h2>
			</Container>
			{components.styles}
			<style jsx>{baseStyles}</style>
		</>
	)
}

export default Nav;