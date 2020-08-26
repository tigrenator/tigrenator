import React, { useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { baseStyles, components } from './SearchBar-styles';

function SearchBar() {
	const [inputText, setInputText] = useState<string>("");

	return (
		<motion.div
			className={cx("search-bar", components.className)}
			initial="hidden"
			animate="visible"
			variants={{  hidden: { opacity: 0 }, visible: {  opacity: 1, transition: { delay: 1, duration: 1 } } }}
		>
			<div className="flex flex-row items-center flex-1"> 
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="mr-8"
					fill="#CDB399"
					width="18"
					height="18"
					viewBox="0 0 24 24"
				>
						<path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
				</svg>
				<input
					className="sb-input"
					onChange={e => setInputText(e.target.value)}
					placeholder="Escribe lo que buscas, palabras claves, etc"
					value={inputText}
				/>
			</div>

			<button className="sb-btn">Buscar</button>
			<style jsx>{baseStyles}</style>
			{components.styles}
		</motion.div>
	)
}

export default SearchBar;