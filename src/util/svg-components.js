import React from 'react'

const DesignIcon = ({ fill, size }) => {
  return (
    <svg
      fill={fill}
      height={size}
      width={size}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M29.657 258.343A8 8 0 0016 264v224a8 8 0 008 8h224a8 8 0 005.657-13.657zM32 480V283.313L228.687 480z" />
      <path d="M72 448h64a8 8 0 005.657-13.657l-64-64A8 8 0 0064 376v64a8 8 0 008 8zm8-52.686L116.687 432H80zM104 48h16v16h-16zM136 48h16v16h-16zM168 48h16v16h-16zM180.756 160.7A7.884 7.884 0 00176 168v88a8 8 0 004.751 7.311l72 32a7.968 7.968 0 006.5-.006v.006l72-32A8 8 0 00336 256v-88a7.884 7.884 0 00-4.756-7.3v-.011l-72-32a8.01 8.01 0 00-6.5 0l-72 32zM248 275.69l-56-24.89v-70.49l56 24.89zm72-24.89l-56 24.89V205.2l56-24.889zm-64-106.046L308.3 168 256 191.245 203.7 168zM248 320h16v40h-16zM248 72h16v40h-16zM116.507 151.268l6.896-14.432 33.487 16.001-6.896 14.432zM354.927 152.721l33.486-16 6.896 14.432-33.486 16zM116.505 280.693l33.486-16 6.896 14.431-33.486 16.001z" />
      <path d="M488 384h-48V259.314l47.03-47.03a30.627 30.627 0 10-43.314-43.313L440 172.687V104a8 8 0 00-2.343-5.657l-80-80A8 8 0 00352 16H104a32.036 32.036 0 00-32 32v232h16V48a16.019 16.019 0 0116-16h240v48a32.036 32.036 0 0032 32h48v76.686L298.343 314.343a8.008 8.008 0 00-2.188 4.088l-8 40a8 8 0 009.414 9.414l40-8a8 8 0 004.088-2.188L424 275.314V384H264a8 8 0 00-8 8v24h-40v16h40v24a8 8 0 008 8h224a8 8 0 008-8v-64a8 8 0 00-8-8zM360 80V43.314L412.686 96H376a16.019 16.019 0 01-16-16zm-44.686 240L440 195.314 460.686 216 336 340.686zm150.059-144a14.628 14.628 0 0110.343 24.971L472 204.686 451.314 184l3.716-3.716A14.529 14.529 0 01465.373 176zm-156.46 160.227l10.86 10.86L306.2 349.8zM480 448H272v-48h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16z" />
    </svg>
  )
}

