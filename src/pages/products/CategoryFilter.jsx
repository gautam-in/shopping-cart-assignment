import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setCategoryFilter } from '../../store/actions';

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

const mapStateToProps = ({ categories, categoryFilter }) => ({
    categories,
    categoryFilter
});
export default connect(mapStateToProps)(CategoryFilter);