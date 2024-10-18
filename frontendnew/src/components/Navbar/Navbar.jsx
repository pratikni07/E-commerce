import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Badge,
  useDisclosure,
  Modal,
  ModalContent,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import { Search, ShoppingBag } from "lucide-react";
import Profile from "./Profile.jsx";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar.jsx";
import { SheetDemo } from "../SheetDemo.jsx";
import { getAllCategories } from "@/services/operations/categoryAPI.js";

export default function Navbar1() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllCategories();
        const filteredCategories = res.filter(
          (x) => x.name === "Mens" || x.name === "Womens"
        );
        setCategories(filteredCategories);
      } catch (error) {
        console.log("Error fetching categories", error);
      }
    };

    fetchData();
  }, []);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={60} />,
    lock: <Lock className="text-success" fill="currentColor" size={60} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={60} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={60} />,
    server: <Server className="text-success" fill="currentColor" size={60} />,
    user: <TagUser className="text-danger" fill="currentColor" size={60} />,
  };

  return (
    <Navbar className="textColor w-full">
      <NavbarBrand>
        <Link to="/">
          <p className="font-bold text-inherit">MegaMart</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {categories.map((category) => (
          <Dropdown key={category._id}>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="textColor p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <p className="textColor flex text-[16px]">{category.name}</p>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label={`${category.name} features`}
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {category.subcategories.map((subcat) => (
                <DropdownItem
                  key={subcat._id}
                  description={subcat.description}
                  startContent={
                    <img src={subcat.image} width={100} alt={subcat.name} />
                  }
                >
                  <Link
                    to={`/products/${subcat._id}`}
                    className="text-[16px] font-bold"
                  >
                    {subcat.name}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}
        <NavbarItem>
          <Link to="/categories" aria-current="page">
            <p className="textColor">Categories</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">
            <p className="textColor">About Us</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="cursor-pointer align-middle">
        <NavbarItem>
          <p
            onClick={onOpen}
            className="bg-transparent hover:bg-transparent active:bg-transparent border-none hover:border-none active:border-none p-0 m-0"
          >
            <Search color="#8E3E63" />
          </p>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              <SearchBar />
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem>
          <Profile />
        </NavbarItem>
        <NavbarItem>
          <SheetDemo />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
