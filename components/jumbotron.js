import Link from 'next/link'

const Jumbotron = () =>
    <>
        <style jsx>{`
            .jumbotron {
                position: relative;
                overflow: hidden;
                background-image: url(/img/banner.png);
                background-size: cover;
            }        
            .jumbotron .container {
                position: relative;
                z-index: 2;
                background: rgba(0, 0, 0, 0.2);
                padding: 2rem;
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 3px;
            }
        `}</style>
        
        <div className="jumbotron jumbotron-fluid bg-dark mb-0" alt="Photo by Benjamin Child on Unsplash - https://unsplash.com/photos/GWe0dlVD9e0">
            <div className="container text-white">
                <h1 className="display-2 text-white d-none d-lg-block">
                    Eleva tu estilo de trabajo
                </h1>
                <h1 className="display-4 text-white text-center d-lg-none">
                    Eleva tu estilo de trabajo
                </h1>
                <p className="lead text-center">
                    Transforme su forma de trabajar, conocer clientes y colaborar con una experiencia de oficina única e inspiradora.
                </p>
                <hr className="my-4" />
                <Link href="/locations">
                    <a className="btn btn-primary btn-lg" role="button">Explora nuestras oficinas</a>                
                </Link>
            </div>
        </div>
    </>;

export default Jumbotron