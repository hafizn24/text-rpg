import { useEffect, useState } from 'react'
import { Typography } from '@mui/material/'
import Axios from 'axios'

function Main() {
    const [mongo, setMongo] = useState('')
    let id = parseInt(1)

    let data = JSON.stringify({
        "collection": "character",
        "database": "hafiz-db",
        "dataSource": "Cluster0",
        "filter": {
            "id": id
        }
    })

    let config = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-ncfnu/endpoint/data/v1/action/findOne',
        // package.json "proxy": "https://data.mongodb-api.com/app/data-ncfnu/endpoint/data/v1/action",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': 'h2j4wkjpoEPuVndrEuMHnVVAukwAH5ySDgI80DeD8Ig5SNEKm0cRkXuCvBjSOCNS',
        },
        data: data
    };
    
    useEffect(() => {
        Axios(config)
        .then(function (response) {
            console.log(response);
            setMongo(response.data.document.name)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
    return (
        <>
            <Typography
                align='center'
                variant='h3'
            >
                Text-RPG!
            </Typography>
            <Typography
                align='center'
                variant='subtitle1'
            >
                {mongo}
            </Typography>
        </>
    )
}

export default Main