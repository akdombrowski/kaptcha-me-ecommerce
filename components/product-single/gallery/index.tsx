import Image from "next/image";

type GalleryProductType = {
  images: string[];
};

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images[0];

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map((image) => (
          <div key={image} className="product-gallery__thumb">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <Image width="400" height="600" src={image} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <Image width="400" height="600" src={featImage} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
