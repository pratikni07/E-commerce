import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { login } from "@/services/operations/authAPI";
const LoginForm = ({ setLog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password } = formData;

  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription className="text-start">
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-2 mt-5 ">
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  placeholder="Email Address...."
                  className="p-2 border-2 border-slate-600 rounded-md"
                />
                <input
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={changeHandler}
                  placeholder="Password...."
                  className="p-2 border-2  border-slate-600 rounded-md"
                />
                <Button type="submit">Login</Button>
              </div>
            </form>
            <button
              onClick={() => {
                setLog(false);
              }}
              className="my-2 mt-4"
            >
              You have not Register{" "}
              <span className="text-[#5a6cc6] font-bold ml-1">
                Click Here{" "}
              </span>
            </button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default LoginForm;
