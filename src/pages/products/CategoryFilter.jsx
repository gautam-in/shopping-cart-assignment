import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createSelector } from 'reselect';
import CategoryFilterStyled from './CategoryFilter.styled';
import { setCategoryFilter } from '../../store/actions';
import { categoriesSelector, categoryFilterSelector } from '../../store/selectors';
import { mobileMediaQuery } from '../../utils/constants';

class CategoryFilter extends Component {
    constructor() {
        super();
        this.state = {
            isMobileView: window.matchMedia(mobileMediaQuery).matches
        };
    };

    componentDidMount() {
        window.matchMedia(mobileMediaQuery).addEventListener('change', this.handleMediaChange);
    };

    componentWillUnmount() {
        window.matchMedia(mobileMediaQuery).removeEventListener('change', this.handleMediaChange);
    };

    handleMediaChange = (event) => {
        this.setState({
            isMobileView: event.matches
        });
    };

    handleFilterSelection = (event) => {
        const categoryId = event.target.value;
        this.props.dispatch(setCategoryFilter(categoryId));
    };

    render() {
        const { categories, dispatch, categoryFilter } = this.props;

        return (
            <>
                {this.state.isMobileView ? (
                    <select
                        id="categories-filter-dropdown"
                        value={categoryFilter}
                        onChange={this.handleFilterSelection}
                    >
                        <option value="">All</option>
                        {categories.map(({ id, name }) => (
                            <option key={id} value={id}>{name}</option>
                        ))}
                    </select>
                ) : (
                    <CategoryFilterStyled id="category-filter-styled">
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
                )}
            </>
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