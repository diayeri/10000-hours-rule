import React from "react";
import Title from "../img/title.png";

export default function Header() {
  return (
    <header>
      <h1 class="sr-only">1만 시간의 법칙</h1>
      <img src={Title} alt="1만 시간의 법칙" class="title" />
    </header>
  );
}
