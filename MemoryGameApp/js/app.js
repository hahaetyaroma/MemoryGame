document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        const section = document.querySelector("section");
        section.innerHTML = ''
        cardCreator();
    })

    const cardCreator = () => {
        let cardData = [{
                img: "./images/leo.jpg",
                name: "Leonardo"
            },
            {
                img: "./images/don.jpg",
                name: "Donatello"
            },
            {
                img: "./images/mike.jpg",
                name: "Michelangelo"
            },
            {
                img: "./images/raf.jpg",
                name: "Rafael"
            },
            {
                img: "./images/splinter.jpg",
                name: "Splinter"
            },
            {
                img: "./images/turtlePower.jpg",
                name: "Turtle Power"
            },
            {
                img: "./images/foot.jpg",
                name: "Foot ninja"
            },
            {
                img: "./images/tengShredder.jpg",
                name: "Shredder"
            },
            {
                img: "./images/leo.jpg",
                name: "Leonardo"
            },
            {
                img: "./images/don.jpg",
                name: "Donatello"
            },
            {
                img: "./images/mike.jpg",
                name: "Michelangelo"
            },
            {
                img: "./images/raf.jpg",
                name: "Rafael"
            },
            {
                img: "./images/splinter.jpg",
                name: "Splinter"
            },
            {
                img: "./images/turtlePower.jpg",
                name: "Turtle Power"
            },
            {
                img: "./images/foot.jpg",
                name: "Foot ninja"
            },
            {
                img: "./images/tengShredder.jpg",
                name: "Shredder"
            },
            {
                img: "./images/turtlePOWER(multiverse).jpg",
                name: "turtlePOWER(multiverse)"
            },
            {
                img: "./images/turtlePOWER(multiverse).jpg",
                name: "turtlePOWER(multiverse)"
            },
        ];

        cardData.sort(() => Math.random() - 0.5);

        cardData.forEach((item) => {
            const section = document.querySelector("section");
            const card = document.createElement("div");
            card.classList = "card";
            card.setAttribute("name", item.name);

            const face = document.createElement("img");
            face.classList = "face";
            face.src = item.img;

            const back = document.createElement("div");
            back.classList = "back";

            section.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);

            card.addEventListener("click", () => {
                card.classList.add('flipped');
                face.classList.add("toggleCard");
                card.classList.add("toggleCard");

                const flippedCards = document.querySelectorAll('.flipped');

                if (flippedCards.length === 2) {
                    if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
                        flippedCards.forEach(card => {
                            card.classList.remove('flipped');
                            card.style.pointerEvents = 'none';
                        });
                    } else {
                        flippedCards.forEach(card => {
                            setTimeout(() => {
                                card.classList.remove('flipped');
                                card.classList.remove('toggleCard');
                            }, 1500);
                        });
                    }
                }
            });
        });
    };

    cardCreator();
});