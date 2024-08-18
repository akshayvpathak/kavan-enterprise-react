"use client";
import { allProducts } from "@/data/products";
import { GetBestPrice } from "../GetBestPrice";
import { ProductSlider } from "../ProductSlider";

const DiyaMakingMachine = async () => {
  const product = allProducts.find(
    (product) => product.slug === "diya-making-machine",
  );
  return (
    <section className="py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="relative col-span-12 lg:col-span-12">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-6">
                {product?.productImages && (
                  <ProductSlider images={product.productImages} />
                )}
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div>
                  <h1 className="mb-4 text-2xl font-bold leading-none">
                    Diya Making Machine
                  </h1>
                </div>

                <hr className="my-6 dark:border-slate-700" />
                <div>
                  <h2 className="text-start font-medium leading-tight">
                    This Multi Purpose Manual Diya Making Machine is very useful
                    to make Diyas. By using Different Die (Mold) it can Produce
                    : Deepak/Diya, Kullad, Kitkat fuse, Ceramic foundry filters
                    etc.
                  </h2>
                </div>
                <section className="body ezy__epspecification3 light relative z-10 overflow-hidden bg-white py-4 text-zinc-900 dark:bg-[#0b1727] dark:text-white md:py-14">
                  <div className="container mx-auto px-4">
                    <div className="mx-auto flex max-w-3xl flex-col justify-center">
                      <h5 className="mb-8 text-2xl font-bold leading-none">
                        Product Specification
                      </h5>

                      <table className="bg-[#ccdbdc]">
                        <tbody>
                          <tr className="mt-2 border-b dark:border-slate-700">
                            <td className="w-1/4 bg-gray-100 bg-opacity-80 px-6 py-4 text-start opacity-75 dark:bg-slate-700 dark:bg-opacity-20">
                              Product Type
                            </td>

                            <th className="py-4 pl-2 text-start md:pl-8">
                              Diya Making Machine
                            </th>
                          </tr>

                          <tr className="mt-2 border-b dark:border-slate-700">
                            <td className="w-1/4 bg-gray-100 bg-opacity-80 px-6 py-4 text-start opacity-75 dark:bg-slate-700 dark:bg-opacity-20">
                              Machine Height
                            </td>

                            <th className="py-4 pl-2 text-start md:pl-8">
                              4 feet, 5 feet, 6 feet, 7 feet
                            </th>
                          </tr>
                          <tr className="mt-2 border-b dark:border-slate-700">
                            <td className="w-1/4 bg-gray-100 bg-opacity-80 px-6 py-4 text-start opacity-75 dark:bg-slate-700 dark:bg-opacity-20">
                              Capacity (per Day)
                            </td>

                            <th className="py-4 pl-2 text-start md:pl-8">
                              9000-10000 Pcs.
                            </th>
                          </tr>
                          <tr className="mt-2 border-b dark:border-slate-700">
                            <td className="w-1/4 bg-gray-100 bg-opacity-80 px-6 py-4 text-start opacity-75 dark:bg-slate-700 dark:bg-opacity-20">
                              Max Force / Load
                            </td>

                            <th className="py-4 pl-2 text-start md:pl-8">
                              0-30 ton
                            </th>
                          </tr>
                          <tr className="mt-2 border-b dark:border-slate-700">
                            <td className="w-1/4 bg-gray-100 bg-opacity-80 px-6 py-4 text-start opacity-75 dark:bg-slate-700 dark:bg-opacity-20">
                              Type of Press
                            </td>

                            <th className="py-4 pl-2 text-start md:pl-8">
                              Assembly Press
                            </th>
                          </tr>
                          <tr className="mt-2 border-b dark:border-slate-700">
                            <td className="w-1/4 bg-gray-100 bg-opacity-80 px-6 py-4 text-start opacity-75 dark:bg-slate-700 dark:bg-opacity-20">
                              Usage
                            </td>

                            <th className="py-4 pl-2 text-start md:pl-8">
                              Diya Making & Kitkat Fuse Making
                            </th>
                          </tr>
                          <tr className="mt-2 border-b dark:border-slate-700">
                            <td className="w-1/4 bg-gray-100 bg-opacity-80 px-6 py-4 text-start opacity-75 dark:bg-slate-700 dark:bg-opacity-20">
                              Material
                            </td>
                            <th className="py-4 pl-2 text-start md:pl-8">
                              Iron
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                <div>
                  <h2 className="text-start leading-tight">
                    We are a reputed entity, engaged in offering a qualitative
                    array of Heavy Duty Toggle Press Machine.Keeping in mind
                    ever-evolving requirements of our respected clients, we are
                    providing a premium quality range of Clay Diya Making
                    Machine.
                  </h2>
                </div>
                <div className="my-7 flex items-center gap-3">
                  {product && <GetBestPrice product={product} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiyaMakingMachine;
