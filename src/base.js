import Rebase from 're-base';
require('firebase/auth');
require('firebase/database');
import fireApp from './base2';

const base = Rebase.createClass(fireApp.database());
export default base;
