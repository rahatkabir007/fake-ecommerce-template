import { categories } from "@/data/categories";
import Electronics from "@/assets/png/electronics.png";
import Jewelry from "@/assets/png/jewelry.png";
import Men from "@/assets/png/mens.png";
import Women from "@/assets/png/womens.png";

export function getImageUrl(title) {
    const category = categories.find(category => category.value === title);
    return category ? category.image : null;
}
