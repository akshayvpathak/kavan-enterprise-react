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
    title: "Machinery",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Diya Making Machine",
        newTab: false,
        path: "/product/diya-making-machine",
      },
      {
        id: 32,
        title: "Kullad Making Machine",
        newTab: false,
        path: "/product/kullad-making-machine",
      },
      {
        id: 33,
        title: "Suraki Machine",
        newTab: false,
        path: "/product/suraki-machine",
      },
      {
        id: 34,
        title: "Hydraulic Diya Making Machine",
        newTab: false,
        path: "/product/hydraulic-diya-making-machine",
      },
    ],
  },
  {
    id: 4,
    title: "Red Mitti",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Mitti Diya",
        newTab: false,
        path: "/product/mitti-diya",
      },
      {
        id: 42,
        title: "Matka",
        newTab: false,
        path: "/product/matka",
      },
      {
        id: 43,
        title: "Kullad",
        newTab: false,
        path: "/product/kullad",
      },
    ],
  },
  {
    id: 5,
    title: "Ceramic",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Ceramic Mug",
        newTab: false,
        path: "/product/ceramic-mug",
      },
      {
        id: 52,
        title: "One Piece",
        newTab: false,
        path: "/product/ceramic-one-piece",
      },
      {
        id: 53,
        title: "Heater Plate",
        newTab: false,
        path: "/product/heater-plate",
      },
      {
        id: 54,
        title: "Ceramic Foundry Filter",
        newTab: false,
        path: "/product/ceramic-foundry-filter",
      },
      {
        id: 55,
        title: "Achar Jar",
        newTab: false,
        path: "/product/achar-jar",
      },
      {
        id: 56,
        title: "Kunda",
        newTab: false,
        path: "/product/kunda",
      },
      {
        id: 57,
        title: "Ceramic Toys",
        newTab: false,
        path: "/product/ceramic-toys",
      },
      {
        id: 58,
        title: "Agarbatti Stand",
        newTab: false,
        path: "/product/agarbatti-stand",
      },
      {
        id: 59,
        title: "Ceramic Damru",
        newTab: false,
        path: "/product/ceramic-damru",
      },
      {
        id: 60,
        title: "Tulsi Kyara",
        newTab: false,
        path: "/product/tulsi-kyara",
      },
    ],
  },
  {
    id: 6,
    title: "Decorative",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Decorative Diyas",
        newTab: false,
        path: "/product/decorative-diyas",
      },
      {
        id: 62,
        title: "Decorative Matki",
        newTab: false,
        path: "/product/decorative-matki",
      },
    ],
  },
  {
    id: 7,
    title: "Agriculture",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "Cultivator Blade (Farva)",
        newTab: false,
        path: "/product/cultivator-blade-farva",
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
