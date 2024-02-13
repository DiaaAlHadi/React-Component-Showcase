import {useState, useEffect} from "react";
import "./styles.css";
export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [dataProducts, setDataProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
            );
            const result = await response.json();
            if (result && result.products && result.products.length) {
                setDataProducts(result.products);
                setLoading(false);
            }
            setDataProducts((prevData) => [...prevData, ...result.products]);
            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    if (loading) {
        return <div>Loading data!</div>;
    }
    return (
        <div className="load-more-data-container">
            <div className="product-container">
                {dataProducts && dataProducts.length ? (
                    dataProducts.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                ) : (
                    <h3>No Data</h3>
                )}
            </div>
            <div className="button-container">
                <button
                    style={{cursor: count >= 4 ? "not-allowed" : "pointer"}}
                    disabled={count >= 4}
                    onClick={() => setCount(count + 1)}
                >
                    Load More Products
                </button>
                {count >= 4 && <h4>No More Products</h4>}
            </div>
        </div>
    );
}
