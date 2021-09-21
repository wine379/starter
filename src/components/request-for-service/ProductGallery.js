import React, {useState} from 'react';
import { Breadcrumb, Row, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Loader from '../../components/Common/Loader';
import SIV from '../../assets/img/singleVIP2.jpg'
import { source } from 'axe-core';



const ProductGallery = () => {
    const photos = [
    <Image src={SIV} />,
    <Image src={SIV} />,
    <Image src={SIV} />,
    <Image src={SIV} />,
    { src: '../../assets/img/TwinVIP1.jpg/800x599', width: 4, height: 4},
    { src: '../../assets/img/TwinVIP2.jpg', width: 4, height: 4},
    { src: '../../assets/img/PourFlash1.jpg', width: 4, height: 4},
    { src: '../../assets/img/PourFlash2.jpg', width: 4, height: 4}
];

const photos1 = 
[
    
    { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 4 },
    { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 4, height: 4},
    { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 4, height: 4 },
    { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 4, height: 4 },
    { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 4, height: 4 },
    { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 4 },
    { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 4 },
    { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 4 },
    
];
    const [state, setState] = useState({ 
                            sideMenu: true,
                            currentImage: 1,
                            loading: false

                        });
    useEffect(() => {
        setInterval(() => { 
            setCount(count + 1);
        }, 1000)
    }, []);

     if (state.loading) {
            loader = <Loader message="Loading..." />
            return loader;
        }
    const openLightbox = (event, obj) => {
        setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    const closeLightbox = () => {
        setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious = () => {
        setState({
            currentImage: state.currentImage - 1,
        });
    }
    gotoNext= () => {
        setState({
            currentImage: state.currentImage + 1,
        });
    }

    // Toggle side bar menu
    _onSideMenu = (active) => {
        setState({sideMenu: active});
    };

    return (
         <div className="page-wrapper"> 
            {/* Navigation */}
            
            {/* End Navigation */}
            
            <div className={`main-content d-flex flex-column ${state.sideMenu ? '' : 'hide-sidemenu'}`}>
                {/* Gallery area */}
                
                <Col lg={12}> 
                
                    <Row>
                        <Image src={SIV} />
                        <Image src={SIV} />
                        <Image src={SIV} /> 
                    </Row>
                </Col>
                {/* End Gallery area */}

                {/* Footer  */}    
                <div className="flex-grow-1"></div>
                <Footer />
                {/* End Footer  */}
            </div>
        </div>
    )
}

export default ProductGallery
