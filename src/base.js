import Rebase from 're-base';
import fireApp from './base2';

require('firebase/auth');
require('firebase/database');

const base = Rebase.createClass(fireApp.database());
export default base;
