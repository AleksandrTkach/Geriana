import heart from 'img/specialists/heart.png';
import message from 'img/specialists/massage.png';
import nurses from 'img/specialists/nurses.png';
import therapy from 'img/specialists/therapy.png';

import magnifier from "img/how-it-works/magnifier.svg";
import mouse from "img/how-it-works/mouse.svg";
import hourglass from "img/how-it-works/hourglass.svg";
import dollar from "img/how-it-works/dollar.svg";

const description = '10,000 zarejestrowanych opiekunów czeka na bezpośredni kontakt z poszukującymi opieki';
export const SPECIALISTS = [
    {
        src: heart,
        title: 'Opiekunowie z doświadczeniem',
        description,
    },
    {
        src: message,
        title: 'Masażyści',
        description,
    },
    {
        src: nurses,
        title: 'Pielęgniarki i opiekunowie medyczni',
        description,
    },
    {
        src: therapy,
        title: 'Fizjoterapeuci',
        description,
    },
];

export const ROAD_POINTS =  [
    {
        img: {
            src: magnifier,
            alt: "magnifier",
        },
        label: "Search a Caregiver",
        text: "Ustalasz kryteria wyboru i  wyszukujesz opiekuna z  wymaganymi",
    },
    {
        img: {
            src: mouse,
            alt: "mouse",
        },
        label: "Select a Caregiver",
        text: "Decydujesz na podstawie  weryfikacji profilu i opinii inyych  o",
    },
    {
        img: {
            src: hourglass,
            alt: "hourglass",
        },
        label: "Test Period",
        text: "Opiekun rozpoczyna okres próbny  i jeśli jesteście zadowoleni,",
    },
    {
        img: {
            src: dollar,
            alt: "dollar",
        },
        label: "Pay after Start",
        text: "Opiekun dostaje wynagrodzenie dopiero po rozpoczęciu pracy. Po",
    },
];
