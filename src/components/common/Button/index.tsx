import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}
export function Button({ children }: ButtonProps) {
  return (
    <>
      <button
        className={clsx(
          'py-4 px-3 bg-cyan-500 font-semibold text-black text-sm w-full rounded hover:bg-cyan-300 transition-colors cursor-pointer focus:ring-2 ring-gray-800',
          {}
        )}
      >
        {children}
      </button>
    </>
  );
}
