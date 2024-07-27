import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProfileButton } from "./ProfileButton";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { TbHomeEdit } from "react-icons/tb";
import { MdOutlineAddLocationAlt } from "react-icons/md";

export const UserAddress = ({ addressesInfo, setAddressesInfo }) => {
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
            receiver: "",
            tel: "",
            location: { street: "", district: "" },
            postal: "",
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
                addressesInfo={addressesInfo} 
                setAddressesInfo={setAddressesInfo}
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
}

const UserAddressHeader = () => {
    return (
        <div className="flex flex-row self-start w-full">
            <h1 className="self-start">
                Your Addresses
            </h1>
        </div>        
    );
}

const UserAddressesList = ({ addressesInfo, setAddressesInfo, handleEditClick, currentAddress, setCurrentAddress, editIndex, setEditIndex, showEditForm, handleCloseForm }) => {
    const [tempAddresses, setTempAddresses] = useState([]);
    const [tempDefaultAddress, setTempDefaultAddress] = useState(null);

    useEffect(() => {
        if (Array.isArray(addressesInfo.addresses)) {
            setTempAddresses(addressesInfo.addresses);
        } else {
            console.log(Array.isArray(addressesInfo.addresses));
            setTempAddresses([]);
        }
    }, [addressesInfo.addresses]);

    useEffect(() => {
        if (addressesInfo.defaultAddress != null) {
            setTempDefaultAddress(addressesInfo.defaultAddress);
        } else {
            console.log(addressesInfo.addresses != null);
            setTempDefaultAddress(null);
        }
    }, [addressesInfo.defaultAddress]);

    const handleSetDefaultClick = (index) => {
        setTempDefaultAddress(index);
    };

    const handleFormSubmit = (updatedAddress) => {
        const updatedAddresses = [...tempAddresses];
        if (editIndex !== null) {
            updatedAddresses[editIndex] = updatedAddress;
        } else {
            updatedAddresses.push(updatedAddress);
        }
        setTempAddresses(updatedAddresses);
        setAddressesInfo({ ...addressesInfo, addresses: updatedAddresses });
        handleCloseForm();
    };

    return (
        <motion.div className="flex w-full pr-20 max-h-[500px] overflow-y-auto">
            <motion.ul className="w-full space-y-4">
                {
                    tempAddresses.map((address, index) => (
                        <React.Fragment key={index}>
                            <AddressBlock
                                address={address}
                                index={index}
                                tempDefaultAddress={tempDefaultAddress}
                                handleSetDefaultClick={handleSetDefaultClick}
                                handleEditClick={handleEditClick}
                            />
                        </React.Fragment>
                    ))
                }
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

const AddressBlock = ({ address, index, tempDefaultAddress, handleSetDefaultClick, handleEditClick }) => {
    return (
        <div className="flex flex-row w-full border rounded-3xl p-4 shadow-md items-stretch">
            <div className="flex flex-col w-full">
                <div className="flex flex-row space-x-4">
                    <div className="text-zinc-800">
                        {address.receiver}
                    </div>
                    <div className="w-[1px] bg-zinc-600"></div>
                    <div className="text-zinc-600">
                        {address.tel}
                    </div>
                </div>
                <div className="text-zinc-600">
                    {address.location.street}
                </div>
                <div className="text-zinc-600">
                    {address.location.district}
                </div>
                <div className="text-zinc-600">
                    Postal: {address.postal}
                </div>
            </div>
            <div className="self-end space-y-4 w-fit min-w-fit">
                <ProfileButton 
                    buttonIcon={MdOutlineEditLocationAlt} 
                    buttonName="Edit" 
                    onClick={() => handleEditClick(address, index)} 
                />
                {
                    index === tempDefaultAddress
                        ? <ProfileButton 
                            buttonIcon={TbHomeEdit} 
                            buttonName="Default"
                            optionalClassName="bg-zinc-50 text-rose-500 border-2 border-rose-500 hover:cursor-default hover:scale-100 hover:bg-zinc-50 active:scale-100"
                            disabled={true}
                          />
                        : <ProfileButton 
                            buttonIcon={TbHomeEdit} 
                            buttonName="Set Default" 
                            onClick={() => handleSetDefaultClick(index)} 
                          />
                }
            </div>
        </div>
    );
}

const EditAddressForm = ({ address, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({ ...address });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-xl shadow-md w-1/2">
                <h2 className="text-2xl mb-4">{address.receiver ? "Edit Address" : "Add Address"}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">Receiver</label>
                        <input 
                            type="text" 
                            name="receiver" 
                            value={formData.receiver || ""} 
                            onChange={handleChange} 
                            className="mt-1 p-2 block w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">Tel</label>
                        <input 
                            type="tel" 
                            name="tel" 
                            value={formData.tel || ""} 
                            onChange={handleChange} 
                            className="mt-1 p-2 block w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">Street</label>
                        <input 
                            type="text" 
                            name="street" 
                            value={formData.location?.street || ""} 
                            onChange={(e) => setFormData((prev) => ({
                                ...prev,
                                location: { ...prev.location, street: e.target.value }
                            }))}
                            className="mt-1 p-2 block w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">District</label>
                        <input 
                            type="text" 
                            name="district" 
                            value={formData.location?.district || ""} 
                            onChange={(e) => setFormData((prev) => ({
                                ...prev,
                                location: { ...prev.location, district: e.target.value }
                            }))}
                            className="mt-1 p-2 block w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">Postal</label>
                        <input 
                            type="number" 
                            name="postal" 
                            value={formData.postal || ""} 
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
                            type="submit" 
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
