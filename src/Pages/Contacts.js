
import Free from "../components/Free";
import Img1 from "../images/contacts_img.webp"

function Contacts() {
    return (
      <>
        <div className="Contacts custom__container">
            <div className="Page_navigation">Главная / Контакты</div>
            <div className="Contacts_top">
            <div className="Contacts_left">
                <div className="Page_title">Контакты</div>
                <div className="Contacts_left-address Cla">
                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7808 19.7005L11.1906 19.2377L11.7808 19.7005ZM6.21921 19.7005L5.62903 20.1633L6.21921 19.7005ZM9 22.0055V21.2555V22.0055ZM16.25 9.6087C16.25 10.8352 15.6104 12.4764 14.6037 14.256C13.6137 16.0063 12.3342 17.7794 11.1906 19.2377L12.371 20.1633C13.5371 18.6762 14.8672 16.837 15.9094 14.9945C16.9349 13.1814 17.75 11.2494 17.75 9.6087H16.25ZM6.80938 19.2377C5.66578 17.7794 4.38628 16.0063 3.39625 14.256C2.38962 12.4764 1.75 10.8352 1.75 9.6087H0.25C0.25 11.2494 1.06511 13.1814 2.09064 14.9945C3.13277 16.837 4.46288 18.6762 5.62903 20.1633L6.80938 19.2377ZM1.75 9.6087C1.75 5.21571 5.04678 1.75 9 1.75V0.25C4.11666 0.25 0.25 4.49277 0.25 9.6087H1.75ZM9 1.75C12.9532 1.75 16.25 5.21571 16.25 9.6087H17.75C17.75 4.49277 13.8833 0.25 9 0.25V1.75ZM11.1906 19.2377C10.5717 20.027 10.1641 20.5426 9.79918 20.8741C9.46635 21.1764 9.24418 21.2555 9 21.2555V22.7555C9.72906 22.7555 10.2948 22.4504 10.8078 21.9844C11.2886 21.5476 11.7849 20.9107 12.371 20.1633L11.1906 19.2377ZM5.62903 20.1633C6.21511 20.9107 6.71136 21.5476 7.19224 21.9844C7.70524 22.4504 8.27094 22.7555 9 22.7555V21.2555C8.75582 21.2555 8.53365 21.1764 8.20082 20.8741C7.83587 20.5426 7.42834 20.027 6.80938 19.2377L5.62903 20.1633ZM5.25 10C5.25 12.0711 6.92893 13.75 9 13.75V12.25C7.75736 12.25 6.75 11.2426 6.75 10H5.25ZM9 13.75C11.0711 13.75 12.75 12.0711 12.75 10H11.25C11.25 11.2426 10.2426 12.25 9 12.25V13.75ZM12.75 10C12.75 7.92893 11.0711 6.25 9 6.25V7.75C10.2426 7.75 11.25 8.75736 11.25 10H12.75ZM9 6.25C6.92893 6.25 5.25 7.92893 5.25 10H6.75C6.75 8.75736 7.75736 7.75 9 7.75V6.25Z" fill="#111111"/>
                    </svg>
                    <div className="block_text">
                    <span className="bold">Адрес:</span><br />
                    <span>г. Москва, п. Сосенское, Калужское Шоссе 23-й км,</span><br />
                    <span>домовладение № 14, строение 3, пом. А-150.1</span>
                    </div>
                </div>
                <div className="Contacts_left-phone Cla">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.7629 1.66264C2.83363 1.59191 2.869 1.55655 2.90015 1.52792C3.6662 0.824026 4.84368 0.824026 5.60972 1.52792C5.64088 1.55655 5.67624 1.59191 5.74697 1.66264L7.20686 3.12253C8.00985 3.92552 8.2395 5.13817 7.78574 6.17916C7.33197 7.22016 7.56162 8.4328 8.36461 9.23579L10.7642 11.6354C11.5672 12.4384 12.7798 12.668 13.8208 12.2143C14.8618 11.7605 16.0745 11.9902 16.8775 12.7931L18.3374 14.253C18.4081 14.3238 18.4434 14.3591 18.4721 14.3903C19.176 15.1563 19.176 16.3338 18.4721 17.0998C18.4434 17.131 18.4081 17.1664 18.3374 17.2371L17.45 18.1245C16.7273 18.8471 15.6856 19.1505 14.688 18.9288C7.89049 17.4182 2.58179 12.1095 1.07123 5.31201C0.84954 4.31439 1.15289 3.27265 1.87553 2.55002L2.7629 1.66264Z" stroke="#111111" stroke-width="1.5"/>
                    </svg>
                    <div className="block_text">
                    <span className="bold">Телефон:</span><br />
                    <span>+7 (960) 739-95-47</span>
                    </div>
                </div>
                <div className="Contacts_left-email Cla">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.92893 5.92893L3.3986 6.45926L3.92893 5.92893ZM2 4L2.53033 3.46967L2.51601 3.45535L2.50093 3.44182L2 4ZM20 4L20.5303 4.53033L20 4ZM18.0711 5.92894L18.6014 6.45927L18.0711 5.92894ZM3.06107 18.0451L3.50191 17.4383L3.06107 18.0451ZM1.95491 16.9389L2.56168 16.4981L1.95491 16.9389ZM20.0451 16.9389L19.4383 16.4981L20.0451 16.9389ZM18.9389 18.0451L18.4981 17.4383L18.9389 18.0451ZM18.9389 1.95491L18.4981 2.56168L18.9389 1.95491ZM20.0451 3.06107L19.4383 3.50191L20.0451 3.06107ZM3.06107 1.95491L3.50191 2.56168L3.06107 1.95491ZM1.95491 3.06107L1.34815 2.62023L1.95491 3.06107ZM1.60805 3.64824L0.929871 3.32797H0.929871L1.60805 3.64824ZM20.379 3.62103L21.0546 3.29546L20.379 3.62103ZM4.45926 5.3986L2.53033 3.46967L1.46967 4.53033L3.3986 6.45926L4.45926 5.3986ZM19.4697 3.46967L17.5407 5.3986L18.6014 6.45927L20.5303 4.53033L19.4697 3.46967ZM3.3986 6.45926C5.05028 8.11094 6.34126 9.40417 7.48288 10.2752C8.64181 11.1594 9.73455 11.6789 11 11.6789V10.1789C10.1944 10.1789 9.41825 9.8651 8.39275 9.08267C7.34994 8.28703 6.14092 7.08026 4.45926 5.3986L3.3986 6.45926ZM17.5407 5.3986C15.8591 7.08026 14.6501 8.28703 13.6072 9.08267C12.5817 9.8651 11.8056 10.1789 11 10.1789V11.6789C12.2655 11.6789 13.3582 11.1594 14.5171 10.2752C15.6587 9.40417 16.9497 8.11094 18.6014 6.45927L17.5407 5.3986ZM10 1.75H12V0.25H10V1.75ZM12 18.25H10V19.75H12V18.25ZM10 18.25C8.10843 18.25 6.74999 18.249 5.69804 18.135C4.66013 18.0225 4.00992 17.8074 3.50191 17.4383L2.62023 18.6518C3.42656 19.2377 4.37094 19.5 5.53648 19.6263C6.68798 19.751 8.14184 19.75 10 19.75V18.25ZM0.25 10C0.25 11.8582 0.248971 13.312 0.373728 14.4635C0.500006 15.6291 0.762324 16.5734 1.34815 17.3798L2.56168 16.4981C2.19259 15.9901 1.97745 15.3399 1.865 14.302C1.75103 13.25 1.75 11.8916 1.75 10H0.25ZM3.50191 17.4383C3.14111 17.1762 2.82382 16.8589 2.56168 16.4981L1.34815 17.3798C1.70281 17.8679 2.13209 18.2972 2.62023 18.6518L3.50191 17.4383ZM20.25 10C20.25 11.8916 20.249 13.25 20.135 14.302C20.0225 15.3399 19.8074 15.9901 19.4383 16.4981L20.6518 17.3798C21.2377 16.5734 21.5 15.6291 21.6263 14.4635C21.751 13.312 21.75 11.8582 21.75 10H20.25ZM12 19.75C13.8582 19.75 15.312 19.751 16.4635 19.6263C17.6291 19.5 18.5734 19.2377 19.3798 18.6518L18.4981 17.4383C17.9901 17.8074 17.3399 18.0225 16.302 18.135C15.25 18.249 13.8916 18.25 12 18.25V19.75ZM19.4383 16.4981C19.1762 16.8589 18.8589 17.1762 18.4981 17.4383L19.3798 18.6518C19.8679 18.2972 20.2972 17.8679 20.6518 17.3798L19.4383 16.4981ZM12 1.75C13.8916 1.75 15.25 1.75103 16.302 1.865C17.3399 1.97745 17.9901 2.19259 18.4981 2.56168L19.3798 1.34815C18.5734 0.762324 17.6291 0.500006 16.4635 0.373728C15.312 0.248971 13.8582 0.25 12 0.25V1.75ZM18.4981 2.56168C18.8589 2.82382 19.1762 3.14111 19.4383 3.50191L20.6518 2.62023C20.2972 2.13209 19.8679 1.70281 19.3798 1.34815L18.4981 2.56168ZM10 0.25C8.14184 0.25 6.68798 0.248971 5.53648 0.373728C4.37094 0.500006 3.42656 0.762324 2.62023 1.34815L3.50191 2.56168C4.00992 2.19259 4.66013 1.97745 5.69804 1.865C6.74999 1.75103 8.10843 1.75 10 1.75V0.25ZM2.62023 1.34815C2.13209 1.70281 1.70281 2.13209 1.34815 2.62023L2.56168 3.50191C2.82382 3.14111 3.14111 2.82382 3.50191 2.56168L2.62023 1.34815ZM1.75 10C1.75 8.37645 1.75047 7.14244 1.82395 6.15274C1.89731 5.16454 2.03996 4.48997 2.28622 3.96852L0.929871 3.32797C0.568083 4.09404 0.40671 4.98237 0.328064 6.04168C0.24953 7.09949 0.25 8.3976 0.25 10H1.75ZM2.28622 3.96852C2.36553 3.80058 2.45659 3.64656 2.56168 3.50191L1.34815 2.62023C1.18647 2.84277 1.04801 3.07781 0.929871 3.32797L2.28622 3.96852ZM2.50093 3.44182L2.10898 3.09006L1.10711 4.20642L1.49906 4.55818L2.50093 3.44182ZM21.75 10C21.75 8.38643 21.7505 7.08125 21.6702 6.01904C21.5899 4.95506 21.4248 4.06379 21.0546 3.29546L19.7033 3.9466C19.9541 4.46709 20.0996 5.14093 20.1745 6.13204C20.2495 7.12493 20.25 8.36482 20.25 10H21.75ZM21.0546 3.29546C20.9399 3.05734 20.8065 2.83304 20.6518 2.62023L19.4383 3.50191C19.5389 3.64031 19.6265 3.78722 19.7033 3.9466L21.0546 3.29546ZM20.5303 4.53033L20.9093 4.15136L19.8486 3.0907L19.4697 3.46967L20.5303 4.53033Z" fill="#111111"/>
                    </svg>
                    <a href="mailto:info@brus-dom.com">
                    <div className="block_text">
                    <span className="bold">E-mail:</span><br />
                    <span>sr-kostroma@yandex.ru</span>
                    </div>
                    </a>
                </div>
                <div className="Contacts_left-schedule Cla">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.06107 20.0451L3.50191 19.4383L3.06107 20.0451ZM1.95491 18.9389L2.56168 18.4981L1.95491 18.9389ZM18.0451 18.9389L17.4383 18.4981L18.0451 18.9389ZM16.9389 20.0451L17.3798 20.6518L16.9389 20.0451ZM16.9389 3.95492L17.3798 3.34815L16.9389 3.95492ZM18.0451 5.06107L17.4383 5.50191L18.0451 5.06107ZM3.06107 3.95492L3.50191 4.56168H3.50191L3.06107 3.95492ZM1.95491 5.06107L2.56168 5.50191L1.95491 5.06107ZM17.2178 15.0616L17.1005 14.3208H17.1005L17.2178 15.0616ZM13.0616 19.2178L12.3208 19.1005V19.1005L13.0616 19.2178ZM12.25 4C12.25 4.41421 12.5858 4.75 13 4.75C13.4142 4.75 13.75 4.41421 13.75 4H12.25ZM13.75 1C13.75 0.585786 13.4142 0.25 13 0.25C12.5858 0.25 12.25 0.585786 12.25 1H13.75ZM6.25 4C6.25 4.41421 6.58579 4.75 7 4.75C7.41421 4.75 7.75 4.41421 7.75 4H6.25ZM7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1H7.75ZM18.9711 15L19.7206 15.0257L18.9711 15ZM13 20.9711L13.0257 21.7206L13 20.9711ZM10 20.25C8.10843 20.25 6.74999 20.249 5.69804 20.135C4.66013 20.0225 4.00992 19.8074 3.50191 19.4383L2.62023 20.6518C3.42656 21.2377 4.37094 21.5 5.53648 21.6263C6.68798 21.751 8.14184 21.75 10 21.75V20.25ZM0.25 12C0.25 13.8582 0.248971 15.312 0.373728 16.4635C0.500006 17.6291 0.762324 18.5734 1.34815 19.3798L2.56168 18.4981C2.19259 17.9901 1.97745 17.3399 1.865 16.302C1.75103 15.25 1.75 13.8916 1.75 12H0.25ZM3.50191 19.4383C3.14111 19.1762 2.82382 18.8589 2.56168 18.4981L1.34815 19.3798C1.70281 19.8679 2.13209 20.2972 2.62023 20.6518L3.50191 19.4383ZM17.4383 18.4981C17.1762 18.8589 16.8589 19.1762 16.4981 19.4383L17.3798 20.6518C17.8679 20.2972 18.2972 19.8679 18.6518 19.3798L17.4383 18.4981ZM19.75 12C19.75 10.1418 19.751 8.68798 19.6263 7.53648C19.5 6.37094 19.2377 5.42656 18.6518 4.62023L17.4383 5.50191C17.8074 6.00992 18.0225 6.66013 18.135 7.69804C18.249 8.74999 18.25 10.1084 18.25 12H19.75ZM16.4981 4.56168C16.8589 4.82382 17.1762 5.14111 17.4383 5.50191L18.6518 4.62023C18.2972 4.13209 17.8679 3.70281 17.3798 3.34815L16.4981 4.56168ZM1.75 12C1.75 10.1084 1.75103 8.74999 1.865 7.69804C1.97745 6.66013 2.19259 6.00992 2.56168 5.50191L1.34815 4.62023C0.762324 5.42656 0.500006 6.37094 0.373728 7.53648C0.248971 8.68798 0.25 10.1418 0.25 12H1.75ZM2.62023 3.34815C2.13209 3.70281 1.70281 4.13209 1.34815 4.62023L2.56168 5.50191C2.82382 5.14111 3.14111 4.82382 3.50191 4.56168L2.62023 3.34815ZM17.1005 14.3208C14.6401 14.7105 12.7105 16.6401 12.3208 19.1005L13.8023 19.3352C14.0904 17.5166 15.5166 16.0904 17.3352 15.8023L17.1005 14.3208ZM7.75 4V3.02893H6.25V4H7.75ZM7.75 3.02893V1H6.25V3.02893H7.75ZM10 2.25C8.83522 2.25 7.83424 2.24991 6.97432 2.27937L7.02568 3.77849C7.85445 3.75009 8.82692 3.75 10 3.75V2.25ZM6.97432 2.27937C5.10087 2.34356 3.7239 2.5463 2.62023 3.34815L3.50191 4.56168C4.20746 4.04907 5.17075 3.84204 7.02568 3.77849L6.97432 2.27937ZM13.75 4V3.02893H12.25V4H13.75ZM13.75 3.02893V1H12.25V3.02893H13.75ZM10 3.75C11.1731 3.75 12.1456 3.75009 12.9743 3.77849L13.0257 2.27937C12.1658 2.24991 11.1648 2.25 10 2.25V3.75ZM12.9743 3.77849C14.8292 3.84204 15.7925 4.04907 16.4981 4.56168L17.3798 3.34815C16.2761 2.5463 14.8991 2.34356 13.0257 2.27937L12.9743 3.77849ZM18.9711 14.25C18.0888 14.25 17.5579 14.2484 17.1005 14.3208L17.3352 15.8023C17.647 15.7529 18.0338 15.75 18.9711 15.75L18.9711 14.25ZM18.25 12C18.25 13.1731 18.2499 14.1456 18.2215 14.9743L19.7206 15.0257C19.7501 14.1658 19.75 13.1648 19.75 12H18.25ZM18.2215 14.9743C18.158 16.8292 17.9509 17.7925 17.4383 18.4981L18.6518 19.3798C19.4537 18.2761 19.6564 16.8991 19.7206 15.0257L18.2215 14.9743ZM13.75 20.9711C13.75 20.0338 13.7529 19.647 13.8023 19.3352L12.3208 19.1005C12.2484 19.5579 12.25 20.0888 12.25 20.9711L13.75 20.9711ZM10 21.75C11.1648 21.75 12.1658 21.7501 13.0257 21.7206L12.9743 20.2215C12.1456 20.2499 11.1731 20.25 10 20.25V21.75ZM13.0257 21.7206C14.8991 21.6564 16.2761 21.4537 17.3798 20.6518L16.4981 19.4383C15.7925 19.9509 14.8292 20.158 12.9743 20.2215L13.0257 21.7206Z" fill="#111111"/>
                        <path d="M6.00098 8.00049C6.00098 8.55277 5.55326 9.00049 5.00098 9.00049C4.44869 9.00049 4.00098 8.55277 4.00098 8.00049C4.00098 7.4482 4.44869 7.00049 5.00098 7.00049C5.55326 7.00049 6.00098 7.4482 6.00098 8.00049Z" fill="#111111"/>
                        <path d="M6.00098 12.0005C6.00098 12.5528 5.55326 13.0005 5.00098 13.0005C4.44869 13.0005 4.00098 12.5528 4.00098 12.0005C4.00098 11.4482 4.44869 11.0005 5.00098 11.0005C5.55326 11.0005 6.00098 11.4482 6.00098 12.0005Z" fill="#111111"/>
                        <path d="M11.001 8.00049C11.001 8.55277 10.5533 9.00049 10.001 9.00049C9.44869 9.00049 9.00098 8.55277 9.00098 8.00049C9.00098 7.4482 9.44869 7.00049 10.001 7.00049C10.5533 7.00049 11.001 7.4482 11.001 8.00049Z" fill="#111111"/>
                        <path d="M11.001 12.0005C11.001 12.5528 10.5533 13.0005 10.001 13.0005C9.44869 13.0005 9.00098 12.5528 9.00098 12.0005C9.00098 11.4482 9.44869 11.0005 10.001 11.0005C10.5533 11.0005 11.001 11.4482 11.001 12.0005Z" fill="#111111"/>
                        <path d="M11.001 16.0005C11.001 16.5528 10.5533 17.0005 10.001 17.0005C9.44869 17.0005 9.00098 16.5528 9.00098 16.0005C9.00098 15.4482 9.44869 15.0005 10.001 15.0005C10.5533 15.0005 11.001 15.4482 11.001 16.0005Z" fill="#111111"/>
                        <path d="M16.001 8.00049C16.001 8.55277 15.5533 9.00049 15.001 9.00049C14.4487 9.00049 14.001 8.55277 14.001 8.00049C14.001 7.4482 14.4487 7.00049 15.001 7.00049C15.5533 7.00049 16.001 7.4482 16.001 8.00049Z" fill="#111111"/>
                        <path d="M16.001 12.0005C16.001 12.5528 15.5533 13.0005 15.001 13.0005C14.4487 13.0005 14.001 12.5528 14.001 12.0005C14.001 11.4482 14.4487 11.0005 15.001 11.0005C15.5533 11.0005 16.001 11.4482 16.001 12.0005Z" fill="#111111"/>
                        <path d="M6.00098 16.0005C6.00098 16.5528 5.55326 17.0005 5.00098 17.0005C4.44869 17.0005 4.00098 16.5528 4.00098 16.0005C4.00098 15.4482 4.44869 15.0005 5.00098 15.0005C5.55326 15.0005 6.00098 15.4482 6.00098 16.0005Z" fill="#111111"/>
                    </svg>
                    <div className="block_text">
                    <span className="bold">Режим работы:</span><br />
                    <span>Пн-Пт: 8.00-20.00</span><br />
                    <span>Сб-Вс: 8.00-20.00</span>
                    </div>
                </div>
                <div className="Contacts_left-buttons">
                    <a href="https://api.whatsapp.com/send/?phone=+79607399547&text&app_absent=0" target="_blank">
                    <div className="whatsapp_btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9926 23.7938H11.9876C9.99725 23.7931 8.0415 23.2937 6.30446 22.3462L0 24L1.68718 17.8374C0.646444 16.0338 0.0988157 13.9879 0.0997082 11.8919C0.102317 5.33474 5.43735 0 11.9924 0C15.1739 0.00137308 18.1598 1.23989 20.4052 3.48784C22.6505 5.73568 23.8864 8.72361 23.8851 11.9013C23.8825 18.4569 18.5496 23.7911 11.9926 23.7938ZM6.59726 20.1935L6.95821 20.4078C8.47586 21.3084 10.2155 21.7849 11.9893 21.7856H11.9933C17.4414 21.7856 21.8756 17.3513 21.8778 11.9009C21.8788 9.25964 20.8517 6.77621 18.9854 4.90779C17.1192 3.03938 14.6374 2.00992 11.9972 2.009C6.54481 2.009 2.11052 6.44289 2.10836 11.8929C2.10759 13.7606 2.63018 15.5796 3.61966 17.1533L3.85468 17.5273L2.85611 21.1749L6.59726 20.1935ZM17.9845 14.7301C17.9102 14.6061 17.7121 14.5318 17.415 14.383C17.1178 14.2342 15.6569 13.5154 15.3844 13.4162C15.1121 13.3171 14.9139 13.2675 14.7158 13.5649C14.5178 13.8624 13.9483 14.5318 13.7749 14.7301C13.6016 14.9283 13.4282 14.9532 13.1312 14.8044C12.834 14.6557 11.8766 14.342 10.7415 13.3295C9.85812 12.5416 9.26174 11.5685 9.0884 11.271C8.91507 10.9735 9.06993 10.8128 9.21869 10.6646C9.35238 10.5314 9.51587 10.3174 9.66443 10.144C9.813 9.97049 9.86252 9.84645 9.96158 9.64827C10.0606 9.44986 10.0111 9.2764 9.93681 9.12765C9.86252 8.9789 9.26824 7.51623 9.02062 6.92123C8.77939 6.34179 8.53443 6.42028 8.35204 6.41113C8.1789 6.40243 7.98058 6.4006 7.78251 6.4006C7.58442 6.4006 7.26247 6.47498 6.99009 6.77248C6.71772 7.06998 5.95007 7.7889 5.95007 9.25145C5.95007 10.7141 7.01484 12.1271 7.16343 12.3254C7.312 12.5238 9.25879 15.5252 12.2397 16.8124C12.9487 17.1186 13.5022 17.3014 13.9338 17.4383C14.6456 17.6646 15.2935 17.6326 15.8054 17.5561C16.3764 17.4708 17.5635 16.8373 17.8112 16.1432C18.0587 15.4489 18.0587 14.854 17.9845 14.7301Z" fill="white"/>
                    </svg>
                        Написать в WhatsApp
                    </div>
                    </a>
                    <a href="https://t.me/+79607399547" target="_blank">
                    <div className="whatsapp_btn telegram_btn">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.529218 10.8559L6.04959 12.7307L19.1556 4.71834C19.3455 4.60214 19.5402 4.86017 19.3764 5.01099L9.45415 14.1439L9.08517 19.257C9.05707 19.6459 9.52561 19.8625 9.80367 19.5891L12.8587 16.5849L18.4436 20.8127C19.0456 21.2685 19.9173 20.9473 20.0797 20.2099L23.9684 2.55278C24.1903 1.54549 23.2033 0.695511 22.24 1.06439L0.501129 9.38878C-0.180813 9.64994 -0.162239 10.6211 0.529218 10.8559Z" fill="white"/>
                    </svg>
                        Написать в Telegram
                    </div>
                    </a>
                </div>
            </div>
            <div className="Contacts_right">
                <img src={Img1} alt="" />
            </div>
            </div>
            
        </div>
        <Free/>
      </>
    );
  }
  
  export default Contacts;