import { useEffect, useState } from 'react';

const useData = () => {
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);

    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/MdWahiduzzamanEmon/medics-db.json/main/db.json"
        )
          .then((res) => res.json())
            .then((data) => {
                setFilterProduct(data)
                 setProducts(data);
            });
    },[])

    return {
      setProducts,
      products,
      filterProduct,
      setFilterProduct,
    };
};

export default useData;