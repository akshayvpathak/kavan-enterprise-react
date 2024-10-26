"use client";

import React, { useEffect } from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  useEffect(() => {
    if (isOpen) {
      // Load the HubSpot form script only once
      const existingScript = document.querySelector(
        'script[src="//js.hsforms.net/forms/embed/v2.js"]',
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        document.body.appendChild(script);

        // After script is loaded, initialize the form
        script.onload = () => {
          (window as any).hbspt?.forms.create({
            portalId: "47887480",
            formId: "b1570a21-da56-453d-98ac-ecfd5b4af631",
            target: "#hubspotForm",
          });
        };
      } else {
        // If script is already loaded, just create the form
        (window as any).hbspt?.forms.create({
          portalId: "47887480",
          formId: "b1570a21-da56-453d-98ac-ecfd5b4af631",
          target: "#hubspotForm",
        });
      }
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[400px] md:max-w-[800px]">
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

          {/* Right Side: HubSpot Form */}
          <div className="flex flex-1 flex-col items-center justify-start md:items-start">
            <div className="w-full max-w-[400px]">
              <div className="grid gap-4 py-4">
                <div id="hubspotForm" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