const DeliveryIcon = ({ fill, size }) => {
  return (
    <svg
      fill={fill}
      height={size}
      width={size}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M118.848 394.103c-5.523 0-10.028-4.477-10.028-10s4.449-10 9.972-10h.057c5.523 0 10 4.477 10 10s-4.478 10-10.001 10z" />
      <path d="M496.835 346.067v-86.338c0-1.239-.24-2.509-.694-3.662l-50.002-127.06a10 10 0 00-9.306-6.338h-95.844V80.686c0-5.523-4.478-10-10-10H206.437c-5.523 0-10 4.477-10 10s4.477 10 10 10h114.552v31.984h-28.494c-5.522 0-10 4.477-10 10v211.312H159.282c-10.313-10.541-24.64-17.09-40.462-17.09s-30.148 6.55-40.462 17.09H35.165v-143.87h131.736v16.578a10.002 10.002 0 009.999 10c2.04 0 4.07-.624 5.795-1.85l65.366-46.469a10 10 0 000-16.3l-65.366-46.469a10.002 10.002 0 00-15.794 8.151v16.578H35.165V90.686h81.472c5.523 0 10-4.477 10-10s-4.477-10-10-10H25.165c-5.523 0-10 4.477-10 10v265.381C6.251 349.958 0 358.879 0 369.242v10.631c0 13.944 11.289 25.289 25.165 25.289h40.834c8.35 21.152 28.872 36.152 52.821 36.152s44.471-15 52.821-36.152h154.347c8.35 21.152 28.871 36.152 52.821 36.152s44.47-15 52.821-36.152h55.206c13.876 0 25.165-11.345 25.165-25.289v-10.631c-.001-10.363-6.252-19.284-15.166-23.175zM35.165 160.331h141.736c5.523 0 10-4.477 10-10v-7.2l38.107 27.09-38.107 27.09v-7.2c0-5.523-4.477-10-10-10H35.165zm26.854 224.832H25.165c-2.8 0-5.165-2.422-5.165-5.289v-10.631c0-2.852 2.365-5.261 5.165-5.261h40.466a57.246 57.246 0 00-3.638 20.122c0 .354.02.705.026 1.059zm56.801 36.151c-20.307 0-36.827-16.693-36.827-37.211s16.521-37.212 36.827-37.212 36.828 16.693 36.828 37.212-16.522 37.211-36.828 37.211zm353.333-171.585H370.752v-64.707h75.937zm-169.658-107.06h127.526l8.797 22.354h-78.066c-5.522 0-10 4.477-10 10v84.707c0 5.523 4.478 10 10 10h116.083v27.126h-14.718c-5.522 0-10 4.477-10 10s4.478 10 10 10h14.718v27.126h-57.564c-10.313-10.541-24.64-17.09-40.462-17.09s-30.149 6.55-40.462 17.09h-35.852zM175.621 385.163c.006-.354.027-.704.027-1.06a57.277 57.277 0 00-3.638-20.122h153.61a57.269 57.269 0 00-3.638 20.122c0 .355.02.706.027 1.06zm203.188 36.151c-20.307 0-36.827-16.693-36.827-37.211s16.521-37.212 36.827-37.212 36.827 16.693 36.827 37.212-16.521 37.211-36.827 37.211zM492 379.874c0 2.867-2.365 5.289-5.165 5.289h-51.226c.006-.354.027-.704.027-1.06a57.277 57.277 0 00-3.638-20.122h54.838c2.8 0 5.165 2.409 5.165 5.261v10.632z" />
      <path d="M378.837 374.103h-.057c-5.522 0-9.972 4.477-9.972 10s4.506 10 10.028 10 10-4.477 10-10-4.477-10-9.999-10zM70.49 286.739c-5.523 0-10 4.477-10 10s4.477 10 10 10h49.152c5.523 0 10-4.477 10-10s-4.477-10-10-10zM159.632 256.271c0-5.523-4.477-10-10-10H70.49c-5.523 0-10 4.477-10 10s4.477 10 10 10h79.142c5.523 0 10-4.477 10-10zM161.537 90.686h.028c5.523 0 9.986-4.477 9.986-10s-4.491-10-10.014-10-10 4.477-10 10 4.477 10 10 10z" />
    </svg>
  )
}

