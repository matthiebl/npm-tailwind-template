import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'text'
type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps {
  /**
   * The size of the button
   */
  size?: ButtonSize
  /**
   * Controlls the variant of the button, and its primary styling
   */
  variant?: ButtonVariant
  /**
   * Used to determine if the root component is an anchor tag
   */
  href?: string
  /**
   * This determines whether to use target as `"_blank"` for the anchor tag when href is present
   */
  external?: boolean
  /**
   * Button contents. Only text values are allowed
   */
  children: string
  /**
   * Optional click handler for the button
   */
  onClick?: () => void
}

/**
 * A basic button component for use across a webpage
 */
export const Button = ({
  size = 'medium',
  variant = 'primary',
  href,
  external = false,
  children,
  onClick,
}: ButtonProps) => {
  // styles
  const classSize = (() => {
    switch (size) {
      case 'small':
        return 'rounded px-2.5 py-1'
      case 'large':
        return 'rounded-md px-5 py-2.5'
      default:
        return 'rounded-md px-3.5 py-2'
    }
  })()
  const classVariant = (() => {
    switch (variant) {
      case 'secondary':
        return `bg-white ${classSize} text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:ring-0`
      case 'text':
        return 'text-indigo-600 hover:text-indigo-500 hover:underline dark:text-indigo-500 dark:hover:text-indigo-400'
      default:
        return `bg-indigo-600 ${classSize} text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400`
    }
  })()
  const className = `${classVariant} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-500`

  // anchor tag
  if (href) {
    return (
      <a className={className} href={href} target={external ? '_blank' : undefined}>
        {children}
      </a>
    )
  }

  // button
  return (
    <button type='button' className={className} onClick={onClick}>
      {children}
    </button>
  )
}
