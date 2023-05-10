import { useEffect, useState } from 'react';

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    

    const handleFilmClick = () => {
        fetch('http://api-ghibli.herokuapp.com/films')
        .then(res => res.json())
        .then(allFilms => setFilms(allFilms))
    };

    const handlePeopleClick = () => {
        fetch('http://api-ghibli.herokuapp.com/people')
        .then(res => res.json())
        .then(allPeople => setPeople(allPeople))
    };


    return (
        <>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center my-2">
        <button onClick={() => window.location.reload(false)} className='h1 btn btn-lg fw-bold'>Studio Ghibli API</button>
        </div>

        <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
            <button onClick={() => handleFilmClick()} className='btn btn-lg btn-primary'>Load Films</button>
            <button onClick={handlePeopleClick} className="btn btn-success btn-lg">Load People</button>
        </div>
        <main className="container">
            <section className="row justify-content-center mt-5">
                {films.map(film => (
                    <div className='col-md-6' key={film.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title fw-bold">- {film.title} </h4>
                                <p className="card-subtitle text-muted">{film.original_title}</p>
                                <p className="card-text">{film.description}</p>
                                <p className="card-header">Release date: {film.release_date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className="row justify-content-center mt-5">
                {people.map(people => (
                    <div className='col-md-6' key={people.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title fw-bold">- {people.name} </h4>
                                <p className="card-subtitle text-muted">Age: {people.age}</p>
                                <p className="card-text">Gender: {people.gender}</p>
                                <a href={people.url} className="card-link">{people.url}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
                </>
    );
};



export default App;