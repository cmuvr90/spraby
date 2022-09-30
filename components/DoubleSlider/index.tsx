import React, {FC, useEffect, useMemo, useRef} from "react";
import {SliderWrapper} from "./Style.styles";
import {Splide, SplideSlide} from "@splidejs/react-splide";

interface PropsInterface {
    items?: any[];
    thumbnailsShow?: number;
    thumbnailsOptions?: object;
}

/**
 *
 */
export const DoubleSlider: FC<PropsInterface> = ({
                                                     items = [],
                                                     thumbnailsShow = 3,
                                                     thumbnailsOptions = {}
                                                 }) => {
    const main = useRef(null);
    const thumbnails = useRef(null);

    useEffect(() => {
        if (main.current && thumbnails.current && thumbnails.current.splide) {
            main.current.sync(thumbnails.current.splide);
        }
    }, []);

    return (
        <SliderWrapper>
            <Splide
                ref={main}
                options={{
                    type: 'loop',
                    lazyLoad: 'nearby',
                    heightRatio: 0.65,
                    pagination: false,
                    arrows: false,
                    cover: true,
                }}
            >
                {
                    items.map((item, index) => (
                        <SplideSlide key={index}>
                            {
                                item
                            }
                        </SplideSlide>
                    ))
                }
            </Splide>
            <Splide
                ref={thumbnails}
                options={{
                    type: 'loop',
                    lazyLoad: 'nearby',
                    rewind: true,
                    fixedWidth: `calc(${100 / thumbnailsShow}% - ${8 - 8 / (thumbnailsShow - 1)}px)`,
                    isNavigation: true,
                    gap: '8px',
                    focus: 0,
                    pagination: false,
                    arrows: false,
                    dragMinThreshold: {
                        mouse: 4,
                        touch: 10,
                    },
                    breakpoints: {
                        640: {
                            fixedWidth: 66,
                            fixedHeight: 38,
                        }
                    },
                    ...thumbnailsOptions
                }}
            >
                {
                    items.map((item, index) => (
                        <SplideSlide key={index}>
                            {
                                item
                            }
                        </SplideSlide>
                    ))
                }
            </Splide>
        </SliderWrapper>
    )
}