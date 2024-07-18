import { StaticImageData } from "next/image";
import {
  cornChips,
  crunchyPakoda,
  karaBhoonthi,
  karaChew,
  masalaKacang,
  mixNutMixture,
  mulluMurukku,
  normalMixture,
  omapodiMixture,
  ribbonMurukku,
  ringMurukku,
  spicyMixture,
  thenkuzal,
} from "@/public/images/classic";

export type Product = {
  name: string;
  image: StaticImageData;
  price: string;
};

const products: Product[] = [
  { name: "Corn Chips", image: cornChips, price: "RM 8.00" },
  { name: "Crunchy Pakoda", image: crunchyPakoda, price: "RM 8.00" },
  { name: "Kara Bhoonthi", image: karaBhoonthi, price: "RM 8.00" },
  { name: "Kara Chew", image: karaChew, price: "RM 8.00" },
  { name: "Masala Kacang", image: masalaKacang, price: "RM 8.00" },
  { name: "Mix Nut Mixture", image: mixNutMixture, price: "RM 8.00" },
  { name: "Mullu Murukku", image: mulluMurukku, price: "RM 8.00" },
  { name: "Normal Mixture", image: normalMixture, price: "RM 8.00" },
  { name: "Omapodi Mixture", image: omapodiMixture, price: "RM 8.00" },
  { name: "Ribbon Murukku", image: ribbonMurukku, price: "RM 8.00" },
  { name: "Ring Murukku", image: ringMurukku, price: "RM 8.00" },
  { name: "Spicy Mixture", image: spicyMixture, price: "RM 8.00" },
  { name: "Thenkuzal", image: thenkuzal, price: "RM 8.00" },
];

export default products;
