'use client';

import { PropsWithChildren, useState } from 'react';

import styles from './styles.module.scss';

interface TooltipProps {
  text: string;
}
export const Tooltip = ({
  children,
  text,
}: PropsWithChildren<TooltipProps>) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const mouseEnterHandler = () => {
    setIsTooltipVisible(true);
  };

  const mouseLeaveHandler = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
      {isTooltipVisible && (
        <div className={styles.tooltip}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};
