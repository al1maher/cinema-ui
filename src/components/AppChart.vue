<template>
  <div class="bg-white h-72 border border-gray-200 rounded-lg md:col-span-7">
    <!---Upper Details And Button-->
    <div class="flex justify-between items-center p-6">
      <div>
        <button
          class="flex justify-center items-center bg-neutral-50 rounded-lg border border-gray-200 px-3 py-2 text-primary text-xs font-normal leading-none gap-2"
        >
          <span
            ><svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.05794 4.20835L4.56457 6.87616C4.8606 7.19122 5.34501 7.19122 5.64103 6.87616L8.14766 4.20835"
                stroke="#898989"
                stroke-width="0.826481"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>سنويا</span>
        </button>
      </div>
      <div>
        <div dir="rtl">
          <p class="text-right text-primary leading-3 text-sm font-normal">
            إحصائيات إستخدام القسيمة
          </p>
          <p
            class="text-right text-secondary text-sm font-normal flex items-center gap-2 mt-1 cursor-pointer"
          >
            <span> 05 يوليو , 2023 - 05 أغسطس , 2023 </span>
            <span
              ><svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.21882 0.651932L4.10941 3.67981L1 0.651932"
                  stroke="#92A1AD"
                  stroke-width="1.20977"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </div>

    <!--Chart Core-->
    <div class="mx-6 chart-container overflow-x-scroll lg:overflow-hidden">
      <!--Horizontal Lines-->
      <div class="absolute flex flex-col gap-[34px] top-2">
        <svg
          width="797"
          height="2"
          viewBox="0 0 797 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.04925"
            y1="0.608751"
            x2="796.26"
            y2="0.608751"
            stroke="#E5E5EF"
            stroke-width="0.806515"
            stroke-linecap="round"
          />
        </svg>
        <svg
          width="797"
          height="2"
          viewBox="0 0 797 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.04925"
            y1="0.608751"
            x2="796.26"
            y2="0.608751"
            stroke="#E5E5EF"
            stroke-width="0.806515"
            stroke-linecap="round"
          />
        </svg>
        <svg
          width="797"
          height="2"
          viewBox="0 0 797 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.04925"
            y1="0.608751"
            x2="796.26"
            y2="0.608751"
            stroke="#E5E5EF"
            stroke-width="0.806515"
            stroke-linecap="round"
          />
        </svg>
        <svg
          width="797"
          height="2"
          viewBox="0 0 797 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.04925"
            y1="0.608751"
            x2="796.26"
            y2="0.608751"
            stroke="#E5E5EF"
            stroke-width="0.806515"
            stroke-linecap="round"
          />
        </svg>
        <svg
          width="797"
          height="2"
          viewBox="0 0 797 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.04925"
            y1="0.608751"
            x2="796.26"
            y2="0.608751"
            stroke="#E5E5EF"
            stroke-width="0.806515"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <!--Gradient-->
      <svg
        class="lg:w-full"
        xmlns="http://www.w3.org/2000/svg"
        height="124"
        viewBox="0 0 796 124"
        fill="none"
      >
        <g style="mix-blend-mode: multiply" opacity="0.33">
          <path
            d="M45.091 56.1366C31.851 76.4094 9.777 82.3186 0.39502 82.7391V123.308H795.697V16.294C784.428 20.0139 757.839 36.7548 741.631 73.9589C721.371 120.464 690.838 90.9457 678.568 82.0346C666.298 73.1234 644.612 70.3387 631.2 71.7311C617.789 73.1234 596.673 76.1867 586.685 58.9213C576.698 41.656 566.616 30.4285 539.317 34.6941C515.063 35.5295 504.505 35.2511 493.091 26.8969C481.677 18.5427 447.72 -0.950455 423.465 22.9983C399.21 46.947 374.1 57.8074 347.847 25.5045C321.595 -6.7984 293.631 -2.89977 282.788 7.68222C271.944 18.2642 264.804 50.5204 238.674 60.0012C216.468 64.3089 203.495 71.3912 180.061 95.1228C149.814 125.755 131.552 98.743 117.57 65.8831C103.588 33.0233 61.6411 30.7955 45.091 56.1366Z"
            fill="url(#paint0_linear_1_626)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_626"
            x1="398.046"
            y1="0.0704346"
            x2="398.046"
            y2="216.839"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8A74F9" />
            <stop offset="0.479167" stop-color="#8A74F9" stop-opacity="0.263733" />
            <stop offset="1" stop-color="#8A74F9" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <!--Stroke-->
      <svg
        class="stroke-svg lg:w-full cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="112"
        viewBox="0 0 796 112"
        fill="none"
      >
        <path
          d="M2.03377 84.3977C11.3835 83.978 33.3817 78.0804 46.5763 57.8472C63.0695 32.5556 104.872 34.7791 118.806 67.5747C132.74 100.37 150.94 127.329 181.083 96.7573C211.226 66.1851 213.973 70.0732 239.948 62.2941C266.173 54.4398 266.775 28.0169 285.44 9.77503C296.246 -0.78629 322.131 -4.9648 348.293 27.275C374.455 59.5148 399.48 48.6755 423.651 24.7736C447.823 0.871721 481.663 20.3268 493.037 28.6646C504.412 37.0025 518.013 39.5903 539.105 36.4466C565.384 32.53 576.358 43.3949 586.311 60.6265C596.264 77.8581 617.307 74.8009 630.673 73.4112C644.038 72.0216 665.65 74.8009 677.878 83.6946C690.106 92.5883 720.534 122.049 740.724 75.6347C756.876 38.5033 783.375 21.7951 794.605 18.0825"
          stroke="#8A74F9"
          stroke-width="2.41955"
          stroke-linecap="round"
          stroke-linejoin="round"
          @mouseover="handleMouseOver"
          @mouseout="handleMouseOut"
        />
      </svg>

      <!--Months-->
      <div dir="rtl" class="flex justify-between text-sm font-normal text-secondary">
        <span>يناير</span>
        <span>فبراير</span>
        <span>مارس</span>
        <span>أبريل</span>
        <span>مايو</span>
        <span>يونيو</span>
        <span>يوليو</span>
        <span>أغسطس</span>
        <span>سبتمبر</span>
        <span>أكتوبر</span>
        <span>نوفمبر</span>
        <span>ديسمبر</span>
      </div>
    </div>
  </div>
  <!--Chart Indecative-->
  <svg
    v-show="indecativeShown"
    :style="{ top: `${indicativeY}px`, left: `${indicativeX}px` }"
    class="absolute top-2"
    width="33"
    height="137"
    viewBox="0 0 33 137"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="15.8065"
      y1="13.8066"
      x2="15.8065"
      y2="136.194"
      stroke="#8A74F9"
      stroke-width="1.61303"
      stroke-linecap="round"
    />
    <g filter="url(#filter0_d_1_628)">
      <ellipse cx="16.5247" cy="9.27505" rx="9.52468" ry="9.27493" fill="#8A74F9" />
      <path
        d="M25.2428 9.27505C25.2428 13.932 21.3599 17.7435 16.5247 17.7435C11.6894 17.7435 7.80652 13.932 7.80652 9.27505C7.80652 4.61814 11.6894 0.806637 16.5247 0.806637C21.3599 0.806637 25.2428 4.61814 25.2428 9.27505Z"
        stroke="white"
        stroke-width="1.61303"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_628"
        x="0.547878"
        y="0.00012207"
        width="31.9536"
        height="31.4541"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6.45212" />
        <feGaussianBlur stdDeviation="3.22606" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_628" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_628" result="shape" />
      </filter>
    </defs>
  </svg>

  <!--Chart Tooltip-->
  <div
    v-show="indecativeShown"
    :style="{ top: `${indicativeY}px`, left: `${indicativeX - 80}px` }"
    class="absolute"
  >
    <svg width="91" height="42" viewBox="0 0 91 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Stat Container"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M76.3712 0.000122116C79.9346 0.000122091 82.8233 2.88883 82.8233 6.45224L82.8233 16.7644L89.7901 20.895C90.844 21.5198 90.844 23.0451 89.7901 23.6699L82.8233 27.8006L82.8233 34.6803C82.8233 38.2437 79.9346 41.1324 76.3712 41.1324L6.45212 41.1324C2.88872 41.1324 2.05516e-06 38.2437 2.11812e-06 34.6803L2.61682e-06 6.45224C2.67977e-06 2.88884 2.88873 0.00012198 6.45214 0.000121868L76.3712 0.000122116Z"
        fill="#1E1B39"
      />
    </svg>
    <div class="absolute flex justify-center items-center flex-col top-2 left-2">
      <div dir="rtl" class="text-white text-xs">250 إستخدام</div>
      <div class="flex flex-row justify-center items-center">
        <span class="text-accent text-xs justify-self-end">1.3%</span>
        <span
          ><svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="4.74882" cy="4.83807" rx="4.14588" ry="4.03717" fill="#8A74F9" />
            <path
              d="M5.67989 4.4061L5.56864 4.51443C4.97335 5.09411 4.37801 5.67384 3.7826 6.25363C3.66216 6.37092 3.51984 6.39661 3.3777 6.33256C3.24077 6.26986 3.16562 6.1551 3.18558 6.01635C3.20351 5.9161 3.25208 5.82346 3.32494 5.75051C3.90062 5.17979 4.48376 4.61634 5.06464 4.05069L5.17467 3.94354C5.13917 3.93763 5.10337 3.93357 5.06742 3.93137C4.83451 3.93036 4.60143 3.93256 4.36869 3.92968C4.18438 3.92765 4.05716 3.80411 4.05474 3.63241C4.05231 3.44515 4.16772 3.31958 4.36054 3.3184C4.89624 3.31502 5.43165 3.31463 5.96677 3.31722C6.18319 3.3184 6.30502 3.43231 6.30902 3.64069C6.31885 4.15795 6.32469 4.67526 6.32655 5.19264C6.32724 5.38226 6.20055 5.4938 6.00703 5.49228C5.82446 5.49059 5.70436 5.37634 5.6988 5.19213C5.6929 4.97344 5.69238 4.75458 5.68908 4.53572C5.68839 4.50125 5.68388 4.46745 5.67989 4.4061Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppChart',
  data() {
    return {
      indecativeShown: false,
      indicativeX: 0,
      indicativeY: 0
    }
  },
  methods: {
    handleMouseOver(e) {
      this.indecativeShown = true
      this.indicativeX = e.clientX
      this.indicativeY = e.clientY
      console.log('mouseover', this.indicativeX, this.indicativeY)
    },
    handleMouseOut(e) {
      this.indecativeShown = false
      console.log('mouseout', e)
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
}

.stroke-svg {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
