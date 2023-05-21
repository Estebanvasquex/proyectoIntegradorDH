import React from 'react'
import SearchMoviesContainer from '../../common/searchMovies/SearchMoviesContainer'
import RecommendedMoviesContainer from '../../common/recommendedMovies/RecommendedMoviesContainer'
import CategoriesContainer from '../../common/categories/CategoriesContainer'

const Home = () => {
  return (
    <div>
      <SearchMoviesContainer/>
      <CategoriesContainer/>
      <RecommendedMoviesContainer/>
    </div>
  )
}

export default Home