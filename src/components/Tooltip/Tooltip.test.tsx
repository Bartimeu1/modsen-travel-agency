import { TooltipProps } from './types';
import { Tooltip } from './';

import { fireEvent,render } from '@testing-library/react';

const MOCKED_PROPS: TooltipProps = {
  text: 'mocked text',
};

describe('Tooltip component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Tooltip {...MOCKED_PROPS} />);

    const tooltipWrapper = getByTestId('tooltip-wrapper');

    expect(tooltipWrapper).toBeInTheDocument();
  });

  it('shows the tooltip on mouse enter and hides it on mouse leave', () => {
    const { getByText, queryByText } = render(
      <Tooltip {...MOCKED_PROPS}>
        <button>Hover me</button>
      </Tooltip>,
    );

    const triggerElement = getByText('Hover me');

    expect(queryByText(MOCKED_PROPS.text)).not.toBeInTheDocument();

    fireEvent.mouseEnter(triggerElement);
    expect(getByText(MOCKED_PROPS.text)).toBeInTheDocument();

    fireEvent.mouseLeave(triggerElement);
    expect(queryByText(MOCKED_PROPS.text)).not.toBeInTheDocument();
  });

  it('handles multiple tooltips independently', () => {
    const { getByText, queryByText } = render(
      <div>
        <Tooltip text="First Tooltip">
          <button>First</button>
        </Tooltip>
        <Tooltip text="Second Tooltip">
          <button>Second</button>
        </Tooltip>
      </div>,
    );

    const firstButton = getByText('First');
    const secondButton = getByText('Second');

    fireEvent.mouseEnter(firstButton);
    expect(getByText('First Tooltip')).toBeInTheDocument();
    expect(queryByText('Second Tooltip')).not.toBeInTheDocument();

    fireEvent.mouseLeave(firstButton);
    fireEvent.mouseEnter(secondButton);
    expect(queryByText('First Tooltip')).not.toBeInTheDocument();
    expect(getByText('Second Tooltip')).toBeInTheDocument();
  });
});
