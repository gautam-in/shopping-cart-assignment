import { CSSTransition } from "react-transition-group";
import "./Modal.scss";

export default function Modal(props) {
    return (
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div role="dialog" className="modal">
                <section className="modal-content" onClick={e => e.stopPropagation()}>
                    <header className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                        <button onClick={props.onClose} className="button">x</button>
                    </header>
                    <div className="modal-body">{props.children}</div>
                    <footer className="modal-footer">{props.footerContent}</footer>
                </section>
            </div>
        </CSSTransition>
    );
};

