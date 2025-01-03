'use client';

import { useRef, useState } from 'react';
import classNames from 'classnames';

import { ChevronIcon } from '@root/constants';
import { useOnClickOutside } from '@root/hooks';

import { SelectProps } from './types';

import styles from './styles.module.scss';

export const Select = (props: SelectProps) => {
  const { name, className, options, onSelect, targetOption } = props;

  const selectRef = useRef(null);

  const [isSelectActive, setIsSelectActive] = useState(false);

  const onLabelClick = () => {
    setIsSelectActive((prevState) => !prevState);
  };

  const onSelectClose = () => {
    setIsSelectActive(false);
  };

  const onOptionClick = (option: string) => () => {
    onSelect(name, option);
    onSelectClose();
  };

  useOnClickOutside(selectRef, onSelectClose);

  return (
    <div
      className={classNames(styles.select, className)}
      ref={selectRef}
      data-testid="select"
    >
      <div
        onClick={onLabelClick}
        className={classNames(styles.label, {
          [styles.active]: isSelectActive,
        })}
        data-testid="select-label"
      >
        <p>{targetOption}</p>
        <ChevronIcon />
      </div>
      {isSelectActive && (
        <div className={styles.dropdown} data-testid="select-dropdown">
          {options.map(({ id, value }) => (
            <button
              key={id}
              onClick={onOptionClick(value)}
              className={styles.option}
              data-testid="select-dropdown-option"
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
