import React, { useState, useCallback } from 'react';
import './App.css';
import Gallery from 'react-photo-gallery'
import iglogo from './img/IG_Fill.png'
import StickyHeader from 'react-sticky-header';
import Carousel, { Modal, ModalGateway } from "react-images";
import 'react-sticky-header/styles.css';

const photos = [
  {
    src: '/images/black-tee1.jpg',
    width: 2,
    height: 3
  },
  {
    src: '/images/black-tee2.jpg',
    width: 2,
    height: 3
  },
  {
    src: '/images/black-tee3.jpg',
    width: 2,
    height: 3
  },
  {
    src: '/images/black-tee4.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/images/maroon-tee1.jpg',
    width: 2,
    height: 3
  },
  {
    src: '/images/maroon-tee2.jpg',
    width: 2,
    height: 3
  }
];

// function columns(containerWidth) {
//   let columns = 1;
//   if (containerWidth >= 500) columns = 3;
//   if (containerWidth >= 900) columns = 4;
//   if (containerWidth >= 1500) columns = 5;
//   return columns;
// }

const onStick = () => {

}

const MyHeader = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="Header_root">
        <h1 className="Header_title"><img className='logo' src='/images/suspect.png' alt='Suspect logo'/></h1>
      </div>
    }
    onSticky={onStick()}
  >
    <section>
      <div className="nonSticky"></div>
    </section>
  </StickyHeader>
);

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
		<div className='App'>
			{MyHeader()}

			<Gallery photos={photos} direction={'row'} onClick={openLightbox} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={photos.map(x => ({
								...x,
								srcset: x.srcSet,
								caption: x.title,
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>

			<footer className='footer'>
        <span className='contact'>Contact via DM </span>
				<a href='https://www.instagram.com/suspect.la/' target='_blank' rel='noopener noreferrer'>
					<img className='iglogo' alt='Instagram' src={iglogo} />
				</a>
			</footer>
		</div>
	);
}

export default App;
