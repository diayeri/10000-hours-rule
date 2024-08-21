import React from "react";

export default function Dialog() {
  return (
    <dialog id="shareDialog">
      <h2>
        화이팅!!<span class="pc-only">♥♥♥</span>
      </h2>
      <p>당신의 꿈을 응원합니다!</p>
      <img src="./img/licat.png" alt="" />
      <button id="closeBtn" class="btn-primary btn-m-rec">
        종료하고 진짜
        <br class="m-only" />
        훈련하러 가기 GO!GO!
      </button>
    </dialog>
  );
}
