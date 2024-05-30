import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, Button, DropdownTrigger, Dropdown, DropdownMenu, Badge} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";
import { Search , User ,ShoppingBag} from "lucide-react";
import Profile from "./Profile.jsx";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { SearchBar } from "../SearchBar.jsx";
export default function Navbar1() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={60} />,
    lock: <Lock className="text-success" fill="currentColor" size={60} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={60} />,
    flash: <Flash className="text-primary" fill="currentColor" size={60} />,
    server: <Server className="text-success" fill="currentColor" size={60} />,
    user: <TagUser className="text-danger" fill="currentColor" size={60} />,
  };

  return (
    <Navbar className="textColor w-full">
      <NavbarBrand>
        <p className="font-bold text-inherit">House Of Unique</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4"  justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="textColor p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                <p className="textColor flex text-[16px] "> Mens  </p>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="textColor p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                <p className="textColor flex text-[16px] "> Womens   </p>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem >
        {/* <NavbarItem isActive> */}
          <Link href="#" aria-current="page">
          <p className="textColor"> Categories </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#">
            <p className="textColor"> About Us </p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="cursor-pointer align-middle">
        <NavbarItem>
        <p onClick={onOpen} className="bg-transparent hover:bg-transparent active:bg-transparent border-none hover:border-none active:border-none p-0 m-0">
          <Search color="#8E3E63" />
        </p>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            <SearchBar/>
          </ModalContent>
        </Modal>
        </NavbarItem>
        <NavbarItem>
          <Profile/>
        </NavbarItem>
        <NavbarItem>
          <Badge content="5" >
            <ShoppingBag />
          </Badge>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
