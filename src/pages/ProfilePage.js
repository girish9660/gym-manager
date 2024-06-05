import React, { useState } from 'react';
import { ButtonComponent } from "../components/ButtonComponent";
import { InputComponent } from "../components/InputComponents";

export const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [adderessLine1, setAddressLine1] = useState("");
  const [adderessLine2, setAddressLine2] = useState("");
  const [adderessLine3, setAddressLine3] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const disable = !firstName || !middleName || !lastName || !phoneNumber || !email || !adderessLine1 || !adderessLine2 || !adderessLine3 || !city || !pincode || !state;



  return (
    <section className="app-profile-page">
      <div>
        <InputComponent
          inputTitle="First Name"
          value={firstName}
          onChange={setFirstName}
          placeholder={"Please enter First Name"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Middle Name"
          value={middleName}
          onChange={setMiddleName}
          placeholder={"Please enter Middle Name"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Last Name"
          value={lastName}
          onChange={setLastName}
          placeholder={"Please enter Last Name"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          placeholder={"Please enter Phone Number"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Email Id"
          value={email}
          onChange={setEmail}
          placeholder={"Please enter Email Id"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Address Line 1"
          value={adderessLine1}
          onChange={setAddressLine1}
          placeholder={"Please enter Address Line 1"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Address Line 2"
          value={adderessLine2}
          onChange={setAddressLine2}
          placeholder={"Please enter Address Line 2"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Address Line 3"
          value={adderessLine3}
          onChange={setAddressLine3}
          placeholder={"Please enter Address Line 3"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="City"
          value={city}
          onChange={setCity}
          placeholder={"Please enter City"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="Pincode"
          value={pincode}
          onChange={setPincode}
          placeholder={"Please enter Pincode"}
        />
      </div>
      <div>
        <InputComponent
          inputTitle="State"
          value={state}
          onChange={setState}
          placeholder={"Please enter State"}
        />
      </div>
      <div>
        <ButtonComponent
          buttonName="Update"
          onClick={() => disable && alert("Please enter all the values")}
        />
      </div>
    </section>
  );
};
