import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import LoginForm from '../Login/LoginForm'
import SignUpForm from '../Login/SignUpForm'

const Profile = () => {
    const [log, setLog] = useState(true);
    const { token } = useSelector((state) => state.auth);
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
                    <p className='bg-[#242F66] rounded-sm text-[#ffffff] px-4 py-2 hover:text-[#242F66] hover:bg-inherit'>Dashboard</p>
                ):( <Dialog>
                    <DialogTrigger className='bg-[#242F66] rounded-sm text-[#ffffff] px-4 py-2 hover:text-[#242F66] hover:bg-inherit'>Login / Signup</DialogTrigger>
                    {log ? (
              <LoginForm setLog={setLog} />
            ) : (
              <SignUpForm setLog={setLog} />
            )}
                </Dialog>)}
           

            </DropdownMenuLabel>
          
        </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}

export default Profile