const MeasureIcon = ({ fill, size }) => {
  return (
    <svg
      fill={fill}
      height={size}
      width={size}
      viewBox="0 0 510 510"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M496.5 414.167H180.354c-3.62-43.84-38.679-78.899-82.52-82.52V15.501c0-8.547-6.953-15.5-15.5-15.5H15.5C6.953.001 0 6.954 0 15.501v76.396c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5V15.501a.5.5 0 01.5-.5h66.834a.5.5 0 01.5.5v17.634H57.2c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h25.633v18.132h-8.808c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h8.808v18.132H57.2c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h25.633v18.132h-8.808c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h8.808v18.131H57.2c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h25.633v18.132h-8.808c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h8.808v18.138H57.2c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h25.633v18.131h-8.808c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h8.808V298.2H57.2c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h25.633v18.135H15V121.896c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v366.038C0 501.204 10.797 512 24.067 512H496.5c8.547 0 15.5-6.953 15.5-15.5v-66.833c0-8.547-6.953-15.5-15.5-15.5zM15 487.934V346.333h75.334c41.539 0 75.333 33.794 75.333 75.333V497h-141.6c-4.999 0-9.067-4.067-9.067-9.066zm482 8.566a.5.5 0 01-.5.5H180.667v-67.833h18.134V454.8c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-25.633h18.132v8.808c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-8.808h18.131V454.8c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-25.633h18.132v8.808c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-8.808h18.131V454.8c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-25.633h18.132v8.808c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-8.808h18.138V454.8c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-25.633h18.13v8.808c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-8.808h18.137V454.8c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-25.633H496.5a.5.5 0 01.5.5z" />
      <path d="M90.334 397.6c-13.271 0-24.066 10.796-24.066 24.066 0 13.271 10.796 24.066 24.066 24.066s24.066-10.796 24.066-24.066S103.604 397.6 90.334 397.6zm0 33.132c-4.999 0-9.066-4.067-9.066-9.066s4.067-9.066 9.066-9.066 9.066 4.067 9.066 9.066-4.067 9.066-9.066 9.066z" />
      <path d="M90.334 364.467c-31.54 0-57.2 25.659-57.2 57.199s25.66 57.2 57.2 57.2 57.2-25.66 57.2-57.2c-.001-31.54-25.66-57.199-57.2-57.199zm0 99.399c-23.269 0-42.2-18.931-42.2-42.2 0-23.268 18.931-42.199 42.2-42.199s42.2 18.931 42.2 42.199c-.001 23.269-18.931 42.2-42.2 42.2zM214.864 143.605a7.468 7.468 0 004.98-1.895l21.447-19.063c3.096-2.752 3.375-7.492.623-10.588s-7.493-3.377-10.588-.623L209.878 130.5a7.5 7.5 0 004.986 13.105zM261.542 102.113a7.472 7.472 0 004.98-1.894l21.447-19.064c3.096-2.752 3.374-7.492.622-10.588s-7.493-3.377-10.588-.623l-21.447 19.063a7.5 7.5 0 004.986 13.106zM173.167 180.667h17.603a7.5 7.5 0 001.647-14.818 7.502 7.502 0 00-11.076-9.981l-13.156 11.694a7.5 7.5 0 004.982 13.105zM271.04 173.167a7.5 7.5 0 00-7.5-7.5h-32.807c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h32.807a7.5 7.5 0 007.5-7.5zM300.523 362.9h14.244v18.133H305.7c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h33.133c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-9.067V362.9h35.483c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-35.483V180.667h100.967V347.9H395.25c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h42.983a7.5 7.5 0 007.5-7.5V180.667h25.633a7.5 7.5 0 004.983-13.106L329.767 37.265V15h9.066c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5H305.7c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h9.067v22.264l-10.639 9.457a7.498 7.498 0 00-.622 10.588 7.477 7.477 0 005.608 2.517 7.473 7.473 0 004.98-1.895l.673-.599v108.333h-10.102c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h10.102V347.9h-14.244c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM451.64 165.667H329.767V57.335zM254.009 362.9h21.304c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-21.304c-4.142 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM206.3 362.9h21.744c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5H213.8v-14.244c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5V355.4a7.5 7.5 0 007.5 7.5zM206.3 301.54a7.5 7.5 0 007.5-7.5v-33.479c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v33.479a7.5 7.5 0 007.5 7.5zM206.3 227.261a7.5 7.5 0 007.5-7.5v-21.744c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v21.744a7.5 7.5 0 007.5 7.5z" />
    </svg>
  )
}
const ContractIcon = ({ fill, size }) => {
  return (
    <svg
      fill={fill}
      height={size}
      width={size}
      viewBox="0 0 510 510"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M508.843 108.918L487.63 87.706l-26.24 26.24c-17.195-9.879-39.569-7.49-54.246 7.188l-8.856 8.856V0H82.274L3.157 79.117V512h395.131V266.533l77.128-77.128c14.678-14.678 17.068-37.052 7.188-54.247zm-296.32 253.808l21.3 21.3-36.915 15.615zm44.786 2.359l-25.845-25.844 165.073-165.074 25.845 25.845zM90.447 34.253V87.29H37.41zM368.288 482H33.157V117.29h87.29V30h247.841v129.99l-47.3 47.3H79.873v30h211.115l-30 30H79.873v30h151.115l-40.483 40.483-26.095 61.692-20.966-20.965-33.5 33.5H63.157v30h59.213l21.074-21.074 23.831 23.822 91.501-38.704 109.512-109.512zm85.915-313.808l-10.607 10.607-25.845-25.846 10.607-10.607c5.85-5.848 15.364-5.849 21.214 0l4.632 4.632c5.847 5.849 5.847 15.365-.001 21.214z" />
      <path d="M122.116 147.29h157.213v30H122.116z" />
    </svg>
  )
}

