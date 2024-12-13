import { SelectProps } from './types';
import { Select } from './';

import { fireEvent, render } from '@testing-library/react';

const MOCKED_PROPS: SelectProps = {
  onSelect: jest.fn(),
  targetOption: 'test option',
  name: 'mocked name',
  options: [
    { id: 1, value: 'first option' },
    { id: 2, value: 'second option' },
  ],
};

describe('FormSelect component', () => {
  test('component should render correctly', () => {
    const { getByTestId } = render(<Select {...MOCKED_PROPS} />);

    const select = getByTestId('select');
    expect(select).toBeInTheDocument();
  });

  test('opens dropdown when select is clicked', () => {
    const { getByTestId } = render(<Select {...MOCKED_PROPS} />);

    const selectLabel = getByTestId('select-label');
    fireEvent.click(selectLabel);

    const selectDropdown = getByTestId('select-dropdown');
    expect(selectDropdown).toBeInTheDocument();
  });

  test('should call onSelect prop with correct value after select', () => {
    const { getByTestId, getAllByTestId } = render(
      <Select {...MOCKED_PROPS} />,
    );

    const selectLabel = getByTestId('select-label');
    fireEvent.click(selectLabel);

    const firstSelectOption = getAllByTestId('select-dropdown-option')[0];
    fireEvent.click(firstSelectOption);

    expect(MOCKED_PROPS.onSelect).toHaveBeenCalledWith(
      MOCKED_PROPS.name,
      MOCKED_PROPS.options[0].value,
    );
  });
});
