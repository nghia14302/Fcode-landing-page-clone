import React from 'react';

import Carousel from 'react-multi-carousel';

import { clubActiveFix } from './../../../assets/img/home';
import {
    Item,
    LeftArrow,
    RightArrow,
    SliderContainer,
    Activities,
    MoreInfo,
    SubTitle,
    SliderContent,
    NavLink,
    ContentsContainer,
} from './style';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1400,
        },
        items: 3,
        partialVisibilityGutter: 40,
    },
    mobile: {
        breakpoint: {
            max: 1000,
            min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
    },
    tablet: {
        breakpoint: {
            max: 1440,
            min: 1000,
        },
        items: 2,
        partialVisibilityGutter: 30,
    },
};

const Slider = () => {
    return (
        <Activities>
            <ContentsContainer>
                <SliderContent>
                    <SubTitle data-aos="fade-up">Một số hình ảnh hoạt động CLB</SubTitle>
                    <SliderContainer data-aos="flip-up">
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlay
                            autoPlaySpeed={2500}
                            centerMode={false}
                            customLeftArrow={<LeftArrow />}
                            customRightArrow={<RightArrow />}
                            focusOnSelect={false}
                            infinite
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={responsive}
                            showDots={false}
                            slidesToSlide={1}
                        >
                            {clubActiveFix.map((item, index) => {
                                return (
                                    <Item key={index + 'activity'} src={item} current={2}></Item>
                                );
                            })}
                        </Carousel>
                    </SliderContainer>
                    <MoreInfo data-aos="fade-right">
                        <NavLink to="/activities">Xem thêm</NavLink>
                    </MoreInfo>
                </SliderContent>
            </ContentsContainer>
        </Activities>
    );
};
export default Slider;
