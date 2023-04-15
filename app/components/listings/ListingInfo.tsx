import { SafeUser } from '@/types'
import React from 'react'

interface ListingInfoProps{
  user: SafeUser;
  category: string
  description: string
  roomCount: number
  guestCount: number
  bathroomCount: number
  locationValue: string
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  guestCount,
  description,
  roomCount,
  bathroomCount,
  locationValue
}) => {
  return (
    <div>ListingInfo</div>
  )
}

export default ListingInfo