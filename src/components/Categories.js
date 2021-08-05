import React from 'react';
import classes from '../css/categories.css';
import '../css/categories.css';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {

    return (
        <ul className={classes['categories-container']}>
            {categories.map(_ => {
                if (_.enabled) {
                    return (
                        <li className={classes.categories} key={_.id}>
                            <img src={_.imageUrl} className={classes.img} alt={`${_.name} picture`} />
                            <section className={classes.descriptions}>
                                <h1 className={classes.title}>{_.name}</h1>
                                <p>{_.description}</p>
                                <button className={classes.buttons}>
                                    <Link to={'/products/' + _.id}>Explore {_.name}</Link>
                                </button>
                            </section>
                        </li>
                    )
                }
            })}
        </ul>
    )
}

export default Categories;