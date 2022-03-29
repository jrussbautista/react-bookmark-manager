import { screen, render, userEvent } from 'test/utils';
import Navbar from '.';
import { LINKS } from 'constants/app';

describe('<Navbar />', () => {
  test('should display navigation links', () => {
    render(<Navbar />);
    LINKS.forEach((link) => {
      const title = screen.getByText(link.title);
      expect(title).toBeInTheDocument();
    });
  });

  describe('Handle drawer flow', () => {
    test('should open drawer when menu button click', () => {
      render(<Navbar />);

      // open drawer menu
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      userEvent.click(menuButton);

      const drawer = screen.getByRole('presentation');
      expect(drawer).toBeInTheDocument();
    });

    test('should close drawer when close button click', () => {
      render(<Navbar />);

      // open drawer menu
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      userEvent.click(menuButton);

      // close drawer menu
      const closeButton = screen.getByRole('button', { name: /close menu/i });
      userEvent.click(closeButton);

      const drawer = screen.queryByRole('presentation');
      expect(drawer).not.toBeInTheDocument();
    });
  });
});
