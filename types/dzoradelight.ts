import { StaticImageData } from "next/image";

export type DzoraDelightProduct = {
  name: string;
  image: string;
  price: string;
};

export type DelightBundle = {
  name: string;
  desc: string;
  price: string;
  items: string[];
};
