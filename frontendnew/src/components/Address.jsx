import React, { useState } from 'react';
import { Button } from '@nextui-org/button';
import { ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { addAddress } from '@/services/operations/authAPI';
const Address = ({ isOpen, onOpen, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
    state: '',
    address: '',
    city: ''
  });

  const {user} = useSelector((state)=>state.profile);
  // console.log(user)
  const { name, mobile, pincode, state, address, city } = formData;
  const userId = user._id;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await addAddress({userId,formData})
    // console.log(res)
    // reload window 
    onOpenChange(false); // Close the modal after submission
    window.location.reload(); 
  };

  return (
    <div>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"> ADD NEW ADDRESS </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <Input
                  type='text'
                  label='Name'
                  name='name'
                  value={name}
                  onChange={handleChange}
                  isRequired
                  fullWidth
                  className='mb-4'
                />
                <Input
                  type='number'
                  label='Mobile'
                  name='mobile'
                  value={mobile}
                  onChange={handleChange}
                  isRequired
                  fullWidth
                  className='mb-4'
                />
                <div className='block lg:flex gap-2 mb-4'>
                  <Input
                    type='number'
                    label='Pincode'
                    name='pincode'
                    value={pincode}
                    onChange={handleChange}
                    isRequired
                    fullWidth
                    className='mb-4 lg:mb-0'
                  />
                  <Input
                    type='text'
                    label='City / District'
                    name='city'
                    value={city}
                    onChange={handleChange}
                    isRequired
                    fullWidth
                  />
                </div>
                <Input
                  type='text'
                  label='Address (House No, Building, Street, Area)'
                  name='address'
                  value={address}
                  onChange={handleChange}
                  isRequired
                  fullWidth
                  className='mb-4'
                />
                <Input
                  type='text'
                  label='State'
                  name='state'
                  value={state}
                  onChange={handleChange}
                  isRequired
                  fullWidth
                />
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Save
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </div>
  );
};

export default Address;
