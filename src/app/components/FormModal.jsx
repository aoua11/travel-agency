'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [post, setPost] = React.useState({
    name: '',
    destination: '',
    price: 0,
    date: '',
    rate: 0,
    image: '',
    description: ''
  }) 

  const handleInput = (e) => {
    setPost({...post, [e.target.name]: e.target.value})
  }

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/travels', post)
    console.log("went here")
  }

  return (
    <div>
      <Button className='bg-[#5AC2B9] text-white pr-4 pl-4 ml-20 pt-2 pb-2 rounded-lg' onClick={handleOpen}><img src="/create.svg" className="w-8 inline-block pr-2"/>create new destination</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={submit} className='flex flex-col gap-4 '>
            <div className='flex gap-2'>
                <h2>Name:</h2>
                <input onChange={handleInput} name='name' className='border border-slate-500 rounded-full w-full' type='text'/>
            </div>
            <div  className='flex gap-2'>
                <h2>Destination:</h2>
                <input onChange={handleInput} name='destination' className='border border-slate-500 rounded-full w-full' type='text'/>
            </div>
            <div className='flex gap-2'> 
                <h2>Price:</h2>  
                <input onChange={handleInput} name='price' className='border border-slate-500 rounded-full w-full' type='number'/>
            </div>
            <div className='flex gap-2'>
                <h2>Date:</h2>
                <input onChange={handleInput} name='date' className='border border-slate-500 rounded-full w-full' type='text'/>
            </div>
            <div className='flex gap-2'>
                <h2>Rate:</h2>
                <input onChange={handleInput} name='rate' className='border border-slate-500 rounded-full w-full' type='number'/>
            </div>
            <div className='flex gap-2'>
                <h2>Image:</h2>
                <input onChange={handleInput} name='image' className='border border-slate-500 rounded-full w-full' type='text'/>
            </div>
            <div className='flex gap-2'>
                <h2>Description:</h2>
                <input onChange={handleInput} name='description' className='border border-slate-500 rounded-full w-full' type='string'/>
            </div>
            <div className='flex justify-center'>
            <input className='bg-[#5AC2B9] text-white w-3/4 pr-4 pl-4 pt-2 pb-2 rounded-lg hover:cursor-pointer' type='submit'></input>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
