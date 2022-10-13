import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { InputDefault, InputRootProps } from './index';

export default {
  title: 'Components/InputDefault',
  component: InputDefault.Root,
  args: {
    children: [
      <InputDefault.Icon>
        <Envelope />
      </InputDefault.Icon>,
      <InputDefault.Input placeholder='Type your e-mail address' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};

export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: <InputDefault.Input placeholder='Type your e-mail address' />
  }
};