const ManufactureIcon = ({ fill, size }) => {
  return (
    <svg
      fill={fill}
      height={size}
      width={size}
      viewBox="-20 -40 661.333 661"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 248.832h55.477a148.72 148.72 0 0014.085 33.883l-39.265 39.25a10.002 10.002 0 000 14.148l42.422 42.434c3.906 3.898 10.234 3.898 14.14 0l39.27-39.274A148.62 148.62 0 00170 353.355v55.477c0 5.523 4.477 10 10 10h60c5.523 0 10-4.477 10-10v-55.477a148.62 148.62 0 0033.871-14.082l39.27 39.274c3.968 3.75 10.175 3.75 14.14 0l42.43-42.434a10.002 10.002 0 000-14.148l-39.274-39.25a148.72 148.72 0 0014.086-33.883H410c5.523 0 10-4.477 10-10v-60c0-5.52-4.477-10-10-10h-55.477a148.764 148.764 0 00-14.086-33.879l39.266-39.25a10.002 10.002 0 000-14.148L337.281 39.12c-3.906-3.902-10.234-3.902-14.14 0l-39.27 39.274A149.046 149.046 0 00250 64.312V8.832c0-5.52-4.477-10-10-10h-60c-5.523 0-10 4.48-10 10v55.48a149.046 149.046 0 00-33.871 14.083L96.859 39.12c-3.968-3.75-10.175-3.75-14.14 0l-42.43 42.434a10.002 10.002 0 000 14.148l39.273 39.25a148.764 148.764 0 00-14.085 33.879H10c-5.523 0-10 4.48-10 10v60c0 5.523 4.477 10 10 10zm10-60h53.3c4.7 0 8.766-3.27 9.77-7.86a128.657 128.657 0 0117.52-42.14 10.002 10.002 0 00-1.352-12.469L61.5 88.625l28.29-28.293 37.73 37.738A10.003 10.003 0 00140 99.426a128.86 128.86 0 0142.14-17.52 10.01 10.01 0 007.86-9.773V18.832h40v53.3c0 4.7 3.273 8.766 7.86 9.774A128.86 128.86 0 01280 99.426a10.003 10.003 0 0012.48-1.356l37.73-37.738 28.282 28.293-37.73 37.727a10.003 10.003 0 00-1.352 12.48 128.623 128.623 0 0117.508 42.148 10.008 10.008 0 009.77 7.864H400v40h-53.313c-4.695 0-8.761 3.27-9.769 7.86a128.501 128.501 0 01-17.508 42.128 10.007 10.007 0 001.352 12.473l37.738 37.73-28.29 28.3-37.73-37.741a10.007 10.007 0 00-12.48-1.352 128.561 128.561 0 01-42.129 17.52c-4.594 1-7.871 5.07-7.871 9.77v53.3h-40v-53.3c0-4.7-3.277-8.77-7.871-9.77A128.561 128.561 0 01140 318.242a10.007 10.007 0 00-12.48 1.352l-37.73 37.742-28.282-28.293 37.73-37.73a10.002 10.002 0 001.352-12.481 128.697 128.697 0 01-17.52-42.148 9.995 9.995 0 00-9.77-7.852H20zm0 0" />
      <path d="M210 288.832c44.184 0 80-35.812 80-80 0-44.184-35.816-80-80-80s-80 35.816-80 80c.047 44.16 35.84 79.953 80 80zm0-140c33.133 0 60 26.867 60 60 0 33.137-26.867 60-60 60s-60-26.863-60-60c.035-33.125 26.875-59.965 60-60zm0 0" />
      <path d="M210 318.832c60.75 0 110-49.246 110-110 0-60.75-49.25-110-110-110s-110 49.25-110 110c.074 60.723 49.277 109.93 110 110zm0-200c49.707 0 90 40.293 90 90s-40.293 90-90 90-90-40.293-90-90c.055-49.68 40.316-89.945 90-90zm0 0M570 458.832v-80c0-5.52-4.477-10-10-10h-20v-80c0-5.52-4.477-10-10-10h-90c-5.523 0-10 4.48-10 10v80h-50c-5.523 0-10 4.48-10 10v80H50c-27.602.035-49.965 22.398-50 50v20c.035 27.605 22.398 49.969 50 50h520c27.602-.031 49.965-22.395 50-50v-20c-.035-27.602-22.398-49.965-50-50zm-20 0h-70v-70h70zm-100-160h70v70h-70zm-60 90h70v70h-70zm210 140c0 16.57-13.434 30-30 30H50c-16.566 0-30-13.43-30-30v-20c0-16.566 13.434-30 30-30h520c16.566 0 30 13.434 30 30zm0 0" />
      <path d="M310 488.832c-16.566 0-30 13.434-30 30 0 16.57 13.434 30 30 30s30-13.43 30-30c0-16.566-13.434-30-30-30zm0 40c-5.523 0-10-4.477-10-10 0-5.52 4.477-10 10-10s10 4.48 10 10c0 5.523-4.477 10-10 10zm0 0M210 488.832c-16.566 0-30 13.434-30 30 0 16.57 13.434 30 30 30s30-13.43 30-30c0-16.566-13.434-30-30-30zm0 40c-5.523 0-10-4.477-10-10 0-5.52 4.477-10 10-10s10 4.48 10 10c0 5.523-4.477 10-10 10zm0 0M410 488.832c-16.566 0-30 13.434-30 30 0 16.57 13.434 30 30 30s30-13.43 30-30c0-16.566-13.434-30-30-30zm0 40c-5.523 0-10-4.477-10-10 0-5.52 4.477-10 10-10s10 4.48 10 10c0 5.523-4.477 10-10 10zm0 0M110 488.832c-16.566 0-30 13.434-30 30 0 16.57 13.434 30 30 30s30-13.43 30-30c0-16.566-13.434-30-30-30zm0 40c-5.523 0-10-4.477-10-10 0-5.52 4.477-10 10-10s10 4.48 10 10c0 5.523-4.477 10-10 10zm0 0M510 488.832c-16.566 0-30 13.434-30 30 0 16.57 13.434 30 30 30s30-13.43 30-30c0-16.566-13.434-30-30-30zm0 40c-5.523 0-10-4.477-10-10 0-5.52 4.477-10 10-10s10 4.48 10 10c0 5.523-4.477 10-10 10zm0 0" />
    </svg>
  )
}

