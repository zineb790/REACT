export default function Stock(stocks) {

    return (
        <div>
            {console.log(stocks)}
            {stocks.stock?.map((stock, index) => {
                return (
                    <div>
                        <h2>{stock.name}</h2>
                        {stock.lastPrice}
                    </div>
                )
            })}
        </div>
    )
};

       
