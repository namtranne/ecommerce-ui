import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProfileButton } from "./ProfileButton";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { TbHomeEdit } from "react-icons/tb";
import { MdOutlineAddLocationAlt, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useAddUserAddress, useUserAddresses } from "../../hooks/useUser";
import BarLoader from "../../ui/BarLoader";

export const UserAddress = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleEditClick = (address, index) => {
    setCurrentAddress(address);
    setEditIndex(index);
    setShowEditForm(true);
  };

  const handleAddClick = () => {
    setCurrentAddress({
      id: "",
      title: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      city: "",
      postalCode: "",
      landmark: "",
      phoneNumber: "",
      receiverName: "",
    });
    setEditIndex(null);
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
    setCurrentAddress(null);
    setEditIndex(null);
  };

  return (
    <div className="flex flex-col place-content-start w-full h-full">
      <UserAddressesList
        handleEditClick={handleEditClick}
        currentAddress={currentAddress}
        setCurrentAddress={setCurrentAddress}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        showEditForm={showEditForm}
        handleCloseForm={handleCloseForm}
      />
      <ProfileButton
        buttonIcon={MdOutlineAddLocationAlt}
        buttonName="Add Address"
        onClick={handleAddClick}
        optionalClassName="mt-12 mb-4 mr-24 self-center"
      />
    </div>
  );
};

export const UserAddressHeader = () => {
  return (
    <div className="">
      <h1 className="">Your Addresses</h1>
    </div>
  );
};

const UserAddressesList = ({
  handleEditClick,
  currentAddress,
  setCurrentAddress,
  editIndex,
  setEditIndex,
  showEditForm,
  handleCloseForm,
}) => {
  const { isLoading: isLoadingAddresses, data: addresses, setData: setAddresses } = useUserAddresses();
  const { isLoading, addUserAddress } = useAddUserAddress();

  const handleRemoveClick = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    toast.success("Address removed successfully!");
  };

  const handleFormSubmit = (updatedAddress) => {
    if (editIndex !== null) {
      //   updatedAddresses[editIndex] = updatedAddress;
    } else {
      addUserAddress(updatedAddress);
    }
    // toast.success("Address added successfully!");
    handleCloseForm();
  };

  if (isLoadingAddresses) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <p>Loading your addresses...</p>
        <BarLoader />
      </div>
    );
  }

  return (
    <motion.div className="flex w-full pr-20 max-h-[500px] overflow-y-auto">
      <motion.ul className="w-full space-y-4">
        {addresses.map((address, index) => (
          <React.Fragment key={index}>
            <AddressBlock
              address={address}
              index={index}
              handleRemoveClick={handleRemoveClick}
              handleEditClick={handleEditClick}
            />
          </React.Fragment>
        ))}
      </motion.ul>
      {showEditForm && (
        <EditAddressForm
          address={currentAddress}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </motion.div>
  );
};

const AddressBlock = ({
  address,
  index,
  handleRemoveClick,
  handleEditClick,
}) => {
  return (
    <div className="flex flex-row w-full border rounded-3xl p-4 shadow-md items-stretch">
      <div className="flex flex-col w-full">
        <div className="text-black font-bold text-lg">{address.title}</div>
        <div className="flex flex-row space-x-4">
          <div className="text-zinc-800">{address.receiverName}</div>
          <div className="w-[1px] bg-zinc-600"></div>
          <div className="text-zinc-600">{address.phoneNumber}</div>
        </div>
        <div className="text-zinc-600">
          {address.addressLine1 + " " + address.addressLine2}
        </div>
        <div className="text-zinc-600">{address.city}</div>
        <div className="text-zinc-600">{address.country}</div>
        <div className="text-zinc-600">Postal: {address.postalCode}</div>
      </div>
      <div className="self-end space-y-4 w-fit min-w-fit">
        <ProfileButton
          buttonIcon={MdOutlineEditLocationAlt}
          buttonName="Edit"
          onClick={() => handleEditClick(address, index)}
        />
        <ProfileButton
          buttonIcon={MdDelete}
          buttonName="Remove"
          onClick={() => handleRemoveClick(index)}
          optionalClassName="hover:bg-rose-500"
        />
      </div>
    </div>
  );
};
