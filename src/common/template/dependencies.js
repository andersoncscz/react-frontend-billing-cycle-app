//Dependencias minimas para o template Admin LTE funcionar. 
//'modules' é um alias no webpack.config.js, que esta apontando pra pasta node_modules

//Javascript
import 'modules/admin-lte/plugins/jQueryUI/jquery-ui.min';
import 'modules/admin-lte/plugins/fastclick/fastclick';
import 'modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min';
import 'modules/admin-lte/dist/js/app.min';


//CSS
import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/ionicons/dist/css/ionicons.min.css';
import 'modules/admin-lte/bootstrap/css/bootstrap.min.css';
import 'modules/admin-lte/dist/css/AdminLTE.min.css';
import 'modules/admin-lte/dist/css/skins/_all-skins.min.css';
import 'modules/admin-lte/plugins/iCheck/flat/blue.css';

//Custom CSS quando precisamos de algo nosso
import './custom.css'