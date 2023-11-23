import tshirt_noir_front from "../images/tshirt_noir/front.jpg";
import sweatshirt_front from "../images/sweatshirt/front.jpg";
import casquette_noir_front from "../images/casquette_noir/front.jpg";
import sac_a_dos_front from "../images/sac_a_dos/front.jpg";
import mug_front from "../images/mug/front.jpg";
import gourde_front from "../images/gourde/front.jpg";

import tshirt_noir_back from "../images/tshirt_noir/back.jpg";
import sweatshirt_back from "../images/sweatshirt/back.jpg";

const cards = [
  {
    id: 0,
    title: "T-Shirt noir",
    frontPhoto: tshirt_noir_front,
    backPhoto: tshirt_noir_back,
    description: "Only code can judge me",
  },
  {
    id: 1,
    title: "Sweatshirt-front",
    frontPhoto: sweatshirt_front,
    backPhoto: sweatshirt_back,
  },
  { id: 2, title: "Casquette-noir", frontPhoto: casquette_noir_front },
  { id: 3, title: "Sac-à-dos", frontPhoto: sac_a_dos_front },
  { id: 4, title: "Mug", frontPhoto: mug_front },
  { id: 5, title: "Gourde", frontPhoto: gourde_front },
];

export const getArticles = () => {
  return cards;
};

export const getArticleById = (id) => {
  console.log(id, typeof id);
  return cards.find((card) => card.id === parseInt(id));
};
