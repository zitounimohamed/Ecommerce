import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import ImageSlider from '../utils/ImageSlider'
import { Col, Card, Row } from 'antd'

const { Meta } = Card

function LandingPage () {
    const [Pieces, setPieces] = useState([])    
    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(1);
    const [PostSize, setPostSize] = useState();

    //getting the data from the db
    const getPieces = (variables) =>{
        Axios.post("http://localhost:5000/piece/getPieces", variables)
        .then (response => {
            if (response.data.success){
                setPieces([...Pieces, ...response.data.pieces]);
                setPostSize(response.data.PostSize);
                console.log(response.data.pieces);
            }else {
                alert('Erreur de trouver les données');
            }
        });
    }
    //displaying the images
    const renderCards = Pieces.map((piece, index) => {
        return (
        <Col lg={6} md={8} xs={24}>
            <Card
            style={{marginLeft: '4rem'}}
            hoverable={true}
            cover={<ImageSlider images={piece.file}/> }
            >
            <Meta
            title={piece.nom}
            description={`${piece.prix} TND`}/>

            </Card>
        </Col>
            );
    });
    //consuming the data
    useEffect (() => { 
        const variables = {
            skip: Skip,
            limit: Limit,
        }
        getPieces (variables);

    }, []);
    
    //the load more button
    const onLoadMore = ( ) => {
        let skip = Skip + Limit;
        const variables = {
            skip : skip,
            limit: Limit
        }
        getPieces(variables);
        setSkip(skip);
    }
    return (
        
        <div tyle={{ width: '75%', margin: '3rem auto'}}>
            <div style={{ textAlign: 'center'}}>
                <br/> <br/>
                <h2> Tous les pièces disponibles </h2>
            </div>        
            {/* Filter */}
        

            {/* Search */}
        
            {Pieces.length === 0 ?
            <div style={{display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center'}}>
                <h2>Pas de publications ... </h2>
            </div> :
            <div>
            <Row gutter={[16,16]}>
                {renderCards}
            </Row>
            </div>
            }

            <br/> <br/>

            {/*Load More*/}
    
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button onClick={onLoadMore}> Voir plus </button>
            </div>
            
        
        </div>
    );
}
export default LandingPage;
