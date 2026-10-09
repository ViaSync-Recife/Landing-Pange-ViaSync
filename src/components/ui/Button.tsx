import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'dark' | 'light' }>

export function Button({ children, className = '', variant = 'dark', ...props }: ButtonProps) {
  return <a className={`aeye-button aeye-button--${variant} ${className}`.trim()} {...props}>{children}</a>
}
