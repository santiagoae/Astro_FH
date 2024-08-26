import type { IFavoritePokemons } from "@interfaces/IFavoritePokemons";
import { createSignal, Show, type Component } from "solid-js";

interface Props{
    pokemonSelected: IFavoritePokemons;
}


export const FavoriteCardPokemons: Component<Props> = ({pokemonSelected}) => {
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonSelected.id}.png`;
    
    const [isVisible, setIsVisible] = createSignal(true);

    const deletePokemon = () => {
        const favorites:IFavoritePokemons[] = JSON.parse(localStorage.getItem("favorites") ?? "[]");

        const newFavorites = favorites.filter(p => p.id !== pokemonSelected.id)

        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setIsVisible(false);
    }

    return(
        <Show when={isVisible()}>
        <a href={`/pokemons/${pokemonSelected.name}`} class="flex flex-col items-center justify-center">
            <img 
                src={pokemonImageUrl}
                alt={pokemonSelected.name}
                class="w-90 h-90"
                style={`view-transition-name: ${pokemonSelected.name}-image`} />
            <p>#{pokemonSelected.id} {pokemonSelected.name}</p>
            <button onClick={deletePokemon}>Eliminar</button>
        </a>
        </Show>
    )
}