import React, {useEffect} from 'react';
import Categorylist from './Categorylist';
import { useState } from 'react';
function Category() {
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        let model = {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem("email")
            }
        };
        fetch(`/api/cate`, model)
          .then((res) => res.json())
          .then((res) => setCategory(res));
    }, []);

    return (
      <div>
          {
              Category.map(
                t => {
                    return (
                      <Categorylist Key={t.id} location={t.context} />
                    )
                }
              )
          }
      </div>
    );
}

export default Category;
