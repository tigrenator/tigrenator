import React, { ReactNode } from 'react';
import cx from 'classnames';
import { baseStyles } from './Container-styles';


type ContainerProps = {
	children: ReactNode
	className?: string
}

function Container(props: ContainerProps) {
	const { children, className } = props;

	return (
		<div className={cx('container', className)}>
      {children}
      <style jsx>{baseStyles}</style>
    </div>
	)
}

export default Container;