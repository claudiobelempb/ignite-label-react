import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { CheckBox, CheckBoxProps } from './index';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    Story => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembrar de min por 30 dias!</Text>
        </div>
      );
    }
  ]
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {};
