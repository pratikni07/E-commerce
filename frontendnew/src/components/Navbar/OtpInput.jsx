import React from "react";
import OtpInput from "react-otp-input";

const InputOtp = ({ otp, setOtp }) => {
  return (
    <div className="m-auto">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={{
          width: "2.5rem",
          height: "2.5rem",
          margin: "0 0.5rem",
          fontSize: "1.5rem",
          borderRadius: "4px",
          border: "1px solid #8E3E63",
        }}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default InputOtp;
