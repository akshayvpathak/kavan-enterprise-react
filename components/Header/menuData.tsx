import { ceramicProducts, clayItems, machineryProducts } from "@/data/products";
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Machinery Products",
    newTab: false,
    submenu: machineryProducts.map((mp) => {
      return {
        id: mp.id,
        title: mp.title,
        newTab: false,
        path: `/product/${mp.slug}`,
      };
    }),
  },
  {
    id: 4,
    title: "Clay Products",
    newTab: false,
    submenu: clayItems.map((mp) => {
      return {
        id: mp.id,
        title: mp.title,
        newTab: false,
        path: `/product/${mp.slug}`,
      };
    }),
  },
  {
    id: 5,
    title: "Ceramic Products",
    newTab: false,
    submenu: ceramicProducts.map((mp) => {
      return {
        id: mp.id,
        title: mp.title,
        newTab: false,
        path: `/product/${mp.slug}`,
      };
    }),
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
  {
    id: 2.1,
    title: "Contact Us",
    newTab: false,
    path: "/contact-us",
  },
];

export default menuData;
