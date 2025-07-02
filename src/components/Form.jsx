import React, {useState} from 'react'
import Cards from './Cards'

const Form = () => {
    const[userName, setUserName] = useState("")
    const[email, setEmail] = useState('')
    const[phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] =  useState('')
    const [gender, setGender] = useState('')
    const [nameError, setNameError] = useState("");
    const [mailError, setMailError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [userCard, setUserCard] = useState([])
    const [showCards, setShowCards] = useState(false)
    const submitData = (e) => {
    e.preventDefault(); 
      
    setNameError('');
    setMailError('');
    setAddressError('');
    setGenderError('');
    setNumberError('');
    let valid = true;
    let g = gender.trim().toLowerCase()
    console.log({ userName, email, gender, phoneNumber, address });
     
    if(userName.length < 8){
        setNameError('your name should be at least 8 characters long.')
        valid = false
    }
     if(!email.includes('@')){
        setMailError('Please enter a valid email.')
        valid = false
    }
    if(g !== 'male' && g !== 'female'){
        setGenderError('You no sabi your gender keh!!!!')
        valid = false;
    }
    if(address.trim() === ""){
        setAddressError("Address is needed.")
        valid = false
    }
    if(isNaN(phoneNumber) || phoneNumber.trim() === ''){
        setNumberError('Please enter a valid Phone Number.')
        valid = false
    }
        if (valid) {
      const cardTag = {
        userName,
        email,
        phoneNumber,
        address,
        gender: g,
        id: Date.now()
      };

      setUserCard([...userCard, cardTag]);
      setUserName('');
      setEmail('');
      setPhoneNumber('');
      setAddress('');
      setGender('');
    }
    
}
  return (

    <div className=' flex h-dvh w-[100%]'>
        <section className=' bg-amber-800 w-[30%] bg-[url(/bg.jpg)] bg-top bg-cover flex flex-col justify-center'>
        <div className=' backdrop-blur-md p-6 '>
            <h1 className=' text-white text-[50px]'>NEXSUS</h1>
            <p className=' text-white text-[30px]'>Emphasizes connection and collaboration.</p>
            </div>
        </section>

        <section className=' w-[60%] p-16'>

        <div className=' bg-[#1c71c1] rounded-[20px] p-2'>
        <h1 className=' text-center text-[40px] text-white '>Fill the Form Below to Get a Tag</h1>
        <form onSubmit={submitData} className='flex flex-col '>
        <label htmlFor="UserName"  className=' text-white text-[25px]'>FullName:</label>
        <input type="text"  value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder='e.g john Doe' className=' border py-1 px-3 '/>
        {nameError && <p className=' text-red-500 text-center'>{nameError}</p>}
        <label htmlFor="Email" className=' text-white text-[25px]'>Email:</label>
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='e.g @gamil.com' className=' border py-1 px-3 '/>
        {mailError &&  <p className=' text-red-500 text-center'>{mailError}</p>}
        <label htmlFor="gender" className=' text-white text-[25px]'>Gender:</label>
        <input type="text" value={gender} onChange={(e)=> setGender(e.target.value)} placeholder='Male / Female' className=' border py-1 px-3 '/>
        {genderError && <p className=' text-red-500 text-center'>{genderError}</p>}
        <label htmlFor="Phone Number" className=' text-white text-[25px]'>Phone Number:</label>
        <input type="number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} placeholder='090********' className=' border py-1 px-3 '/>
        {numberError&& <p className=' text-red-500 text-center'>{numberError}</p>}
        <label htmlFor="Address" className=' text-white text-[25px]'>Address:</label>
        <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} placeholder='!2 Davis street' className=' border py-2 px-1 '/>
        {addressError && <p className=' text-red-500 text-center'>{addressError}</p>}
        <div className=' flex items-center justify-center p-3'>
        <button type='submit' className=' bg-white  w-34 px-5 py-3 text-[20px] rounded-[10px] hover:bg-[#1c2cc183] hover:text-white'>Submit</button>
        </div>
        </form>
        
        </div>
        </section>
        <section className=' w-[10%]'>
            <button onClick={()=> setShowCards(!showCards)} className=' bg-[#1c71c1] py-2 px-4 mt-2 rounded-[10px] text-white'>
            {showCards ? 'Hide Cards' : 'Show Cards'}
        </button>
            
        {showCards && (
            <div className=' inset-0 fixed bg-[#1c71c1]'>
                <p className=' cursor-pointer   text-white py-2 px-2 ' onClick={()=> setShowCards(!showCards)}>Hide cards</p>
            <Cards userCard = {userCard} />
            </div>
        )}
        
        </section>
    </div>
  )
}

export default Form