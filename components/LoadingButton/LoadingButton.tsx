import Image from 'next/image'
import React from 'react'
import LoadingSpinner from '../../assets/img/loading.svg'

interface LoadingButtonProps {
  isLoading?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
  text: string
}

function LoadingButton({ isLoading, disabled, className, onClick, text }: LoadingButtonProps) {
  return (
    <button
      aria-disabled={isLoading || disabled}
      disabled={isLoading || disabled}
      className={className}
      onClick={onClick}
    >
      {isLoading ? <Image className="loading-icon" src={LoadingSpinner} width={30} height={30} /> : text}
    </button>
  )
}

export default LoadingButton
