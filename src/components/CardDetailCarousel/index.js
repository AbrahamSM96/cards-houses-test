import React, { useState } from "react";

import ImageGallery from "react-image-gallery";
import { ContentImage, Li, Price } from "./styles";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
export const CardDetailCarousel = ({ data }) => {
  const {
    name,
    price,
    type_operation,
    type_property,
    phone,
    description,
    address,
    H5,
  } = data;
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const formatValue = price.toLocaleString();

  const upperProperty = capitalize(type_property);
  const upperOperation = capitalize(type_operation);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1020/1000/600/",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "https://picsum.photos/id/1021/1000/600/",
      thumbnail: "https://picsum.photos/id/1021/250/150/",
    },
    {
      original: "https://picsum.photos/id/1022/1000/600/",
      thumbnail: "https://picsum.photos/id/1022/250/150/",
    },
    {
      original: "https://picsum.photos/id/1023/1000/600/",
      thumbnail: "https://picsum.photos/id/1023/250/150/",
    },
    {
      original: "https://picsum.photos/id/1024/1000/600/",
      thumbnail: "https://picsum.photos/id/1024/250/150/",
    },
    {
      original: "https://picsum.photos/id/1025/1000/600/",
      thumbnail: "https://picsum.photos/id/1025/250/150/",
    },
    {
      original: "https://picsum.photos/id/1026/1000/600/",
      thumbnail: "https://picsum.photos/id/1026/250/150/",
    },
    {
      original: "https://picsum.photos/id/1027/1000/600/",
      thumbnail: "https://picsum.photos/id/1027/250/150/",
    },
  ];

  return (
    <>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showIndex={true}
      />
      <ContentImage>
        <Li>
          <small>{`${upperProperty} en ${upperOperation}`}</small>
        </Li>
        <h3>
          {`${address.street} #${address.number_ext} `}
          <span>{`Int. ${address.number_int}`}</span>
        </h3>
        <p>{`${address.street}, ${address.state}, ${address.city} `}</p>
        <Price>{`$${formatValue} MDP`}</Price>
      </ContentImage>
    </>
  );
};
