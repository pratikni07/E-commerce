import React ,{useState}from 'react';
import { Badge } from '@nextui-org/badge';
import { User, ScanFace, LayoutDashboard,LogOut, ShoppingBag, Heart } from 'lucide-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { Modal, useDisclosure } from "@nextui-org/modal";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
const Profile = () => {
  const { token } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [log, setLog] = useState(true);
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button className="bg-transparent hover:bg-transparent active:bg-transparent border-none hover:border-none active:border-none p-0 m-0">
            <Badge>
              <User color="#8E3E63" />
            </Badge>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions " className='textColor '>
          {token ? (
            <DropdownItem
              key="new"
              startContent={<LayoutDashboard />}
              className="backgroundColor p-2 px-3 text-white font-bold"
            >
              <Link to='/profile'>
              DashBoard
              </Link>
              
            </DropdownItem>
          ) : (
            <DropdownItem
              key="login/signup"
              startContent={<ScanFace />}
              className="flex backgroundColor p-2 px-3 text-white font-bold hover:text-[#8E3E63]"
              onClick={onOpen}
            >
              Login / SignUp
            </DropdownItem>
          )}

          {/* <DropdownItem key="edit">Edit file</DropdownItem> */}
          {
            token && 
            <DropdownItem key="delete" className=" p-2 px-3 " startContent={<ShoppingBag />}>
              <Link to='/orders'>
                <p className='text-[#242F66]cursor-pointer'>
                Order Status
              </p>
              </Link>
            </DropdownItem>
            
          }
          {
            token && 
            <DropdownItem key="delete" className=" p-2 px-3 " startContent={<Heart />}>
              <Link to='/wishlist'>
                <p className='text-[#242F66]cursor-pointer'>
                Whichlist
              </p>
              </Link>
            </DropdownItem>
          }

          {
            token && 
            <DropdownItem key="delete" className="text-danger p-2 px-3 " color="danger" onClick={()=>{ localStorage.clear();
              window.location.reload();}} startContent={<LogOut />}>
                Log Out
            </DropdownItem>
            
          }
          
        </DropdownMenu>
      </Dropdown>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        {
          log ? ( 
            <LoginForm setLog={setLog}  onClose={onClose}/>
          ):(
            <SignUpForm setLog={setLog} onClose={onClose}/>
          )
        }
      </Modal>
    </div>
  );
};

export default Profile;
