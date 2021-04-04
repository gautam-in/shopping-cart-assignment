import {schema} from 'normalizr';

const Schema = new schema.Entity('data', {}, {idAttribute: 'id'});

export default Schema;
