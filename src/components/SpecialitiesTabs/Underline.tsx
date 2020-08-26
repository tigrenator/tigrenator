import React from 'react';
import debounce from 'lodash/debounce';
import { motion } from "framer-motion";
import cx from 'classnames';
import css from 'styled-jsx/css';

type UnderlineProps = {
	onFinishAnimation: () => void;
	tabRef: { current: HTMLDivElement }
	animating: boolean;
}
const Underline: React.FC<UnderlineProps> = props => {
	const { tabRef, onFinishAnimation, animating } = props;
	const [{ x, width }, setAttributes] = React.useState({
    x: 0,
    width: 0,
  });

  const updateAttributes = React.useCallback(() => {
    if (tabRef) {
      setAttributes({
        x: tabRef.current.offsetLeft,
        width: tabRef.current.getBoundingClientRect().width,
      });
    }
  }, [tabRef])

  React.useEffect(() => {
    updateAttributes();
  }, [tabRef, updateAttributes]);

  React.useEffect(() => {
    const recalculateAttrs = debounce(() => {
      updateAttributes();
    }, 500);

    window.addEventListener('resize', recalculateAttrs);
    return () => {
      window.removeEventListener('resize', recalculateAttrs);
    };
  });

  return (
    <>
      <motion.div
        className={cx("st-underline", animating ? "opacity-100" : "opacity-0", components.className)}
        animate={{ x, width }}
        onAnimationComplete={onFinishAnimation}
      />
      {components.styles}
    </>
  );
}

const components = css.resolve`
	.st-underline {
		@apply absolute bg-orange-lighter;;
		bottom: 0;
		left: 0;
		height: 3px;
	}
`

export default Underline;