import React from "react";

export default function Result() {
  return (
    <div class="wrap-result">
      <div class="flex">
        당신은<strong>프로그래밍</strong>전문가가 되기 위해서
      </div>
      <div class="flex">
        대략<strong>5110</strong>일 이상 훈련하셔야 합니다! :)
      </div>
      <div class="wrap-btn">
        <button class="btn-primary" id="showDialogBtn">
          훈련하러 가기 GO!GO!
        </button>
        <button>공유하기</button>
      </div>
    </div>
  );
}
