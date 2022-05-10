import {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function withLayout(WrapperComponent) {
    return class extends Component {
        render() {
            return (
                <section id='layout'>
                    <Header />
                    <WrapperComponent {...this.props} />
                    <Footer />
                </section>
            )
        };
    };
};
export default withLayout;