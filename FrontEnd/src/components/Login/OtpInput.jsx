import React from "react";
import OtpInput from "react-otp-input";

const InputOtp = ({ otp, setOtp }) => {
  return (
    <div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={{
          width: "3rem",
          height: "3rem",
          margin: "0 0.5rem",
          fontSize: "1.5rem",
          borderRadius: "4px",
          border: "1px solid #ced4da",
        }}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default InputOtp;
