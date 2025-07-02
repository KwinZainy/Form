import React from 'react'

const Cards = ({userCard}) => {
   if(userCard.length === 0){
    return <p>No cards Available</p>
   }
  return (
    <div className='bg-white h-screen overflow-y-auto'>
      <p className=' bg-[#1c71c1] flex justify-center p-10 font-bold text-white text-[40px]'>TAG CARDS</p>
      <div className='bg-white flex flex-wrap gap-6 mt-6 '>
      {userCard.map((tag, i)=>(
          <section  key={i} className=' w-[40%] bg-[#1c71c1] rounded-[10px] m-9'>
          <h1 className=' text-white border-b p-3 text-[20px]'><b>Name: {tag.userName}</b></h1>
          <p className=' text-white border-b p-3 text-[20px] '><i>Email: {tag.email}</i></p>
          <p className=' text-white border-b p-3 text-[20px]'>Gender: {tag.gender}</p>
          <p className=' text-white border-b p-3 text-[20px]'>Phone Number: {tag.phoneNumber}</p>
          <p className=' text-white border-b p-3 text-[20px]'> Address: {tag.address}</p>
          
          </section>
        
      ))}
      </div>
    </div>
  )
}

export default Cards