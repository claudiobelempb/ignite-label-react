import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className='flex items-center gap-3 py-4 px-3 w-full rounded bg-gray-800  focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  );
}

InputRoot.displayName = 'Input.Root';

export interface InputIconProps {
  children: ReactNode;
}

function InputIcon({ children }: InputIconProps) {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>;
}

InputIcon.displayName = 'Input.Icon';

export interface InputDefaultProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputDefaultProps) {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1 h-12 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      )}
      {...props}
    />
  );
}

Input.displayName = 'Input.Default';

export const InputDefault = { Root: InputRoot, Input: Input, Icon: InputIcon };
