import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
    export default function Price(props) {

        //apikey
        const apiKey = "C67121D4-671B-4B1E-B5D0-ED48743036D2"

        //grab currency symbol from URL Params
        const params = useParams()
        const symbol = params.symbol

        //url to fetch data from
        const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?invert=false`;

        //state to hold coin data
        const [coin, setCoin] = useState("null")

        //function to get coin data
        const getCoin = async () => {
            try {
                const response = await fetch(url, {
                    headers: { 'X-CoinAPI-Key': `${apiKey}` }
                });
                const data = await response.json();
                //sets data as state
                setCoin(data)
                console.log(data)
            } catch (e) {
                console.error(e)
            }
        }

        // useEffect to run getCoin when component mounts
        useEffect(() => {
            getCoin();
        }, []);

        //loaded function for when data is fetched
        const loaded = () => {
            return (
                <div>
                    <h1>
                        {coin.asset_id_base}/{coin.asset_id_quote}
                    </h1>
                    <h2>
                        {coin.rate}
                    </h2>
                </div>
            )
        }

        //function for when data does not exist
        const loading = () => {
            return (
                <h1>
                    Loading...
                </h1>
            )
        }

        return coin && coin.rate ? loaded() : loading();
    }

