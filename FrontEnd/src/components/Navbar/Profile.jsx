import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch hook
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../Login/SignUpForm';
import { LayoutDashboard, ShoppingBag, Heart, Gauge, LogOut } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
const Profile = () => {
  const [log, setLog] = useState(true);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const dispatch = useDispatch(); 
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            src="/assets/icons/user.svg"
            alt="User"
            width={29}
            height={29}
            className="mx-3"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {token ? (
              <p className='bg-[#242F66] rounded-sm text-[#ffffff] px-3 py-2 cursor-pointer hover:text-[#242F66] hover:bg-inherit flex gap-2'>
                <LayoutDashboard size={20} /> Dashboard
              </p>
            ) : (
              <>
                <Dialog>
                  <DialogTrigger className='bg-[#242F66] rounded-sm text-[#ffffff] cursor-pointer px-4 py-2 hover:text-[#242F66] hover:bg-inherit'>Login / Signup</DialogTrigger>
                  {log ? (
                    <LoginForm setLog={setLog} />
                  ) : (
                    <SignUpForm setLog={setLog} />
                  )}
                </Dialog>
              </>
            )}
          </DropdownMenuLabel>
          {token && user.role === "Seller" && (
            <DropdownMenuLabel>
                <Link to={'/seller/dashboard'}>
                <p className='bg-[#242F66] rounded-sm text-[#ffffff] px-3 py-2 cursor-pointer hover:text-[#242F66] hover:bg-inherit flex gap-2'>
                <Gauge size={20} /> Seller Dashboard
              </p>
                </Link>
              
            </DropdownMenuLabel>
          )}
          {token && (
            <DropdownMenuLabel>
              <p className='text-[#242F66] px-3 py-1 flex gap-2 cursor-pointer'>
                <ShoppingBag size={20} /> Order Status
              </p>
            </DropdownMenuLabel>
          )}
          {token && (
            <DropdownMenuLabel>
              <p className='text-[#242F66] px-3 py-1 flex gap-2 cursor-pointer'>
                <Heart size={20} /> Wishlist
              </p>
            </DropdownMenuLabel>
          )}
          {
            token && (
                <DropdownMenuSeparator />
            )
          }
          
          {token && (
            <DropdownMenuLabel onClick={handleLogout}> {/* Attach handleLogout function to onClick event */}
              <p className='text-[#242F66] px-3 py-1 flex gap-2 cursor-pointer'>
                <LogOut size={20} /> Logout
              </p>
            </DropdownMenuLabel>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
