const Card = (data) => {
  return (
    `
      <div class="card ${data.card_classes}">
      <div class="b-left">
        <div class="icon icon-issue">
          <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
        <path d="M13,0 C5.79090909,0 0,5.79090909 0,13 C0,20.2090909 5.79090909,26 13,26 C20.2090909,26 26,20.2090909 26,13 C26,5.79090909 20.2090909,0 13,0 Z M13,23.6363636 C7.09090909,23.6363636 2.36363636,18.9090909 2.36363636,13 C2.36363636,7.09090909 7.09090909,2.36363636 13,2.36363636 C18.9090909,2.36363636 23.6363636,7.09090909 23.6363636,13 C23.6363636,18.9090909 18.9090909,23.6363636 13,23.6363636 Z M14.1818182,13 L14.1818182,17.7272727 C14.1818182,18.4363636 13.7090909,18.9090909 13,18.9090909 C12.2909091,18.9090909 11.8181818,18.4363636 11.8181818,17.7272727 L11.8181818,13 C11.8181818,12.2909091 12.2909091,11.8181818 13,11.8181818 C13.7090909,11.8181818 14.1818182,12.2909091 14.1818182,13 Z M13.8272727,7.44545455 C14.0636364,7.68181818 14.1818182,7.91818182 14.1818182,8.27272727 C14.1818182,8.62727273 14.0636364,8.86363636 13.8272727,9.1 C13.5909091,9.33636364 13.3545455,9.45454545 13,9.45454545 C12.8818182,9.45454545 12.8818182,9.45454545 12.7636364,9.45454545 C12.6454545,9.45454545 12.6454545,9.45454545 12.5272727,9.33636364 C12.4090909,9.33636364 12.4090909,9.21818182 12.2909091,9.21818182 C12.1727273,9.21818182 12.1727273,9.1 12.1727273,9.1 C11.9363636,8.86363636 11.8181818,8.62727273 11.8181818,8.27272727 C11.8181818,7.91818182 11.9363636,7.68181818 12.1727273,7.44545455 C12.1727273,7.44545455 12.2909091,7.32727273 12.2909091,7.32727273 C12.4090909,7.32727273 12.4090909,7.20909091 12.5272727,7.20909091 C12.6454545,7.20909091 12.6454545,7.20909091 12.7636364,7.09090909 C13.1181818,7.09090909 13.5909091,7.20909091 13.8272727,7.44545455 Z" id="path-issue-3"></path>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-8.000000, -23.000000)">
          <g class="icon-issue" transform="translate(8.000000, 23.000000)">
            <mask fill="white">
        <use xlink:href="#path-issue-3"></use>
            </mask>
            <use fill="#FFFFFF" fill-rule="nonzero" xlink:href="#path-issue-3"></use>
          </g>
        </g>
      </g>
          </svg>
        </div>
        <div class="icon icon-pr">
          <svg width="28px" height="26px" viewBox="0 0 28 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M23.75,15.625 L23.75,8 C23.75,5.875 22.125,4.25 20,4.25 L15.25,4.25 C14.5,4.25 14,4.75 14,5.5 C14,6.25 14.5,6.75 15.25,6.75 L20,6.75 C20.75,6.75 21.25,7.25 21.25,8 L21.25,15.625 C19.125,16.125 17.5,18.125 17.5,20.5 C17.5,23.25 19.75,25.5 22.5,25.5 C25.25,25.5 27.5,23.25 27.5,20.5 C27.5,18.125 25.875,16.25 23.75,15.625 Z M22.5,23 C21.125,23 20,21.875 20,20.5 C20,19.125 21.125,18 22.5,18 C23.875,18 25,19.125 25,20.5 C25,21.875 23.875,23 22.5,23 Z M5.5,0.5 C2.75,0.5 0.5,2.75 0.5,5.5 C0.5,7.875 2.125,9.75 4.25,10.375 L4.25,24.25 C4.25,25 4.75,25.5 5.5,25.5 C6.25,25.5 6.75,25 6.75,24.25 L6.75,10.375 C8.875,9.875 10.5,7.875 10.5,5.5 C10.5,2.75 8.25,0.5 5.5,0.5 Z M5.5,8 C4.125,8 3,6.875 3,5.5 C3,4.125 4.125,3 5.5,3 C6.875,3 8,4.125 8,5.5 C8,6.875 6.875,8 5.5,8 Z" id="path-pr-5"></path>
        <path d="M18.6625,7.9 C19.1125,8.35714286 19.1125,9.04285714 18.6625,9.5 C18.4375,9.72857143 18.2125,9.84285714 17.875,9.84285714 C17.5375,9.84285714 17.3125,9.72857143 17.0875,9.5 L12.3375,6.4062196 C11.8875,5.94907675 11.8875,5.01732016 12.3375,4.56017731 L17.0875,0.342857143 C17.5375,-0.114285714 18.2125,-0.114285714 18.6625,0.342857143 C19.1125,0.8 19.1125,1.32857143 18.6625,1.78571429 L14.5,5.5 L18.6625,7.9 Z" id="path-pr-7"></path>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-8.000000, -23.000000)">
          <g class="icon-pr" transform="translate(8.000000, 23.000000)">
            <mask fill="white">
        <use xlink:href="#path-pr-5"></use>
            </mask>
            <use fill="#FFFFFF" fill-rule="nonzero" xlink:href="#path-pr-5"></use>
            <mask fill="white">
        <use xlink:href="#path-pr-7"></use>
            </mask>
            <use fill="#FFFFFF" fill-rule="nonzero" xlink:href="#path-pr-7"></use>
          </g>
        </g>
      </g>
          </svg>
        </div>
      </div>
      <div class="b-body">
        <div class="b-body-top">
          <div class="id">${data.local_id}</div>
          <div class="icons">
      <div class="icon icon-comments">
        <svg width="28px" height="25px" viewBox="0 0 28 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <rect x="0" y="0" width="478" height="255" rx="15"></rect>
            <filter x="-4.8%" y="-7.5%" width="109.6%" height="118.0%" filterUnits="objectBoundingBox">
        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
        <feOffset dx="0" dy="4" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0.219607843   0 0 0 0 0.231372549   0 0 0 0 0.384313725  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-346.000000, -22.000000)">
        <g transform="translate(62.000000, 21.000000)" fill="#DFE0EB" fill-rule="nonzero">
          <g class="icon-comments" transform="translate(284.000000, 1.000000)">
            <path d="M20.2222222,10.9363714 L20.2222222,3.12467755 C20.2222222,1.40122259 18.8270833,0 17.1111111,0 L3.11111111,0 C1.39513889,0 0,1.40122259 0,3.12467755 L0,10.9363714 C0,12.6598264 1.39513889,14.061049 3.11111111,14.061049 L3.11111111,16.7072603 C3.11111111,17.097845 3.55347222,17.3224312 3.86458333,17.0880803 L7.88958333,14.0561667 L17.1111111,14.0561667 C18.8270833,14.061049 20.2222222,12.6598264 20.2222222,10.9363714 Z M24.8888889,7.81169387 L21.7777778,7.81169387 L21.7777778,10.9363714 C21.7777778,13.5191127 19.6826389,15.6233877 17.1111111,15.6233877 L9.33333333,15.6233877 L9.33333333,18.7480653 C9.33333333,20.4715202 10.7284722,21.8727428 12.4444444,21.8727428 L18.5548611,21.8727428 L22.5798611,24.9046565 C22.8909722,25.1390073 23.3333333,24.9144211 23.3333333,24.5238364 L23.3333333,21.8727428 L24.8888889,21.8727428 C26.6048611,21.8727428 28,20.4715202 28,18.7480653 L28,10.9363714 C28,9.21291646 26.6048611,7.81169387 24.8888889,7.81169387 Z"></path>
          </g>
        </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="icon icon-github">
        <svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <rect x="0" y="0" width="478" height="255" rx="15"></rect>
            <filter x="-4.8%" y="-7.5%" width="109.6%" height="118.0%" filterUnits="objectBoundingBox">
        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
        <feOffset dx="0" dy="4" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0.219607843   0 0 0 0 0.231372549   0 0 0 0 0.384313725  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-389.000000, -22.000000)">
        <g>
          <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-github-1"></use>
          <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-github-1"></use>
        </g>
        <g transform="translate(62.000000, 21.000000)" fill="#DFE0EB" fill-rule="nonzero">
          <g class="icon-github" transform="translate(327.000000, 1.000000)">
            <path d="M8.69637097,20.1299634 C8.69637097,20.2333531 8.57580645,20.3160648 8.42379032,20.3160648 C8.25080645,20.3315732 8.13024194,20.2488615 8.13024194,20.1299634 C8.13024194,20.0265738 8.25080645,19.9438621 8.40282258,19.9438621 C8.56008065,19.9283536 8.69637097,20.0110654 8.69637097,20.1299634 Z M7.06612903,19.8973367 C7.02943548,20.0007264 7.13427419,20.1196245 7.29153226,20.1506414 C7.42782258,20.2023362 7.58508065,20.1506414 7.61653226,20.0472517 C7.64798387,19.9438621 7.5483871,19.824964 7.39112903,19.7784387 C7.25483871,19.7422523 7.10282258,19.7939471 7.06612903,19.8973367 Z M9.38306452,19.8094555 C9.23104839,19.8456419 9.12620968,19.9438621 9.14193548,20.0627602 C9.15766129,20.1661498 9.29395161,20.2333531 9.45120968,20.1971667 C9.60322581,20.1609803 9.70806452,20.0627602 9.69233871,19.9593705 C9.6766129,19.8611504 9.53508065,19.7939471 9.38306452,19.8094555 Z M12.8322581,0 C5.56169355,0 0,5.44346469 0,12.6135364 C0,18.3464921 3.65887097,23.2523307 8.88508065,24.9789377 C9.55604839,25.0978358 9.79193548,24.6894467 9.79193548,24.3534303 C9.79193548,24.0329225 9.77620968,22.2649596 9.77620968,21.1793683 C9.77620968,21.1793683 6.10685484,21.9547906 5.33629032,19.6388626 C5.33629032,19.6388626 4.73870968,18.1345433 3.87903226,17.7468322 C3.87903226,17.7468322 2.67862903,16.9352235 3.96290323,16.9507319 C3.96290323,16.9507319 5.26814516,17.0541216 5.98629032,18.2844583 C7.13427419,20.2798784 9.05806452,19.7060659 9.80766129,19.3648801 C9.92822581,18.5377629 10.2689516,17.9639504 10.646371,17.6227646 C7.71612903,17.3022567 4.75967742,16.8835287 4.75967742,11.9104868 C4.75967742,10.4888793 5.15806452,9.77549072 5.99677419,8.86566186 C5.86048387,8.52964553 5.41491935,7.14422431 6.13306452,5.35558349 C7.22862903,5.01956715 9.75,6.75134367 9.75,6.75134367 C10.7983871,6.46185267 11.9254032,6.31193769 13.0419355,6.31193769 C14.1584677,6.31193769 15.2854839,6.46185267 16.333871,6.75134367 C16.333871,6.75134367 18.8552419,5.01439767 19.9508065,5.35558349 C20.6689516,7.1493938 20.2233871,8.52964553 20.0870968,8.86566186 C20.9258065,9.7806602 21.4395161,10.4940487 21.4395161,11.9104868 C21.4395161,16.8990371 18.3520161,17.2970872 15.4217742,17.6227646 C15.9040323,18.0311537 16.3129032,18.806576 16.3129032,20.0214043 C16.3129032,21.7635198 16.2971774,23.9191938 16.2971774,24.3430914 C16.2971774,24.6791077 16.5383065,25.0874968 17.2040323,24.9685987 C22.4459677,23.2523307 26,18.3464921 26,12.6135364 C26,5.44346469 20.1028226,0 12.8322581,0 Z M5.09516129,17.8295439 C5.02701613,17.8812387 5.04274194,18.0001368 5.13185484,18.098357 C5.21572581,18.1810687 5.33629032,18.2172551 5.40443548,18.1500518 C5.47258065,18.098357 5.45685484,17.9794589 5.36774194,17.8812387 C5.28387097,17.798527 5.16330645,17.7623406 5.09516129,17.8295439 Z M4.52903226,17.4108158 C4.49233871,17.4780191 4.54475806,17.5607308 4.64959677,17.6124256 C4.73346774,17.6641205 4.83830645,17.648612 4.875,17.5762393 C4.91169355,17.509036 4.85927419,17.4263243 4.75443548,17.3746295 C4.64959677,17.3436126 4.56572581,17.359121 4.52903226,17.4108158 Z M6.22741935,19.2511515 C6.14354839,19.3183547 6.175,19.4734392 6.29556452,19.5716594 C6.41612903,19.6905575 6.56814516,19.7060659 6.63629032,19.6233542 C6.70443548,19.5561509 6.67298387,19.4010665 6.56814516,19.3028463 C6.45282258,19.1839482 6.29556452,19.1684398 6.22741935,19.2511515 Z M5.62983871,18.4912376 C5.54596774,18.5429324 5.54596774,18.677339 5.62983871,18.796237 C5.71370968,18.9151351 5.85524194,18.96683 5.9233871,18.9151351 C6.00725806,18.8479319 6.00725806,18.7135253 5.9233871,18.5946272 C5.85,18.4757292 5.71370968,18.4240343 5.62983871,18.4912376 Z" id="path-github-1"></path>
          </g>
        </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="icon avatar">
      </div>
          </div>
        </div>
        <div class="b-body-middle">
          <div class="title">
      ${data.title}
          </div>
        </div>
        <!--
      <div class="b-body-bottom">
        <span class="tag red">high priority</span>
        <span class="tag yellow">warning</span>
        <span class="tag blue">cool</span>
      </div>
            -->
      </div>
      <div class="b-right">
        <span class="circle ${data.nb_parents > 0 ? "red" : "green"}">${data.nb_parents}</span>
        <span class="circle ${data.nb_children > 0 ? "red" : "green"}">${data.nb_children}</span>
        <span class="circle grey">${data.nb_related}</span>
      </div>
      <!--
          <div class="b-progress">
      <div class="b-progress-left">
        70%
      </div>
      <div class="b-progress-right">
        <div class="bar bar-bg">
          <div class="bar bar-progress" style="width:70%;">
          </div>
        </div>
      </div>
          </div>
          -->
      </div>
    `
  )
}

  export default Card;
