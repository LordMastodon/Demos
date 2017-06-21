import { config } from './index.config';
import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { DemosService } from '../app/components/demos.service';

angular.module('demos', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(config)
  .config(routerConfig)
  .controller('MainController', MainController)
  .service('demosService', DemosService);
