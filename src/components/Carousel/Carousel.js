import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";

function Carousel({ items, loop }) {
    const [page, setPage] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    };

    const onLeft = useCallback(() => {
        setPage((p) => {
            if (p > 0) {
                return p - 1;
            } else if (loop) {
                return items.length - 1;
            } else {
                return p;
            }
        });
    }, [items.length, loop]);

    const onRight = useCallback(() => {
        const totalPage = items.length;
        setPage((p) => {
            if (p < totalPage - 1) {
                return p + 1;
            } else if (loop) {
                return 0;
            } else {
                return p;
            }
        });
    }, [items.length, loop]);

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            onRight()
        }

        if (diff < -5) {
            onLeft()
        }

        setTouchPosition(null)
    };

    return (
        <div className={styles.carousel}>
            <button onClick={onLeft} className={styles.arrowLeft} aria-label="Previous Banner">
                PREV
            </button>
            <ul className={styles.carouselWrapper}>
                {items.map((item, idx) => (
                    <li
                        key={item.id}
                        className={`${styles.carouselItem} ${page == idx ? " " + styles.selected : ""}`}
                        data-testid="carousel-element"
                    >
                        {
                            page == idx ?
                            <a href="#" onClick={item.onClick ?? undefined}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                            >
                                <img
                                    alt={item.bannerImageAlt}
                                    src={item.bannerImageUrl}
                                />
                            </a> : null
                        }
                    </li>
                ))}
            </ul>
            <button onClick={onRight} className={styles.arrowRight} aria-label="Next Banner">
                NEXT
            </button>
            <div className={styles.pagination}>
                {
                    items.map((item, idx) => (
                        <button
                            key={item.id}
                            className={styles.dot + (idx === page ? ` ${styles.selected}` : "")}
                            onClick={() => setPage(idx)}
                            aria-label={item.bannerImageAlt}></button>
                    ))
                }
            </div>
        </div>
    );
}

Carousel.propTypes = {
    items: PropTypes.array,
    loop: PropTypes.bool,
    aspectRatio: PropTypes.number
}

export { Carousel };