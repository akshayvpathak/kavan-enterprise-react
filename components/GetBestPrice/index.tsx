import { FC, useState } from "react";
import QuoteDialog from "../ProductList/QuoteDialog";
import { Product } from "../ProductList";

export const GetBestPrice: FC<{
  product: Product;
}> = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);
  return (
    <>
      <button
        onClick={handleOpenDialog}
        className="h-20 w-full rounded border border-orange bg-orange px-6 py-2.5 text-lg font-extrabold uppercase text-white hover:bg-btnHover hover:text-white md:px-12"
      >
        Get Best Price <br />
        <span className="text-sm font-normal">Request a Quote</span>
      </button>
      <QuoteDialog
        product={product}
        isOpen={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};
