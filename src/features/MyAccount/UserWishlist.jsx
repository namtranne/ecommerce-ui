import React from 'react'
import WishlistItem from '../../features/Wishlist/WishlistItem'
import { useWishlist } from '../../hooks/useUser'

export const UserWishlist = () => {
  const { isLoading, data: wishlistItems } = useWishlist()
  return (
    <div className='flex flex-col w-full'>
      <h1 className=''>My Wishlist</h1>
      <WishlistItem products={wishlistItems} />
    </div>
  )
}