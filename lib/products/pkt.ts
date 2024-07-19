import {
  cornChips,
  crunctyPakoda,
  karaBoonthi,
  karachew,
  masalaKacang,
  normalMixture,
  ommapodiMixture,
  mulluMurukku,
  ribbonMurukku,
  ringMurukku,
  spicyMixture,
  springMurukku,
  thenKuzal,
} from "@/public/images/pkt";
import { DzoraDelightProduct } from "@/types/dzoradelight";

const pktProducts: DzoraDelightProduct[] = [
  { name: "Corn Chips", image: cornChips, price: "RM 12.00" },
  { name: "Crunchy Pakoda", image: crunctyPakoda, price: "RM 12.00" },
  { name: "Kara Bhoonthi", image: karaBoonthi, price: "RM 12.00" },
  { name: "Kara Chew", image: karachew, price: "RM 12.00" },
  { name: "Masala Kacang", image: masalaKacang, price: "RM 12.00" },
  { name: "Normal Mixture", image: normalMixture, price: "RM 12.00" },
  { name: "Omapodi Mixture", image: ommapodiMixture, price: "RM 12.00" },
  { name: "Mullu Murukku", image: mulluMurukku, price: "RM 16.00" },
  { name: "Ribbon Murukku", image: ribbonMurukku, price: "RM 12.00" },
  { name: "Ring Murukku", image: ringMurukku, price: "RM 16.00" },
  { name: "Spicy Mixture", image: spicyMixture, price: "RM 12.00" },
  { name: "Spring Murukku", image: springMurukku, price: "RM 16.00" },
  { name: "Murukku", image: thenKuzal, price: "RM 16.00" },
];

export default pktProducts;
