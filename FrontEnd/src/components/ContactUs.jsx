import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 bg-white text-[#666875] w-[80%] ">
      <h1 className="text-2xl font-semibold mb-4 text-black text-center">
        Contact Us
      </h1>
      <div className=" p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">HELP CENTER</h2>
        <p className="mb-4">
          To submit return/exchange requests -{" "}
          <a href="#" className="text-[#242F66] underline font-bold">
            Click here
          </a>
        </p>
        <p className="mb-4">
          For any other queries and quicker help, WhatsApp us -{" "}
          <a href="#" className="text-[#242F66] underline font-bold">
            Click here
          </a>
        </p>
        <p>
          If the link doesn’t work, please WhatsApp us ‘Hi Nobero’ on +91
          9121514031 and we will get back to you within 24 hours
        </p>
      </div>
      <div className=" p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Important Note:</h2>
        <p className="mb-4">Dear Customer,</p>
        <p className="mb-4">
          In order to serve you faster & efficiently, the official support of
          Nobero has been shifted to WhatsApp only on the number - +91
          9121514031
        </p>
        <p className="mb-4">
          Please note, we DO NOT have ANY OTHER NUMBER for Call / WhatsApp as
          official support
        </p>
        <p className="mb-4">
          Please beware, if you encounter any other contact number / WhatsApp /
          email online, it might be spam
        </p>
        <p className="mb-4">
          Nobero.com will never call you for password / OTP which may lead to
          financial fraud
        </p>
        <p>
          For any help, feel free to reach out to us -{" "}
          <a href="#" className="text-[#242F66] underline font-bold">
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
