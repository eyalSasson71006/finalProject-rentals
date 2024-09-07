import React from 'react'
import CardComponent from '../cards/CardComponent';
import PageHeadline from '../components/PageHeadline';
import CardsListComponent from '../components/CardsListComponent';

export default function SearchResults() {
  return (
    <div>
      {/* <PageHeadline title={"Search results"} subtitle={"Here you can find all the apartments in Tel aviv"}/> */}
        <CardsListComponent/>
    </div>
  )
}
