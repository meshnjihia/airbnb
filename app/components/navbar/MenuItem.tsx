"use client";
import React from 'react'
interface MenuItemProps{
  
  onClick: () => void;
  label: string;
  onClose: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, onClose }) => {
  const handleClick = () => {
    onClick()
    onClose()
  }
  return (
    <div  onClick={handleClick} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
      {label}
    </div>
  )
}

export default MenuItem