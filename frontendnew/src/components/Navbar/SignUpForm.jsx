import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button } from '../ui/button';
import InputOtp from "./OtpInput"; // Corrected import statement
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOtp, signUp } from '@/services/operations/authAPI'; // Ensure this path is correct
import { setSignupData } from '@/slices/authSlice';

const SignUpForm = ({ setLog, onClose }) => {
  const [otp, setOtp] = useState("");
  const [isSet, setIsSet] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData, loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    role: "User",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "", // Added phone number field
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords Do Not Match");
      return;
    }
    // Dispatch action to set signup data and send OTP
    dispatch(setSignupData(formData));
    dispatch(sendOtp(formData.email, navigate));
    setIsSet(true);
  };

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    setLog(true);
    const { role, firstName, lastName, email, phoneNumber, password, confirmPassword } = signupData;
    // Dispatch action to sign up with OTP verification
    dispatch(signUp(role, firstName, lastName, email, phoneNumber, password, confirmPassword, otp, navigate));
  };
  
  return (
    <div>
      {isSet ? (
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Enter OTP</ModalHeader>
          <ModalBody>
            <InputOtp otp={otp} setOtp={setOtp} />
          </ModalBody>
          <ModalFooter>
            <Button 
              className="bg-[#8E3E63] hover:text-[#8E3E63] hover:bg-slate-300" 
              onClick={handleVerifyAndSignup}
            >
              SignUp
            </Button>
          </ModalFooter>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
          <ModalBody>
            <form className="w-full flex flex-col gap-4" onSubmit={handleOnSubmit}>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input 
                  type="text" 
                  label="First Name" 
                  name="firstName" 
                  value={firstName} 
                  onChange={handleOnChange} 
                  isRequired 
                />
                <Input 
                  type="text" 
                  label="Last Name" 
                  name="lastName" 
                  value={lastName} 
                  onChange={handleOnChange} 
                  isRequired 
                />
              </div>
              <Input 
                type="email" 
                label="Email" 
                name="email" 
                value={email} 
                onChange={handleOnChange} 
                isRequired 
              />
              <Input 
                type="number" 
                label="Phone Number" 
                name="phoneNumber" 
                value={phoneNumber} 
                onChange={handleOnChange} 
                isRequired 
              />
              <Input 
                type="password" 
                label="Password" 
                name="password" 
                value={password} 
                onChange={handleOnChange} 
                isRequired 
              />
              <Input 
                type="password" 
                label="Confirm Password" 
                name="confirmPassword" 
                value={confirmPassword} 
                onChange={handleOnChange} 
                isRequired 
              />
              <p>
                You Have Already Account{" "}
                <span 
                  className='text-[#46599f] cursor-pointer font-bold' 
                  onClick={() => setLog(true)}
                >
                  Click Here
                </span>
              </p>
              <Button 
                className="bg-[#8E3E63] hover:text-[#8E3E63] hover:bg-slate-300" 
                type="submit"
              >
                Get OTP
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      )}
    </div>
  );
};

export default SignUpForm;
