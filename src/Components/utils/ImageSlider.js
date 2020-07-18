import React from 'react'
import { Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div>

            <Carousel autoplay>
                <div>
                        <img style={{width:'100%',maxHeight:'360px' ,}}
                            src={`http://localhost:5000/${props.file}`} alt="pieceImage" />
                    </div>
            </Carousel>
        </div>
    )
}

export default ImageSlider;