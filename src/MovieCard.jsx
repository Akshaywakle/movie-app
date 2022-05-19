import React from 'react'
const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="col-md-4">
                <div className="card mb-4 " >
                <div className="card-body p-0 bg-dark">
                        <img src={movie.Poster} className="card-img-top" alt={'public/404.jpg'}/>
                 <div className='desc'>
                 <h5 className="card-title text-white ps-3 pt-2">{movie.Type}</h5>
                 <h5 className="card-title text-white pe-3 pt-2 ">{movie.Year}</h5>

                 </div>
                        <p className="card-text text-white ps-3 pt-2 pb-3">{movie.Title}</p>
                    </div>
                </div>
            </div>

        </>
    )
}


export default MovieCard