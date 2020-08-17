import React, { useState, useRef, useCallback, useEffect } from 'react';
import cx from 'classnames';
import { baseStyles } from './Dropdown-styles';

type DropdownProps = {
	value?: string | number;
	placeholder: string;
	className?: string;
	onChange: (value: string | number) => void;
	options: Array<{ label: string, value: string | number }>
}
function Dropdown(props: DropdownProps) {
	const ref = useRef(null)
	const { value, placeholder, onChange, options, className } = props;
	const currentValue = options?.find(e => e.value === value);
	const [open, setOpen] = useState(false);
	
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
				setOpen(false)
      }
    },
    [ref.current],
  )
  useEffect(() => {
    document.addEventListener('click', clickListener)
    return () => {
      document.removeEventListener('click', clickListener)
    }
	}, [])
	
	return (
		<div className={cx("dropdown", className)} ref={ref}>
			<button
				className="dropdown-btn"
				onClick={() => setOpen(!open)}
			>
				<span>{currentValue?.label || placeholder}</span>
				<svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="12" height="12" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
			</button>
			<div className={cx("dropdown-content", { active: open })}>
				{options?.map(option => (
					<button onClick={() => [onChange(option.value), setOpen(false)]}>{option.label}</button>
				))}
			</div>
			<style jsx>{baseStyles}</style>
		</div>
	)
}

export default Dropdown;