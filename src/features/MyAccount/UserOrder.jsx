import { motion } from "framer-motion";
import { useUserOrders } from "../../hooks/useOrder";
import BarLoader from "../../ui/BarLoader";
import { Fragment } from "react";
import { OrderProgressBar} from "../MyAccount/OrderProgressBar";

export function UserOrder() {
  return (
    <div className="flex flex-col place-content-start w-full h-full">
      <UserOrderWelcome></UserOrderWelcome>
      <UserOrderList />
    </div>
  );
}

const UserOrderList = ({}) => {
  const { data: orders, isLoading } = useUserOrders();
  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <p>Loading your orders...</p>
        <BarLoader />
      </div>
    );
  }
  console.log("Orders");
  console.log(orders);

  return (
    <motion.div className="flex w-full pr-20 overflow-y-auto">
      <motion.ul className="w-full space-y-4">
        {orders.map((order) => (
          <Fragment key={order.id}>
            <OrderBlock order={order}
            >

            </OrderBlock>
          </Fragment>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const OrderBlock = ({order}) => {
  const {orderItems, orderStatus, paymentMethod, total} = order;
  return (
    <div className="flex flex-col w-full border rounded-3xl p-4 shadow-md items-stretch bg-zinc-50">
      {orderItems.map((orderItem) => (
        <Fragment key={orderItem.id}>
          <ItemBlock
            orderItem = {orderItem}
          />
        </Fragment>
      ))}
      <div className="bg-zinc-400 h-[1px] w0-full mt-8"></div>
      <div className="flex flex-col place-self-center pt-8">
        <div className="flex flex-col">
            <OrderProgressBar currentStatus={orderStatus} paymentMethod={paymentMethod}/>
        </div>

        <div className="flex flex-col w-full space-y-0 mt-16">
          <div className="flex flex-row text-2xl">
              <p className="text-g5-black pr-4"> Payment Method: </p>
              <p className="text-cyan-800 text-bold"> {paymentMethod} </p>
          </div>
          <div className="flex flex-row text-2xl">
              <p className="text-g5-black pr-4"> Total: </p>
              <p className="text-rose-800 text-bold"> {total} VND </p>
          </div>
        </div>

      </div>
    </div>
  )
}

const ItemBlock = ({
  orderItem
}) => {
  return (
    <div className="flex flex-row w-full border rounded-3xl p-4 my-2 items-stretch space-x-8">
      <img src={orderItem.image} className="w-24 h-24"></img>
      <div className="flex flex-col w-full">
        <p className="text-xl font-md">{orderItem.productName}</p>
        {orderItem.option1 != null ? ( <p className="">{orderItem.option1}</p> ) : <></>}
        {orderItem.option1 != null ? ( <p className="">{orderItem.option2}</p> ) : <></>}
        <p className="">Quantity: {orderItem.quantity}</p>
        <p className="">Price: {orderItem.price}</p>
      </div>
    </div>
  );
};

const UserOrderWelcome = () => {
  return (
    <h1 className="self-start">
      My Orders
    </h1>
  );
};