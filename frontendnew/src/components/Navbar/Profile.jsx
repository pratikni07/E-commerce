import React from 'react';
import { Badge } from '@nextui-org/badge';
import { User } from 'lucide-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '../ui/button';

const Profile = () => {
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
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Profile;
