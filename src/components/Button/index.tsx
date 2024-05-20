import React from 'react'
import classnames from 'classnames'

export type ChlidProps = {
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  className?: string | undefined
  theme?: 'light' | 'dark'
  style?: React.CSSProperties | undefined // 根组件样式
  onClick?: (e: any) => void
}

export default function Button(props: ChlidProps) {
  const {
    size = 'medium',
    children,
    className,
    theme = 'dark',
    style,
    onClick,
  } = props
  const themeClasses =
    theme === 'dark'
      ? ['bg-[#2F2F2F]', 'text-[#fff]', 'px-[1.68rem]', 'py-[16px]']
      : [
          'bg-[#fff]',
          'text-[#262626]',
          'border-2',
          'border-solid',
          'border-[#262626]',
          'px-[1.68rem]',
          'py-[14px]',
        ]
  const sizeClasses =
    size === 'medium'
      ? [
          'text-16px',
          'max-w-[134px]',
          theme === 'dark' ? 'py-[16px]' : 'py-[14px]',
        ]
      : size === 'large'
        ? ['w-full', 'text-12px', theme === 'dark' ? 'py-[12px]' : 'py-[10px]']
        : [
            'text-12px',
            'max-w-[92px]',
            theme === 'dark' ? 'py-[6px]' : 'py-[4px]',
            'px-[10px]',
          ]
  return (
    <div
      className={classnames([
        'inline-block',
        'box-border',
        'w-auto',
        'leading-none',
        'cursor-pointer',
        'rounded',
        'text-center',
        ...themeClasses,
        ...sizeClasses,
        className,
      ])}
      onClick={onClick}
      style={style}
    >
      <span>{children}</span>
    </div>
  )
}
