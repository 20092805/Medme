import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Footer.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


export default function App() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className='SwiperSlide1'>
                    <div className="SwiperSlideH1">
                        <h1>Mamnun mijozlar fikri</h1>
                    </div>
                    <div className="SwiperSlidePbox">
                        <div className="SwiperSlideP">
                            <p>"Ushbu platforma ishni juda osonlashtiradi. Qani endi bu platformadan o`quv markazimizni yo`lga qo`yganimizdan boshlab foydalanganimizda, bizni ancha yo`qotishdan saqlab qolar edi. Haqiqatda muammolarimizni yechganligi uchun Modme CRM platformasini ishlatishni barchaga tavsiya qilaman"</p>
                        </div>
                    </div>
                    <div className="SwiperSlideImg">
                        <div className="ImgBox">
                            <img src="" alt="" />
                        </div>
                        <div className="YozuvBox">
                            <p>MuhammadAli Eshonqulov</p>
                            <p> Yuksalish liderlar akademiyasi asoschisi</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide1'>
                    <div className="SwiperSlideH1">
                        <h1>Mamnun mijozlar fikri</h1>
                    </div>
                    <div className="SwiperSlidePbox">
                        <div className="SwiperSlide2P">
                            <p>
                                "Biz rosmana ishlatishimizga bir oy bo`lgan bo`lsa, Modmega o`tishimiz bilan ancha ishlarimiz yengillashdi Allohga shukr, chin dildan aytilayotgan gap. Yana ham kuch-quvvat bersin sizlarga, Modme jamoasi ishlaringizga omad".</p>
                        </div>
                    </div>
                    <div className="SwiperSlideImg">
                        <div className="ImgBox">
                            <img src="" alt="" />
                        </div>
                        <div className="YozuvBox">
                            <p>Shahzod Sobirov</p>
                            <p>Data Learning Center asoschisi</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide1'>
                    <div className="SwiperSlideH1">
                        <h1>Mamnun mijozlar fikri</h1>
                    </div>
                    <div className="SwiperSlidePbox">
                        <div className="SwiperSlide3P">
                            <p>
                                Modme platformasini ishlatishni boshlaganimizdan bir oy o`tib o`quvchilar soni keskin oshib ketdi. Hozirda tizimlashtirishga katta e`tibor beryapmiz, nimaga? Sababi o`quv markazi qancha kengaygani sari boshqaruv qiyinlashib bormoqda edi, ammo Modmeni ishlatishni boshlaganimizdan so`ng ishimiz ancha yengillashdi. Ushbu platforma yordamida hozirda o`quv markazda nechta o`quvchi bor, qanchasi qarzdor, nechtasi ketib qolyapti, moliyaviy holat va konversiya haqida to`liq ma`lumotga ega bo`lib turaman..</p>
                        </div>
                    </div>
                    <div className="SwiperSlideImg">
                        <div className="ImgBox">
                            <img src="" alt="" />
                        </div>
                        <div className="YozuvBox">
                            <p>Alloma Sakhiyeva</p>
                            <p>Fashion Art Academy asoschisi</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide1'>
                    <div className="SwiperSlideH1">
                        <h1>Mamnun mijozlar fikri</h1>
                    </div>
                    <div className="SwiperSlidePbox">
                        <div className="SwiperSlide4P">
                            <p>"Modme CRM orqali o`quv markazimizni tizimlashtiridik va natijalar biz o`ylagandan yaxshiroq bo`ldi. Hozirda o`quv markazini yanada rivojlantirish uchun marketing bo`limiga e`tibor beryapman"</p>
                        </div>
                    </div>
                    <div className="SwiperSlideImg">
                        <div className="ImgBox">
                            <img src="" alt="" />
                        </div>
                        <div className="YozuvBox">
                            <p>Doston Nuraliyev</p>
                            <p>English Life o`quv markazi asoschisi</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide1'>
                    <div className="SwiperSlideH1">
                        <h1>Mamnun mijozlar fikri</h1>
                    </div>
                    <div className="SwiperSlidePbox">
                        <div className="SwiperSlide5P">
                            <p>"Yuksalish Liderlar akademiyasining boshlang`ich 2 oy davomida juda ko`plab qiyinchiliklarga duch keldik, moliyaviy hisob-kitob, kengayish va filiallarni tizimli boshqarishda juda qiynaldik. Va nihoyat jonimizga aro kirgan platforma keldi, buning nomi Modme deb ataladi. Ushbu platformani ishlatish orqali ishimiz oson ko`chdi".</p>
                        </div>
                    </div>
                    <div className="SwiperSlideImg">
                        <div className="ImgBox">
                            <img src="" alt="" />
                        </div>
                        <div className="YozuvBox">
                            <p>Muhammadjon Uzoqov</p>
                            <p>Fast and Easy o`quv markazi rahbari</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='SwiperBtn'>
                <div className="SorovBtn">
                    <button>DEMOGA SO'ROV QOLDIRING</button>
                </div>
                <div className="YozuvBtn">
                    <p>Yangishahar 10, Yunusobod, Toshkent</p>
                    <p>Ish vaqti: har kuni 10:00 dan 20:00 gacha</p>
                </div>
                <div className="NumerBtn">
                    <p>78 777 11 00</p>
                    <p>modme.uz</p>
                </div>
                <div className="IconBtn">
                    <p><AiFillInstagram /></p>
                    <p><FaYoutube /></p>
                    <p><FaTelegramPlane /></p>
                </div>
            </div>
            {/* <div className="FooterDemo"></div> */}
        </>
    );
}