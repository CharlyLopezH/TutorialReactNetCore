import React from "react";
import PeliculaIndividual from "./PeliculaIndividual";
import { peliculaDTO } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css";
import Cargando from "../utils/Cargando";
import ListadoGenerico from "../utils/ListadoGenerico";
export default function ListadoPeliculas(props: iListadoPeliculas) {
  //   if (!props.peliculas) {
  //     return <Cargando/>;
  //   } else if (props.peliculas.length === 0) {
  //     return <> No hay películas </>;
  //   } else {
  return (
    <ListadoGenerico listado={props.peliculas}>
      <div className={css.div}>
        {props.peliculas?.map((peliculaParam) => 
          <PeliculaIndividual pelicula={peliculaParam} key={peliculaParam.id} 
      />)}
      </div>
    </ListadoGenerico>
        )
}
interface iListadoPeliculas {
  peliculas?: peliculaDTO[];
}
