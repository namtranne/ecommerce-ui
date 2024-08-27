import React from 'react'
import { useWishlist } from '../../hooks/useUser';
import WishlistItem from '../Wishlist/WishlistItem.jsx';

export const UserWishlist = () => {
  const { isLoading, data: wishlistItems } = useWishlist();
  console.log(wishlistItems);
  return (
    <div className='flex flex-col w-full'>
      <h1 className=''>My Wishlist</h1>
      <WishlistItem products={wishlistItems} />
    </div>
  )
}