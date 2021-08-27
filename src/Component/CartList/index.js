import React from "react";

function CartList({ dine, selectedDine, order, UpdateOrderList, menu, idx }) {
  return (
    <div
      id={"diner" + idx}
      onClick={() => UpdateOrderList(idx)}
      className={`${
        selectedDine == idx ? "border-l-8  border-red-500 shadow-2xl" : ""
      }  my-2 bg-white hover:bg-gray-100`}
    >
      <div className={`${selectedDine == idx ? "bg-red-100" : ""}  p-2 flex `}>
        <div className="flex-auto text-sm w-32">
          <div className="font-bold text-red-600">Diner {idx + 1}</div>
        </div>
        <div className="flex w-18 font-medium items-end">
          <div
            onClick={() => UpdateOrderList(idx)}
            className="w-4 mx-2 hover:bg-green-200 rounded-full cursor-pointer text-green-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          {order.list.length > 1 && (
            <div
              onClick={() => UpdateOrderList(idx, true)}
              className="w-4 h-4 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trash-2 "
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
          )}
        </div>
      </div>
      {dine.meal.map((o, i) => {
        return (
          <div
            key={i}
            className="ml-6 p-2 flex cursor-pointer border-b border-gray-100"
          >
            <div className="flex-auto text-sm w-32">
              <div className="font-bold">
                {menu[o.course].filter((g) => g.id == o.selected)[0].name}
              </div>
              <div className="text-gray-400">{o.course}</div>
            </div>
            <div className="flex flex-col w-18 font-medium items-end">
              £{menu[o.course].filter((g) => g.id == o.selected)[0].price}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
