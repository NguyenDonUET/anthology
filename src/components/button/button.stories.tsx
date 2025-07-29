import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the button',
      table: {
        disable: true,
      },
    },
    variant: {
      name: 'Variant',
      description: 'Variant of the button',
      control: 'select',
    },
    size: {
      name: 'Size',
      control: 'select',
      description: 'Size of the button',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the button',
      table: {
        defaultValue: {
          summary: 'false',
          detail: 'Defers to the built-in HTML attribute.',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
export const Medium: Story = {
  args: {
    size: 'medium',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
  },
};

// export const DarkMode: Story = {
//   parameters: {
//     themes: {
//       themeOverride: 'dark',
//     },
//   },
// };
// export const Mobile: Story = {
//   parameters: {
//     viewport: {
//       defaultViewport: 'mobile1',
//     },
//   },
// };
