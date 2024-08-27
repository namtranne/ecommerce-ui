import React from 'react'

export const UserWishlist = () => {
  return (
    <div className='flex flex-col w-full'>
      <h1 className=''>My Wishlist</h1>
      <WishlistItem products={wishlistItems} />
    </div>
  )
}