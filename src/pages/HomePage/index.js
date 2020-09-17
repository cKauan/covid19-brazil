import React, { useEffect, useState } from 'react';
import './index.css';
import Axios from 'axios';

export default function Content() {
    const [apiData, setApiData] = useState(null);

    function getCovidData() {
        Axios.get('https://covid19-brazil-api.now.sh/api/report/v1').then(res => {
            const { data } = res.data;
            setApiData(data)
        });
    }
    
    const loadingTemplate = <li><span>Carregando...</span><p>Carregando...</p></li>;

    useEffect(() => {
        getCovidData();
    }, [])

    return (

        <div className="content">
            <div className="card">
                <h1>Casos por estado</h1>
                <ul id="state-list">
                    {apiData ? apiData.map((state, index) => (
                        <li key={index}>
                            <span>
                                <img src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`} alt={state.uf} />
                                {state.state}
                            </span>
                            <p>{state.cases}</p>
                        </li>
                    )
                    ) : loadingTemplate}
                </ul>
            </div>
            <div className="card">
                <h1>Mortes por estado</h1>
                <ul id="death-list">
                    {apiData ? apiData.map((state, index) => (
                        <li key={index}>
                            <span>
                                <img src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`} alt={state.uf} />
                                {state.state}
                            </span>
                            <p>{state.deaths}</p>
                        </li>
                    )
                    ) : loadingTemplate}
                </ul>
            </div>

        </div>
    )
}