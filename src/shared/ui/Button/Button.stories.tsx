import { Button } from '@shared/ui/Button/Button';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@shared/ui';

const meta: Meta<typeof Button> = {
  title: 'Shared/UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryRectangle: Story = {
  args: {
    text: 'Primary',
    appearance: 'primary',
    shape: 'rectangle',
  },
};

export const SecondaryRectangle: Story = {
  args: {
    text: 'Secondary',
    appearance: 'secondary',
    shape: 'rectangle',
  },
};

export const PrimarySquare: Story = {
  args: {
    text: '+',
    appearance: 'primary',
    shape: 'square',
  },
};

export const SecondarySquare: Story = {
  args: {
    text: '+',
    appearance: 'secondary',
    shape: 'square',
  },
};

export const IconButtonPrimarySquare: Story = {
  args: {
    appearance: 'primary',
    shape: 'square',
    icon: <Icon name="ChevronLeft" size={20} strokeWidth={4} />,
  },
};

export const IconButtonSecondarySquare: Story = {
  args: {
    appearance: 'secondary',
    shape: 'square',
    icon: <Icon name="ChevronLeft" size={20} strokeWidth={4} />,
  },
};

export const IconTextButtonSecondary: Story = {
  args: {
    appearance: 'secondary',
    shape: 'rectangle',
    icon: <Icon name="Plus" size={18} strokeWidth={4} />,
    text: 'IconTextButton',
  },
};
