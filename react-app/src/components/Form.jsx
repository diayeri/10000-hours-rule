import React from "react";

export default function Form() {
  return (
    <div class="wrap-form">
      <form method="get">
        <div class="flex">
          <label for="field" class="sr-only">
            전문가가 되고싶은 영역
          </label>
          <p>나는</p>
          <input type="text" id="field" placeholder="예)프로그래밍" />
          <p>전문가가 될 것이다.</p>
        </div>
        <div class="flex">
          <label for="hours" class="sr-only">
            매일 훈련할 시간
          </label>
          <p>그래서 앞으로 매일 하루에</p>
          <input type="text" id="hours" placeholder="예)5시간" />
          <p>시간씩 훈련할 것이다.</p>
        </div>
        <div class="wrap-btn">
          <button type="submit" class="btn-primary btn-m-rec">
            나는 며칠 동안 훈련을 해야
            <br class="m-only" />
            1만 시간이 될까?
          </button>
        </div>
      </form>
    </div>
  );
}
