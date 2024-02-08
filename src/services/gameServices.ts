import { Publisher } from "../Entities/usePublisher";
import { Genre } from "./genreServices";
import { Platform } from "./paltformServices";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  genres: Genre[];
  publishers: Publisher[];
  slug: string;
  description_raw: string;
}
