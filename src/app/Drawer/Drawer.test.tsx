import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Drawer from '.';
import { LINKS } from 'constants/app';

describe('<Drawer />', () => {
  const open = true;
  const onClose = jest.fn();

  test('should display navigation links', () => {
    render(<Drawer open={open} onClose={onClose} />);
    LINKS.forEach((link) => {
      const title = screen.getByText(link.title);
      expect(title).toBeInTheDocument();
    });
  });

  test('should call onClose() when close button click', () => {
    render(<Drawer open={open} onClose={onClose} />);

    const closeButton = screen.getByRole('button', { name: /close menu/i });
    userEvent.click(closeButton);

    expect(onClose).toBeCalledTimes(1);
  });
});
