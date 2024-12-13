'use client';

import { PropsWithChildren, useState } from 'react';

import { TooltipProps } from './types';

import styles from './styles.module.scss';

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
      data-testid="tooltip-wrapper"
    >
      {children}
      {isTooltipVisible && (
        <div className={styles.tooltip} data-testid="tooltip-content">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};
