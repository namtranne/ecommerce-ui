import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProfileButton } from "./ProfileButton";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { TbHomeEdit } from "react-icons/tb";
import { MdOutlineAddLocationAlt, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useAddUserAddress, useUserAddresses } from "../../hooks/useUser";
import BarLoader from "../../ui/BarLoader";
import cities from "../../data/cities.json";
import districts from "../../data/districts.json";
import { Select, Skeleton } from "antd";
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
      country: "Vietnam",
      postalCode: "",
      landmark: "",
      phoneNumber: "",
      province: "",
      district: "",
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
      <ProfileButton
        buttonIcon={MdOutlineAddLocationAlt}
        buttonName="Add Address"
        onClick={handleAddClick}
        optionalClassName="mt-12 mb-4 mr-24 self-center"
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
  const {
    isLoading: isLoadingAddresses,
    data: addresses,
    setData: setAddresses,
  } = useUserAddresses();
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
      <motion.div className="flex w-full pr-20 max-h-[500px] overflow-y-auto">
        <motion.ul className="w-full space-y-4">
          <React.Fragment>
            <AddressBlock
              isLoading
              // address={address}
              // index={index}
              handleRemoveClick={handleRemoveClick}
              handleEditClick={handleEditClick}
            />
          </React.Fragment>
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
  isLoading,
  address,
  index,
  handleRemoveClick,
  handleEditClick,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-row w-full border rounded-3xl p-4 shadow-md items-stretch text-xl">
        <div className="flex flex-col w-full p-4">
          <Skeleton />
        </div>
        <div className="self-end space-y-4 w-fit min-w-fit">
          <ProfileButton
            buttonIcon={MdOutlineEditLocationAlt}
            buttonName="Edit"
            // onClick={() => handleEditClick(address, index)}
          />
          <ProfileButton
            buttonIcon={MdDelete}
            buttonName="Remove"
            // onClick={() => handleRemoveClick(index)}
            optionalClassName="hover:bg-rose-500"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row w-full border rounded-3xl p-4 shadow-md items-stretch text-xl">
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
        <div className="text-zinc-600">
          {
            districts.find((district) => district.value == address.district)
              .label
          }
        </div>
        <div className="text-zinc-600">
          {cities.find((city) => city.value == address.province).label}
        </div>
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
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50 z-10">
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
              Province
            </label>
            <Select
              onChange={(value) => {
                setFormData({
                  ...formData,
                  province: value,
                  district: "",
                });
              }}
              value={formData.province}
              type="text"
              options={cities}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              District
            </label>
            <Select
              type="text"
              disabled={!formData.province}
              value={formData.district}
              onChange={(value) => {
                setFormData({ ...formData, district: value });
              }}
              options={districts.filter(
                (district) => district.parent_value == formData.province
              )}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              value="Vietnam"
              disabled
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
