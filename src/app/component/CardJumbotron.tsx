import Image, { StaticImageData } from 'next/image';
import * as React from 'react';


interface Datas {
    id: number,
    img: StaticImageData,
    title: string
}

const CardJumbotron = ({ id, img, title }: Datas) => {
    return (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-56 py-3" key={id}>
            <div className='flex justify-center items-center'>
                <Image
                    className="rounded-t-lg"
                    src={img}
                    alt={title}
                    width={60}
                    height={60} />
            </div>
            <div>
                <p className="mb-4 text-center mt-2">
                    {title}
                </p>
            </div>
        </div>

    );
};

export default CardJumbotron;
