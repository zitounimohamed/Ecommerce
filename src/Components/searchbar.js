import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listPieces } from '../actions/productActions';

function HomeScreen(props) {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const pieceList = useSelector(state => state.pieceList);
  const { pieces, loading, error } = pieceList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPieces(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listPieces(category, searchKeyword, sortOrder))
  }
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listPieces(category, searchKeyword, sortOrder))
  }

  return <>
    {category &&
      <h2>{category}</h2>}

    <ul className="filter">
      <li>
        <form onSubmit={submitHandler}>
          <input name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </li>
      <li>
        Sort By {' '}
        <select name="sortOrder" onChange={sortHandler}>
          <option value="">Newest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </li>
    </ul>
    {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <ul className="products">
          {
            pieces.map(piece =>
              <li key={piece._id}>
                <div className="product">
                  <Link to={'/piece/' + piece._id}>
                    <img className="product-image" src={piece.image} alt="product" />

                  </Link>
                  <div className="product-name">
                    <Link to={'/piece/' + piece._id}>{piece.name}</Link>
                  </div>
                  <div className="product-price">${piece.prix}</div>
                </div>
              </li>)
          }
        </ul>
    }
  </>

}
export default HomeScreen;