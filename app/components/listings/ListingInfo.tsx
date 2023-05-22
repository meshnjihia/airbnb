'use client'
import React from 'react'
import dynamic from 'next/dynamic';

import { IconType } from 'react-icons';

import { SafeUser } from '@/types'
import useCountries from '@/app/hooks/useCountries';

import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';
import Map from '../Map';
import MapLocation from '../Map';

const NewMap = dynamic(() => import('../Map'), {
  ssr: false
})

interface ListingInfoProps{
  user: SafeUser;
  description: string
  guestCount: number
  roomCount: number
  bathroomCount: number
  category: {
    icon: IconType
    label: string
    description: string
  } | undefined
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
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-semibold flex flex-row items-center gap-2'>
          <div>
            Hosted by {user?.name}
          </div>
          <Avatar src={user?.image}/>
        </div>
        <div className='flex flex-row gap-4 items-center font-light text-neutral-500'>
          <div>
            {guestCount} Guests
          </div>
          <div>
            {roomCount} Rooms
          </div>
          <div>
            {bathroomCount} Bathrooms
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className='font-light text-lg text-neutral-500'>
        {description}
      </div>
      <hr />
      <MapLocation center={coordinates}/>
    </div>
  )
}

export default ListingInfo