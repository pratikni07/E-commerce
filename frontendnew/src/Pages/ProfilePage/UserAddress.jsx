import { Button } from '@nextui-org/button';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, useDisclosure } from "@nextui-org/modal";
import Address from '@/components/Address';
import { getAllAddress } from '@/services/operations/authAPI';

const UserAddress = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { user } = useSelector((state) => state.profile);
    const userId = user._id;
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const res = await getAllAddress({ userId });
            setAddress(res.data.address);
        }
        fetch();
    }, [userId]);

    return (
        <div>
            <div className='w-[90%] lg:w-[85%] m-auto mb-[300px]'>
                <h1 className='text-3xl font-bold mb-9 mt-8 textColor flex justify-center'>Address</h1>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-full lg:w-[65%] px-5 mb-8 lg:mb-0'>
                    <div className='flex justify-between items-center mb-5'>
                        <h2 className='text-lg font-bold'>Select Address</h2>

                        <Button onPress={onOpen} className='bg-[#8E3E63] hover:bg-[#7A3457] text-white font-bold py-2 px-4 rounded text-[12px] '>Add New Address</Button>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <Address isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
                        </Modal>
                    </div>
                    <div>
                        {address.map((add, index) => (
                        <div key={index} className='flex flex-wrap justify-between gap-4 mb-6'>
                            <div className='w-full bg-slate-100 p-4 rounded'>
                            <label className='flex items-center'>
                                <span className='ml-2 font-bold'>{add.name}</span>
                            </label>
                            <p>{`${add.address} ${add.city} ${add.state} ${add.pincode}`}</p>
                            <p>{add.mobile}</p>
                            </div>
                        </div>
                        ))}
                        <hr />
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserAddress
