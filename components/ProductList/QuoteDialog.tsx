"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from ".";

interface QuoteDialogProps {
  product: Product;
  isOpen: boolean;
  handleClose: () => void;
}

export default function QuoteDialog({
  product,
  isOpen,
  handleClose,
}: QuoteDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[400px] md:max-w-[800px] ">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Product Quote
          </DialogTitle>
          <DialogDescription>
            Request a quote for this product. Please enter your contact details.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col py-4 md:flex-row">
          {/* Left Side: Image and Title */}
          <div className="flex flex-1 flex-col items-center md:items-start">
            <Image
              src={product.image}
              alt={product.alt}
              height={200}
              width={200}
              className="object-contain"
            />
            <p className="mt-4 text-center text-xl font-semibold md:text-left">
              {product.title}
            </p>
          </div>

          {/* Right Side: Phone Number and Submit Button */}
          <div className="flex flex-1 flex-col items-center justify-start md:items-start">
            <div className="w-full max-w-[400px]">
              <div className="grid gap-4 py-4">
                <div className="grid items-start gap-4">
                  <Label htmlFor="phone" className="text-left">
                    Mobile Number
                  </Label>
                  <div className="col-span-3 flex items-center">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant={"orange"} type="submit" size={"lg"}>
                  Get Quote
                </Button>
              </DialogFooter>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
