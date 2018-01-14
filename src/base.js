import Rebase from 're-base';
// import fireApp from './base2';
import firebase from 'react-native-firebase';

const base = Rebase.createClass(firebase.database());
export default base;