const HappinessIcon = ({ fill, size }) => {
  return (
    <svg
      fill={fill}
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path d="M309.126 158.729c-4.505-3.195-10.747-2.137-13.943 2.368l-.194.273c-3.196 4.504-2.136 10.746 2.368 13.942a9.959 9.959 0 005.779 1.846 9.987 9.987 0 008.164-4.214l.194-.273c3.196-4.504 2.136-10.746-2.368-13.942zM286.344 187.069c-3.502-4.271-9.803-4.892-14.073-1.389-13.893 11.396-29.68 19.508-46.923 24.112-5.336 1.425-8.507 6.905-7.082 12.241 1.194 4.472 5.236 7.423 9.655 7.423a9.96 9.96 0 002.586-.342c20.017-5.345 38.335-14.756 54.447-27.972 4.271-3.502 4.893-9.804 1.39-14.073z" />
      <path d="M482 226.47c-16.542 0-30 13.458-30 29.999v5.001c0 41.937-30.535 76.854-70.535 83.743a47.931 47.931 0 008.28-26.984v-6.946c0-26.58-21.625-48.204-48.205-48.204s-48.204 21.624-48.204 48.204v6.946c0 9.736 2.91 18.8 7.893 26.387-38.429-8.146-67.357-42.326-67.357-83.146v-5.001c0-16.541-13.458-29.999-30-29.999s-30 13.458-30 29.999v5.001c0 20.297 4.13 39.926 12.098 58.061H117.927V218.823a9.997 9.997 0 00-7.25-9.614C57.288 193.94 20 144.509 20 89v-5c0-5.514 4.486-10 10-10s10 4.486 10 10v5c0 57.897 47.103 105 105 105h48.127c57.897 0 105-47.103 105-105v-5c0-5.514 4.486-10 10-10s10 4.486 10 10v5c0 15.371-2.769 30.386-8.231 44.625-1.978 5.156.599 10.94 5.756 12.918 5.154 1.979 10.94-.6 12.918-5.756 6.342-16.534 9.557-33.958 9.557-51.787v-5c0-16.542-13.458-30-30-30s-30 13.458-30 30v5c0 41.936-30.535 76.853-70.534 83.743a47.926 47.926 0 008.279-26.982v-6.946c0-26.58-21.625-48.205-48.205-48.205s-48.204 21.625-48.204 48.205v6.946c0 9.735 2.91 18.799 7.893 26.385C88.927 164 60 129.82 60 89v-5c0-16.542-13.458-30-30-30S0 67.458 0 84v5c0 32.106 10.322 62.548 29.849 88.033 17.344 22.635 41.309 39.875 68.079 49.118V329.53c0 5.522 4.477 10 10 10h1.826V502c0 5.522 4.477 10 10 10s10-4.478 10-10V339.53h66.96a148.211 148.211 0 007.008 9.972c.662.864 1.351 1.704 2.032 2.552V502c0 5.522 4.477 10 10 10s10-4.478 10-10V372.49c13.625 11.419 29.286 20.342 46.047 26.13V502c0 5.522 4.477 10 10 10s10-4.478 10-10V391.292a9.997 9.997 0 00-7.25-9.614c-53.39-15.269-90.678-64.699-90.678-120.208v-5.001c0-5.514 4.486-9.999 10-9.999s10 4.485 10 9.999v5.001c0 57.897 47.103 105 105 105H367c57.897 0 105-47.103 105-105v-5.001c0-5.514 4.486-9.999 10-9.999s10 4.485 10 9.999v5.001c0 56.534-38.152 106.205-92.778 120.791a9.999 9.999 0 00-7.42 9.661v72.411c0 5.522 4.477 10 10 10s10-4.478 10-10V399.39C471.176 380.101 512 324.459 512 261.47v-5.001c0-16.541-13.458-29.999-30-29.999zm-342.537-87.656c0-15.553 12.652-28.205 28.204-28.205s28.205 12.652 28.205 28.205v6.946c0 15.552-12.652 28.204-28.205 28.204-15.552 0-28.204-12.652-28.204-28.204v-6.946zm230.282 179.415c0 15.552-12.652 28.204-28.205 28.204-15.552 0-28.204-12.652-28.204-28.204v-6.946c0-15.552 12.652-28.204 28.204-28.204s28.205 12.652 28.205 28.204v6.946zM408.87 494.93c-1.86-1.861-4.44-2.93-7.07-2.93s-5.21 1.069-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.07-2.931c1.86-1.859 2.93-4.439 2.93-7.069s-1.07-5.21-2.93-7.07z" />
      <path d="M167.667 374c-5.523 0-10 4.478-10 10v118c0 5.522 4.477 10 10 10s10-4.478 10-10V384c0-5.522-4.477-10-10-10zM466 82c-5.523 0-10 4.478-10 10v12.43c0 5.522 4.477 10 10 10s10-4.478 10-10V92c0-5.522-4.477-10-10-10zM466 141.57c-5.523 0-10 4.478-10 10V164c0 5.522 4.477 10 10 10s10-4.478 10-10v-12.43c0-5.522-4.477-10-10-10zM502 118h-12.43c-5.523 0-10 4.478-10 10s4.477 10 10 10H502c5.523 0 10-4.478 10-10s-4.477-10-10-10zM442.43 118H430c-5.523 0-10 4.478-10 10s4.477 10 10 10h12.43c5.523 0 10-4.478 10-10s-4.477-10-10-10zM219.873 0c-5.523 0-10 4.478-10 10v12.43c0 5.522 4.477 10 10 10s10-4.478 10-10V10c0-5.522-4.477-10-10-10zM219.873 59.57c-5.523 0-10 4.478-10 10V82c0 5.522 4.477 10 10 10s10-4.478 10-10V69.57c0-5.522-4.477-10-10-10zM255.873 36h-12.43c-5.523 0-10 4.478-10 10s4.477 10 10 10h12.43c5.523 0 10-4.478 10-10s-4.477-10-10-10zM196.303 36h-12.43c-5.523 0-10 4.478-10 10s4.477 10 10 10h12.43c5.523 0 10-4.478 10-10s-4.477-10-10-10z" />
    </svg>
  )
}

