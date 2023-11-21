"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Separator } from "../ui/separator";

const Cart = () => {
  const itemCount = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCartIcon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg dark:text-white">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex flex-col w-full pr-6">
              {/* TODO: Cart Logic */}
              Cart Item
            </div>
            <div className="pr-6 space-y-4">
              <Separator />
              <div className="space-y-1.5 pr-7">
                <div className="flex">
                  <span className="flex-1">Shopping</span>
                  <span className="flex-1">Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction</span>
                  <span className="flex-1">1</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
