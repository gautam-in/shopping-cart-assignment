import React from 'react';
import Handlebars from "handlebars";
const hbr = `<div class="full-width-footer footer-area"><div class="row">
<footer class="space-footer" aria-label="Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Private limited">
Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.
</footer></div><div>
`;

const template = Handlebars.compile(hbr);
export default function Footer(props) {

    return(<div dangerouslySetInnerHTML={{ __html: template() }} />);
}
