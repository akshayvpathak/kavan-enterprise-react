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
    title: "Ceramic Products",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "One Piece",
        newTab: false,
        path: "/product/ceramic-one-piece",
      },
      {
        id: 32,
        title: "Wash Basin",
        newTab: false,
        path: "/product/ceramic-wash-basin",
      },
      {
        id: 33,
        title: "Mug",
        newTab: false,
        path: "/product/ceramic-mug",
      },
    ],
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
