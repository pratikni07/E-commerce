import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from '../ui/button';
import { Input } from '@nextui-org/input';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from '@/services/operations/authAPI';

const LoginForm = ({ setLog, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(formData.email, formData.password, navigate));
    onClose();
  };

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password } = formData;

  return (
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">Sign In</ModalHeader>
      <form onSubmit={submitHandler}>
        <ModalBody>
          <div className="w-full flex flex-col gap-4">
            <Input
              type="email"
              label="Email"
              isRequired
              name="email"
              value={email}
              onChange={changeHandler}
            />
            <Input
              type="password"
              label="Password"
              isRequired
              name="password"
              value={password}
              onChange={changeHandler}
            />
            <p>
              You Have Not Account{" "}
              <span
                className="text-[#46599f] cursor-pointer font-bold"
                onClick={() => setLog(false)}
              >
                Click Here
              </span>
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className="bg-[#8E3E63] hover:text-[#8E3E63] hover:bg-slate-300">
            Login
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  );
};

export default LoginForm;
