import React from 'react'
import { BorderCard, BorderImage, BorderType, CardWrapper, DataConteinerStyled, GenerakWrraper, ImageContainerStyled, LoadingContainerStyled, PokemonClassConteinerStyled, PokemonData, PokemonName, PokemonNameConteinerStyled, PokemonNumber, QueryButton, QueryContainer, QueryConteinerStyled, QueryInput, TextConteiner, TextConteinerName, UserTextConteiner } from './PokeCardStyled'
import { useState } from 'react'
import { useEffect } from 'react'
import FondoPokemon from './FondoPokemon2.png'
import { useGetPokemon } from '../CustomHooks/useGetPokemon'
import { mirage } from 'ldrs'

mirage.register()






const PokeCard = () => {

    const [query, setQuery] = useState(1)

    const {pokemon, isLoading, isError, Type, getPokemon} = useGetPokemon()
    
    useEffect(() => {
        getPokemon(query)
    }, [])

    const typeColors = {
        grass: '#7BD734',
        fire: '#E18427',
        water: '#549EDE',
        dragon: '#2984D4',
        ground: '#B56421',
        normal: '#BCB2AA',
        electric: '#E5BC2A',
        flying: '#8DB5D9',
        fighting: '#b62b5b',
        poison: '#853D92',
        rock: '#C7B78B',
        psychic: '#e07b9e',
        ice: '#74cec0',
        bug: '#90C12C',
        ghost: '#5269AC',
        dark: '#5A5366',
        fairy: '#EDAAED',
        steel: '#5A8EA1'
      }

    const typeBackground = {
        grass: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/e/ed/latest/20230128125654/Tipo_planta_icono_EP.svg")',
        fire: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/5/55/latest/20230128125153/Tipo_fuego_icono_EP.svg")',
        water: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/d/d6/latest/20230128124702/Tipo_agua_icono_EP.svg")',
        dragon: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20230128124905/Tipo_drag%C3%B3n_icono_EP.svg")',
        ground: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/c/c8/latest/20230128132625/Tipo_tierra_icono_EP.svg")',
        normal: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/c/c3/latest/20230128125621/Tipo_normal_icono_EP.svg")',
        electric: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/8/84/latest/20230128125008/Tipo_el%C3%A9ctrico_icono_EP.svg")',
        flying: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/6/6b/latest/20230128132815/Tipo_volador_icono_EP.svg")',
        fighting: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/f/f2/latest/20230128125518/Tipo_lucha_icono_EP.svg")',
        poison: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20230128132735/Tipo_veneno_icono_EP.svg")',
        rock: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/1/14/latest/20230128125805/Tipo_roca_icono_EP.svg")',
        psychic: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/2/22/latest/20230128125735/Tipo_ps%C3%ADquico_icono_EP.svg")',
        ice: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20230128125423/Tipo_hielo_icono_EP.svg")',
        bug: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/1/1a/latest/20230128124809/Tipo_bicho_icono_EP.svg")',
        ghost: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/3/3d/latest/20230128125103/Tipo_fantasma_icono_EP.svg")',
        dark: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20230128132504/Tipo_siniestro_icono_EP.svg")',
        fairy: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/b/b7/latest/20230128125233/Tipo_hada_icono_EP.svg")',
        steel: 'url("https://images.wikidexcdn.net/mwuploads/wikidex/6/6c/latest/20230128124521/Tipo_acero_icono_EP.svg")'
    }

    const typeBI = {
        grass: 'url("https://thumbs.dreamstime.com/b/fundo-verde-do-pixel-25343238.jpg")',
        fire: 'url("https://img.freepik.com/vector-premium/fondo-degradado-pixeles-ilustracion-vectorial_570092-93.jpg")',
        water: 'url("https://img.freepik.com/fotos-premium/imagenes-fondo-abstracto-fondo-pantalla-ai-generado_643360-49405.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais")',
        dragon: 'url("https://img.freepik.com/vector-premium/fondo-degradado-azul-estilo-pixel-art_475147-2622.jpg")',
        ground: 'url("https://us.123rf.com/450wm/yaroslavka/yaroslavka2103/yaroslavka210300005/194025383-fondo-de-bloque-de-tierra-estilo-p%C3%ADxel-concepto-de-terreno-de-juego-pixelado-fondo-cuadrado-sin.jpg")',
        normal: 'url("https://img.freepik.com/vector-gratis/patron-gris-pixelado_1053-169.jpg")',
        electric: 'url("https://media.istockphoto.com/id/1329913859/es/vector/fondo-amarillo-de-p%C3%ADxeles-abstractos-textura-geom%C3%A9trica-de-oro-de-cuadrados-patr%C3%B3n-vectorial.jpg?s=170667a&w=0&k=20&c=yGsyK4xOPN6OPvHFV3T7P0KfLcZNTysnU-lVdupamgA=")',
        flying: 'url("https://us.123rf.com/450wm/malydesigner/malydesigner1408/malydesigner140800029/31128124-fondo-azul-abstracto-p%C3%ADxeles.jpg?ver=6")',
        fighting: 'url("https://static.videezy.com/system/resources/thumbnails/000/032/712/original/pixel-red.jpg")',
        poison: 'url("https://static.videezy.com/system/resources/thumbnails/000/032/711/original/pixel-purple.jpg")',
        rock: 'url("https://www.publicdomainpictures.net/pictures/320000/nahled/brown-pixel-background-1575888278eNA.jpg")',
        psychic: 'url("https://us.123rf.com/450wm/malydesigner/malydesigner1408/malydesigner140800054/31128149-fondo-pixel-p%C3%BArpura-abstracto.jpg?ver=6")',
        ice: 'url("https://img.freepik.com/vector-premium/patron-fondo-bloques-pixeles-agua-hielo-nieve-nivel-juego-consola-retro-textura-pixeles-cubicos-computadora-ocho-bits-80-entorno-arcade-fondo-vector-pixelado-liquido-azul-o-nieve_8071-9327.jpg?w=360")',
        bug: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluGejBhlNUPAflRUclumhWptqfJmbgcaeOg&usqp=CAU")',
        ghost: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0GZAl6j5hLQywhAWGyUcSnewMZFZZ_dJ8ObuHkHhyFmkHm4lp7pNYutU8Fs9mKOoZX4&usqp=CAU")',
        dark: 'url("https://img.freepik.com/vector-gratis/fondo-oscuro-diseno-geometrico_1048-1454.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais")',
        fairy: 'url("data:image/jpeg;base64,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")',
        steel: 'url("https://media.istockphoto.com/id/1164341008/es/vector/la-tecnolog%C3%ADa-azul-abstracta-comprueba-el-fondo-del-patr%C3%B3n.jpg?s=612x612&w=0&k=20&c=JILexSacOF4hmWdN1tQ9mOU59MZ2EPKwi98x0gGRRes=")'
    }
    
    return (
        
        <GenerakWrraper style={{backgroundImage: `url(${FondoPokemon})`}}>
            
            {
                isLoading && <LoadingContainerStyled><l-mirage
                                size="200"
                                speed="2.5" 
                                color="white" 
                             ></l-mirage></LoadingContainerStyled>
            }
            {
                isError && <UserTextConteiner><p>El Pokemon no ha sido encontrado :(</p></UserTextConteiner>
            }
            {
                pokemon &&  <BorderCard >
                                <CardWrapper style={{backgroundColor: typeColors[Type] || '' }}>
                                    <PokemonNameConteinerStyled>
                                        <TextConteinerName>
                                            <PokemonName>{pokemon?.name?.toUpperCase()}</PokemonName>
                                        </TextConteinerName>
                                        <BorderType>
                                            <PokemonClassConteinerStyled style={{backgroundImage: typeBackground[Type] || '' }}></PokemonClassConteinerStyled>
                                        </BorderType>
                                    </PokemonNameConteinerStyled>
                                    <PokemonData>{pokemon.types && pokemon.types[0] ? pokemon.types[0].type.name.toUpperCase() : ''}</PokemonData>
                                    <BorderImage>
                                        <ImageContainerStyled style={{backgroundImage: typeBI[Type] || '' }}><img src={pokemon?.sprites?.front_default} alt="Imagen del pokemon" /></ImageContainerStyled>
                                    </BorderImage>
                                    <DataConteinerStyled>
                                        <TextConteiner>
                                            <PokemonData>Peso....................................................................{pokemon?.weight}Kg</PokemonData>
                                        </TextConteiner>
                                        <TextConteiner>
                                            <PokemonData>Experiencia base..............................................{pokemon?.base_experience}Xp</PokemonData>
                                        </TextConteiner>
                                        <TextConteiner>
                                            <PokemonData>Altura......................................................................{pokemon?.height}In</PokemonData>
                                        </TextConteiner>
                                        <TextConteiner>
                                            <PokemonNumber>Numero..................................................................{pokemon?.id}</PokemonNumber>
                                        </TextConteiner>
                                    </DataConteinerStyled>
                                </CardWrapper>
                            </BorderCard>
            }
                <QueryContainer>
                    <QueryConteinerStyled>
                    <QueryInput value={query} placeholder='Escriba el nombre o numero del pokemon' onChange={(e)=> setQuery(e.target.value)} />
                    <QueryButton onClick={()=> getPokemon(query)}>Buscar</QueryButton>
                    </QueryConteinerStyled>
                </QueryContainer>
                
                
        </GenerakWrraper>
    )
}

export default PokeCard