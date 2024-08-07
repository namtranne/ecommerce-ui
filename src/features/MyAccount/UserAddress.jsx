import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProfileButton } from "./ProfileButton";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { TbHomeEdit } from "react-icons/tb";
import { MdOutlineAddLocationAlt } from "react-icons/md";
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
      <UserAddressHeader />
      <ProfileButton
        buttonIcon={MdOutlineAddLocationAlt}
        buttonName="Add Address"
        onClick={handleAddClick}
        optionalClassName="mt-12 mb-4 mr-24 self-end"
      />
      <UserAddressesList
        handleEditClick={handleEditClick}
        currentAddress={currentAddress}
        setCurrentAddress={setCurrentAddress}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        showEditForm={showEditForm}
        handleCloseForm={handleCloseForm}
      />
    </div>
  );
};

const UserAddressHeader = () => {
  return (
    <div className="flex flex-row self-start w-full">
      <h1 className="self-start">Your Addresses</h1>
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
  const { isLoading: isLoadingAddresses, data: addresses } = useUserAddresses();
  const [tempDefaultAddress, setTempDefaultAddress] = useState(null);
  const { isLoading, addUserAddress } = useAddUserAddress();

  const handleSetDefaultClick = (index) => {
    setTempDefaultAddress(index);
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
  console.log(addresses);

  return (
    <motion.div className="flex w-full pr-20 max-h-[500px] overflow-y-auto">
      <motion.ul className="w-full space-y-4">
        {addresses.map((address, index) => (
          <React.Fragment key={index}>
            <AddressBlock
              address={address}
              index={index}
              tempDefaultAddress={tempDefaultAddress}
              handleSetDefaultClick={handleSetDefaultClick}
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
  tempDefaultAddress,
  handleSetDefaultClick,
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
        {index === tempDefaultAddress ? (
          <ProfileButton
            buttonIcon={TbHomeEdit}
            buttonName="Default"
            optionalClassName="bg-zinc-50 text-rose-500 border-2 border-rose-500 hover:cursor-default hover:scale-100 hover:bg-zinc-50 active:scale-100"
            disabled={true}
          />
        ) : (
          <ProfileButton
            buttonIcon={TbHomeEdit}
            buttonName="Set Default"
            onClick={() => handleSetDefaultClick(index)}
          />
        )}
      </div>
    </div>
  );
};

export const EditAddressForm = ({ address, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ ...address });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-1/2">
        <h2 className="text-2xl mb-4">
          {address.receiver ? "Edit Address" : "Add Address"}
        </h2>
        <form className="space-y-4">
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 p-2 hidden w-full border rounded-md"
          />
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Receiver
            </label>
            <input
              type="text"
              name="receiverName"
              value={formData.receiverName || ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Tel
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber || ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Address line 1
            </label>
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1 || ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Address line 2
            </label>
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2 || ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city || ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country || ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Postal Code
            </label>
            <input
              type="number"
              name="postalCode"
              value={formData.postalCode || ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-zinc-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