const VKIcon = ({ fill, size }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739V5.949c0-.656-.187-.949-.74-.949H9.161c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001H.9c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553C6.318 17.343 9.374 19 12.154 19c1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667C19.114 18.217 19.407 19 20.405 19h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"
      />
    </svg>
  )
}

const ViberIcon = ({ fill, size }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill={fill}>
        <path d="M23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001C17.814-.6 7.392-1.035 3.7 2.471 2.042 4.186 1.458 6.703 1.394 9.819c-.064 3.117-.14 8.956 5.301 10.54H6.7l-.005 2.419s-.037.98.589 1.177c.716.232 1.04-.223 3.267-2.883 3.724.323 6.584-.417 6.909-.525.752-.252 5.007-.815 5.695-6.654zM10.918 19.37s-2.357 2.939-3.09 3.702c-.24.248-.503.225-.499-.267 0-.323.018-4.016.018-4.016-4.613-1.322-4.341-6.294-4.291-8.895.05-2.602.526-4.733 1.93-6.168C8.225.689 17.362 1.368 19.69 3.556c2.846 2.523 1.833 9.651 1.839 9.894-.585 4.874-4.033 5.183-4.667 5.394-.271.09-2.786.737-5.944.526z" />
        <path d="M12.222 4.297c-.385 0-.385.6 0 .605 2.987.023 5.447 2.105 5.474 5.924 0 .403.59.398.585-.005h-.001c-.032-4.115-2.718-6.501-6.058-6.524z" />
        <path d="M16.151 10.193c-.009.398.58.417.585.014.049-2.269-1.35-4.138-3.979-4.335-.385-.028-.425.577-.041.605 2.28.173 3.481 1.729 3.435 3.716zM15.521 12.774c-.494-.286-.997-.108-1.205.173l-.435.563c-.221.286-.634.248-.634.248-3.014-.797-3.82-3.951-3.82-3.951s-.037-.427.239-.656l.544-.45c.272-.216.444-.736.167-1.247-.74-1.337-1.237-1.798-1.49-2.152-.266-.333-.666-.408-1.082-.183h-.009c-.865.506-1.812 1.453-1.509 2.428.517 1.028 1.467 4.305 4.495 6.781 1.423 1.171 3.675 2.371 4.631 2.648l.009.014c.942.314 1.858-.67 2.347-1.561v-.007c.217-.431.145-.839-.172-1.106-.562-.548-1.41-1.153-2.076-1.542z" />
        <path d="M13.169 8.104c.961.056 1.427.558 1.477 1.589.018.403.603.375.585-.028-.064-1.346-.766-2.096-2.03-2.166-.385-.023-.421.582-.032.605z" />
      </g>
    </svg>
  )
}
const TelegramIcon = ({ fillInner, fillOuter, size }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" fill={fillOuter} r="12" />
      <path
        fill={fillInner}
        d="M5.491 11.74l11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
      />
    </svg>
  )
}

export {
  DesignIcon,
  DeliveryIcon,
  MeasureIcon,
  ContractIcon,
  ManufactureIcon,
  HappinessIcon,
  VKIcon,
  ViberIcon,
  TelegramIcon,
}