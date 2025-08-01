import { twMerge } from 'tailwind-merge';

import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

const buttonVariants = cva(
  [
    'font-semibold',
    'border',
    'rounded',
    'shadow-sm',
    'inline-flex',
    'items-center',
    'cursor-pointer',
    'gap-1.5',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'transition-colors',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-600',
          'text-white',
          'border-transparent',
          'hover:bg-primary-500',
          'active:bg-primary-400',
          'dark:bg-primary-500',
          'dark:hover:bg-primary-400',
          'dark:active:bg-primary-300',
        ],
        secondary: [
          'bg-white',
          'text-slate-900',
          'border-slate-300',
          'hover:bg-slate-50',
          'active:bg-slate-100',
          'dark:bg-slate-900',
          'dark:text-white',
          'dark:border-slate-900',
          'dark:hover:bg-slate-800',
          'dark:active:bg-slate-700',
        ],
        destructive: [
          'bg-danger-600',
          'text-white',
          'border-transparent',
          'hover:bg-danger-500',
          'active:bg-danger-400',
          'dark:bg-danger-500',
          'dark:hover:bg-danger-400',
          'dark:active:bg-danger-300',
        ],
      },
      size: {
        small: ['text-sm', 'px-2', 'py-1'],
        medium: ['text-sm', 'px-2.5', 'py-1.5'],
        large: ['text-sm', 'px-3', 'py-2'],
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'medium',
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return <button className={twMerge(buttonVariants({ variant, size }))} {...props} />;
};
