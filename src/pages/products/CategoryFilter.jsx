import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createSelector } from 'reselect';
import CategoryFilterStyled from './CategoryFilter.styled';
import { setCategoryFilter } from '../../store/actions';
import { categoriesSelector, categoryFilterSelector } from '../../store/selectors';

class CategoryFilter extends Component {
    render() {
        const { categories, dispatch, categoryFilter } = this.props;

        return (
            <CategoryFilterStyled>
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
            </CategoryFilterStyled>
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