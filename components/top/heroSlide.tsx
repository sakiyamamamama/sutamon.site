"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ←追加
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const slideContents: { title: string; text: string; img: string }[] = [
  {
    title: "ようこそスタモンへ！",
    text: "スタモンは学習記録×モンスター育成アプリ",
    img: "slide1.png",
  },
  {
    title: "学習を楽しく！",
    text: "勉強するたびにモンスターが成長！",
    img: "screen2.png",
  },
  {
    title: "モンスターを育てよう",
    text: "コツコツ学習を続けると進化するよ！",
    img: "slide3.png",
  },
  {
    title: "新しいモンスターをGET！",
    text: "モンスターを育てると新しいモンスターの卵を手に入れられます！たくさんのモンスターを育てよう！",
    img: "slide4.png",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000, // 3秒ごとに切り替え
          disableOnInteraction: false, // ユーザー操作後も自動再生を続ける
        }}
        modules={[Autoplay, Pagination]} // ←追加
      >
        {slideContents.map((s, idx) => (
          <SwiperSlide key={idx} className="!w-auto flex justify-center">
            <div className="flex items-center gap-6 p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl transition-transform transform hover:scale-105">
              <div className="max-w-xs">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h2>
                <p className="text-slate-600">{s.text}</p>
              </div>
              <Image
                src={`/sutamon.site/${s.img}`}
                alt={`アプリ画面${idx + 1}`}
                width={200}
                height={200}
                className="h-[350px] w-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
