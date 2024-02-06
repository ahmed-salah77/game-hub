import { create } from "zustand";

interface GameQuery {
  genre?: number;
  platform?: number;
  ordering?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearch: (search: string) => void;
  setGenre: (genre: number) => void;
  setPlatform: (platform: number) => void;
  setOrdering: (ordering: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearch: (search) => set(() => ({ gameQuery: { search } })),

  setGenre: (genre) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        genre,
      },
    })),

  setPlatform: (platform) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platform,
      },
    })),

  setOrdering: (ordering) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        ordering,
      },
    })),
}));

export default useGameQueryStore;
