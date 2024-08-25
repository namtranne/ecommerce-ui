import { motion } from "framer-motion";
import { useUserOrders } from "../../hooks/useOrder";
export function UserOrder() {
  return (
    <div>
      <UserOrderList />
    </div>
  );
}

const UserOrderList = ({}) => {
  const { data: orders, isLoading } = useUserOrders();
  // if (isLoadingAddresses) {
  //   return (
  //     <div className="w-full flex flex-col items-center justify-center">
  //       <p>Loading your orders...</p>
  //       <BarLoader />
  //     </div>
  //   );
  // }
  // console.log(addresses);

  return (
    <motion.div className="flex w-full pr-20 max-h-[500px] overflow-y-auto">
      <motion.ul className="w-full space-y-4">
        {/* {addresses.map((address, index) => (
          <React.Fragment key={index}>
            <AddressBlock
              address={address}
              index={index}
              tempDefaultAddress={ tempDefaultAddress}
              handleSetDefaultClick={handleSetDefaultClick}
              handleEditClick={handleEditClick}
            />
          </React.Fragment>
        ))} */}
      </motion.ul>
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
