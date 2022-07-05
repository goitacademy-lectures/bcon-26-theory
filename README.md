# bcon-26-theory

## Module 08

ПІДТРИМКА WEBP ДЛЯ КОНТЕНТНИХ ЗОБРАЖЕНЬ

<picture>
    <source srcset="./assets/images/boy_xl.webp 1x, ./assets/images/boy_xl@2x.webp 2x" media="(min-width: 1536px)" type="image/webp" />
    <source srcset="./assets/images/boy_xl.jpg 1x, ./assets/images/boy_xl@2x.jpg 2x" media="(min-width: 1536px)" type="image/jpeg" />

    <source srcset="./assets/images/boy_lg.webp 1x, ./assets/images/boy_lg@2x.webp 2x" media="(min-width: 1280px)" type="image/webp" />
    <source srcset="./assets/images/boy_lg.jpg 1x, ./assets/images/boy_lg@2x.jpg 2x" media="(min-width: 1280px)" type="image/jpeg" />

    <source srcset="./assets/images/boy_md.webp 1x, ./assets/images/boy_md@2x.webp 2x" media="(min-width: 768px)" type="image/webp" />
    <source srcset="./assets/images/boy_md.jpg 1x, ./assets/images/boy_md@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />

    <source srcset="./assets/images/boy_sm.webp 1x, ./assets/images/boy_sm@2x.webp 2x" media="(max-width: 767px)" type="image/webp" />
    <source srcset="./assets/images/boy_sm@2x.jpg" media="(max-width: 767px)" type="image/jpeg" />

    <img class="team-list__image" src="./assets/images/boy_sm.jpg" alt="CEO & Co-Founder of the company"
      width="280" height="370" loading="lazy" />

</picture>

ПІДТРИМКА WEBP ДЛЯ ФОНОВИХ ЗОБРАЖЕНЬ

background-image: url('../images/boy_sm.jpg');
background-image: -webkit-image-set(
url('../images/boy_sm.webp') 1x
);
@include mq(retina) {
background-image: url('../images/boy_sm@2x.jpg');
background-image: -webkit-image-set(
url('../images/boy_sm@2x.webp') 2x
);
}
