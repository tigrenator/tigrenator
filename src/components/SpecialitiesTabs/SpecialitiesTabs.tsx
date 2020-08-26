import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { motion } from "framer-motion";
import { baseStyles } from './SpecialitiesTabs-styles';
import Underline from './Underline';
import { Speciality } from '../../types/Calculator';
import { components } from '../EnhancersBox/EnhancersBox-styles';
import { containerAnimation } from './utils';

type SpecialitiesProps = {
  data: Speciality[];
}
function SpecialitiesTabs(props: SpecialitiesProps) {
  const { data } = props;
  const [animating, setAnimating] = useState<boolean>(false);
  const [activeRoute, setActiveRoute] = useState<string>("");

  const tabRefs = data?.reduce((acc, item) => {
    acc[item._id] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    setActiveRoute(data?.[0]?._id);
  }, [data]);

  function onActivateTab(route: string) {
    setActiveRoute(route);
    setAnimating(true);
  }

  if(!data) return null;

	return (
    <div className="w-3/4">
      <motion.div
        className="relative"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <ul role="tablist" aria-orientation="horizontal" className="tabs-list">
          {data?.map((item, index) => (
             <li className="sp-item" key={`tab-${item._id}`}>
              <div
                className={cx("sp-tab", { active: activeRoute === item._id , animating })}
                ref={tabRefs[item._id]}
                onClick={() => onActivateTab(item._id)}
                style={{
                  borderTopLeftRadius: index === 0 ? "15px" : "0",
                  borderTopRightRadius:  index === data.length - 1 ? "15px" : "0"
                }}
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
        <Underline
          tabRef={tabRefs[activeRoute]}
          onFinishAnimation={() => setAnimating(false)}
          animating={animating}
        />
      </motion.div>
      <style jsx>{baseStyles}</style>
      {components.styles}
    </div>
	)
}

export default SpecialitiesTabs;