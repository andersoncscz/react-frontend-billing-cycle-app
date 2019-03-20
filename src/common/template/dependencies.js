//Dependencias minimas para o template Admin LTE funcionar. 
//'modules' é um alias no webpack.config.js, que esta apontando pra pasta node_modules

//Javascript
import './jquery';
import 'admin-lte/plugins/jQueryUI/jquery-ui';
import 'admin-lte/plugins/fastclick/fastclick';
import 'admin-lte/plugins/slimScroll/jquery.slimscroll';
import 'admin-lte/dist/js/app';


//CSS
import 'font-awesome/css/font-awesome.css';
import 'ionicons/dist/css/ionicons.css';
import 'admin-lte/bootstrap/css/bootstrap.css';
import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.css';
import 'admin-lte/plugins/iCheck/flat/blue.css';

//Custom CSS quando precisamos de algo nosso
import './custom.css'