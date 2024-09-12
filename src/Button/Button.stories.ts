import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Gogroup-UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: "contained",
    color: "primary"
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: "outlined",
    color: "secondary"
  },
};
export const Success: Story = {
  args: {
    children: 'Button',
    variant: "contained",
    color: "success"
  },
};
export const Warning: Story = {
  args: {
    children: 'Button',
    variant: "contained",
    color: "error"
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
    color: "success",
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button'
  },
};
