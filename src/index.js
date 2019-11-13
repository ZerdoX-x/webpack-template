import './js/common';
import './styles/style.css';
function requireAll(r) {
  r.keys().forEach(r);
};
requireAll(require.context('./assets/img/', true, /\.svg$/,));