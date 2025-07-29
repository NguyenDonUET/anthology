import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title: 'An Important Message',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia laoreet eros, id scelerisque lectus gravida eu. Proin velit metus, semper a venenatis scelerisque, hendrerit vel nulla. In ultricies urna interdum neque congue, at viverra arcu varius. Nullam faucibus ipsum eu bibendum tristique. Ut accumsan, ipsum eleifend ullamcorper eleifend, libero lorem pretium metus, placerat molestie metus massa vel nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent quis efficitur risus. Maecenas mollis rhoncus ipsum, a lobortis ligula.',
  },
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'Title of the callout',
    },
    children: {
      name: 'Content',
      control: 'text',
      description: 'Content of the callout',
    },
    type: {
      name: 'Type',
      control: 'select',
      options: ['default', 'primary', 'information', 'success', 'warning', 'danger'],
      description: 'Type of callout',
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    type: 'primary',
  },
};

export const Information: Story = {
  args: {
    type: 'information',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
};
