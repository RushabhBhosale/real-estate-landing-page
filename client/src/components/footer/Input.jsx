import React, { useState } from 'react'

const Input = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/',{
        method: 'post',
        body: JSON.stringify({email}),
        headers: {
          "Content-Type" : "application/json"
        },
      });
      const result = await response.json();
      console.log(result);
      setEmail('');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        className='w-full h-[42px] rounded-lg'
        placeholder='   Email Id' />
      <button type="submit" className='w-full py-2 text-white mt-3 rounded-lg bg-tertiary'>Subscribe</button>
    </form>
  )
}

export default Input