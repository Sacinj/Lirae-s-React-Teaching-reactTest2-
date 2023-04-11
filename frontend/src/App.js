import { Routes, Route, Link } from 'react-router-dom';

const background = {
    backgroundColor : "green",
};


const ItemList = (prop) => {
    return (
        <li>{ prop.title }</li>
    );
};

const HomePage = () => {
    return (
        <div style={background} className="fontStyle">
            <h1>Home Page</h1>
            <Link to="/about/">Go to About Page</Link>
        </div>
    );
}; 



const AboutPage = () => {

    const listOfItem = [
        "Item1",
        "Item3",
        "Item2",
    ];


    return (
        <div>
            <h1>About Page</h1>
            <Link to="/home/">Go to Home Page</Link>

            <ul>
                {
                    listOfItem.map((item) => {
                        return <ItemList title={item} />
                    })
                }
            </ul>
        </div>
    );
}

const App = () => {
    return (
        <>
            <Routes path="/">
                <Route index element={ <HomePage /> } />
                <Route path="/home/" element={ <HomePage /> } />

                <Route path="/about/" element={ <AboutPage /> } />

            </Routes>
        </>
    );
};

export default App;