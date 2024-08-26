import type { IFavoritePokemons } from "@interfaces/IFavoritePokemons";
import {FavoriteCardPokemons} from '@components/pokemons/FavoriteCardPokemons';

import { createSignal, For } from "solid-js"

const getLocalStoragePokemons = (): IFavoritePokemons[] => {
    const favorites: IFavoritePokemons[] = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    return favorites
}

export const FavoritePokemons = () => {
    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

    return(
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          <For each={pokemons()}>
            {(pokemon) =>  <FavoriteCardPokemons pokemonSelected={pokemon} />
            }
        </For>  
        </div>
    )
}