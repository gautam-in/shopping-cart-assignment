import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createSelector } from 'reselect';
import { setCategoryFilter } from '../../store/actions';
import { categoriesSelector, categoryFilterSelector } from '../../store/selectors';

class CategoryFilter extends Component {
    render() {
        const { categories, dispatch, categoryFilter } = this.props;

        return (
            <section className="categories-filter">
                {categories.map(({ id, name }) => (
                    <Fragment key={id}>
                        <p
                            className={`category-filter-item ${(categoryFilter === id) ? 'activeFilter' : ''}`}
                            onClick={() => dispatch(setCategoryFilter(id))}
                        >
                            {name}
                        </p>
                        <hr />
                    </Fragment>
                ))}
            </section>
        );
    };
};

const mapStateToProps = createSelector(
    [categoriesSelector, categoryFilterSelector],
    (categories, categoryFilter) => ({
        categories,
        categoryFilter
    })
);
export default connect(mapStateToProps)(CategoryFilter);