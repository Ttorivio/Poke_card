import styled from "styled-components";
export const GenerakWrraper = styled.div`
    display: flex;
    background-color: #242424;
    height: 1200px;
    padding: 2rem;
    flex-direction: row;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    gap: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    justify-content: center;
    p {
        font-size: 2rem;
        color: black;
    }
`

export const BorderCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #0B0B0C;
    border-radius: 20px;
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: grey;
    height: 73rem;
    width: 45rem;
    border-radius: 20px;
    align-items: start;
    justify-content: start;
    h1 {
        font-size: 3rem;
        width: 100%;
        justify-content: space-between;
        
    }
`
export const ImageContainerStyled = styled.div`
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    img {
        height: 100%;
        width: 100%;
    }
`
export const BorderImage = styled.div`
    display: flex;
    height: 50%;
    width: 80%;
    margin-left: 3.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: #0B0B0C;
`
export const DataConteinerStyled = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
`
export const PokemonNameConteinerStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-bottom: -3rem;
`
export const PokemonName = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
`
export const PokemonClassConteinerStyled = styled.div`
    display: flex;
    height: 4rem;
    width: 4rem;
    background-size: cover;
    border-radius: 100%;
    background-position: center;
`
export const TextConteinerName = styled.div`
    display: flex;
    height: 50%;
    margin-top: 2rem;
    margin-right: 5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: white;
    border-color: black;
    border-style: solid;
`
export const BorderType = styled.div`
    display: flex;
    padding: 0.5rem;
    height: 4rem;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    width: 4rem;
    margin-left: 12rem;
    background-color: #0B0B0C;
    border-radius: 100%;
`
export const PokemonData = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
`
export const PokemonNumber = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
`
export const QueryContainer = styled.div`
    border-radius: 15px;
    background-color: #242424;
    padding: 2rem;
`
export const QueryConteinerStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-start;
`
export const QueryInput = styled.input`
    background-color: white;
    border-radius: 20px;
    font-size: 2rem;
    height: 4rem;
    justify-content: center;
    align-items: center;
    width: 40rem;
    cursor: pointer;
`
export const QueryButton = styled.button`
    background-color: black;
    border-radius: 20px;
    border-color: transparent;
    height: 4rem;
    width: 10rem;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`
export const TextConteiner = styled.div`
    display: flex;
    height: 3rem;
    margin-top: 2rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: white;
    border-color: black;
    border-style: solid;
`
export const UserTextConteiner = styled.div`
    display: flex;
    height: 5rem;
    margin-top: 2rem;
    width: 20rem;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: white;
    border-color: black;
`


export const LoadingContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    margin: 2rem;
`
