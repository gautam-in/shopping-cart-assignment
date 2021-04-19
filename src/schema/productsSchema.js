import { schema } from 'normalizr';

const productsSchema = new schema.Entity('data', {}, { idAttribute: 'id' });

export default productsSchema;
