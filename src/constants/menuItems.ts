import { RootStackParamList } from "../navigation/RootNavigator";

export const MENU_ITEMS : {
  id: string;
  title: string;
  image: any;
  route: keyof RootStackParamList;
}[] = [
  {
    id: "1",
    title: "पूजा विधि",
    image: require("../../assets/icons/puja.webp"),
    route: "PujaVidhi"
  },
  {
    id: "2",
    title: "कथा",
    image: require("../../assets/icons/katha.webp"),
    route: "Katha"
  },
  {
    id: "3",
    title: "हवन विधि",
    image: require("../../assets/icons/havan.webp"),
    route: "HavanVidhi"
  },
  {
    id: "4",
    title: "आरती",
    image: require("../../assets/icons/aarti.webp"),
    route: "Aarti"
  },
  {
    id: "5",
    title: "स्तुति",
    image: require("../../assets/icons/stuti.webp"),
    route: "Stuti"
  },
  {
    id: "5",
    title: "पूर्णता एवं विसर्जन",
    image: require("../../assets/icons/stuti.webp"),
    route: "Stuti"
  },
  {
    id: "6",
    title: "सामग्री सूची",
    image: require("../../assets/icons/samagri.webp"),
    route: "Samagri"
  },
];