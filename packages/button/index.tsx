import { Button as ShadcnButton, type ButtonProps as ShadcnButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export type ButtonProps = ShadcnButtonProps & {
  // Add any additional props here
};

export const Button = ({
  className,
  ...props
}: ButtonProps) => (
  <ShadcnButton
    className={cn(
      'flex flex-col justify-center items-center px-[7px] py-[3px] max-h-[22px] w-[48px]',
      'bg-primary text-primary-foreground font-normal text-xs leading-4',
      'bg-gradient-to-b from-white/[0.17] to-transparent',
      'shadow-primary/25 shadow-[0px_1px_2.5px,0px_0px_0px_0.5px]',
      'rounded-[5px] transition-all',
      className
    )}
    {...props}
  />
);

