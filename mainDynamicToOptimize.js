/*global requirejs*/
requirejs.config({"paths":{"fx-c-c/start":".//submodules/fenix-ui-chart-creator/src/js/./start","fx-c-c/html":".//submodules/fenix-ui-chart-creator/src/js/../html","fx-c-c/config":".//submodules/fenix-ui-chart-creator/src/js/../../config","fx-c-c/adapters":".//submodules/fenix-ui-chart-creator/src/js/./adapters","fx-c-c/templates":".//submodules/fenix-ui-chart-creator/src/js/./templates","fx-c-c/creators":".//submodules/fenix-ui-chart-creator/src/js/./creators","text":"//fenixrepo.fao.org/cdn/js/requirejs/plugins/text/2.0.12/text","jquery":"//fenixrepo.fao.org/cdn/js/jquery/2.1.1/jquery.min","underscore":"//fenixrepo.fao.org/cdn/js/underscore/1.7.0/underscore.min","amplify":"//fenixrepo.fao.org/cdn/js/amplify/1.1.2/amplify.min","handlebars":"//fenixrepo.fao.org/cdn/js/handlebars/2.0.0/handlebars","highcharts":"//fenixrepo.fao.org/cdn/js/highcharts/4.0.4/js/highcharts","highcharts-export":"//fenixrepo.fao.org/cdn/js/highcharts/4.0.4/js/modules/exporting","highcharts-export-csv":"http://highslide-software.github.io/export-csv/export-csv","fx-common":".//submodules/fenix-ui-common/js/./","fx-common/html":".//submodules/fenix-ui-common/js/../html","fx-common/config":".//submodules/fenix-ui-common/js/../config","faostat_commons":".//submodules/fenix-ui-common/js/FAOSTATCommons","bootstrap":"//fenixrepo.fao.org/cdn/js/bootstrap/3.3.4/js/bootstrap.min","moment":"//fenixrepo.fao.org/cdn/js/moment/2.9.0/moment.min","SparkMD5":"//fenixrepo.fao.org/cdn/js/spark-md5/spark-md5.min","q":"//fenixrepo.fao.org/cdn/js/q/1.1.2/q","fx-common/config/auth_users":".//config/auth_users.json","jsoneditor":"//fenixrepo.fao.org/cdn/js/json-editor/0.7.21/jsoneditor.min","bootstrap-datetimepicker":"//fenixrepo.fao.org/cdn/js/bootstrap-datetimepicker/4.14.30/build/js/bootstrap-datetimepicker.min","jquery.scrollto":"//fenixrepo.fao.org/cdn/js/jquery.scrollto/2.1.1/jquery.scrollTo.min","jquery.ui.widget":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/vendor/jquery.ui.widget","jquery.fileupload":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/jquery.fileupload","jquery.fileupload-ui":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/jquery.fileupload-ui","jquery.iframe-transport":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/jquery.iframe-transport","jquery.fileupload-image":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/jquery.fileupload-image","jquery.fileupload-audio":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/jquery.fileupload-audio","jquery.fileupload-video":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/jquery.fileupload-video","jquery.fileupload-process":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/jquery.fileupload-process","jquery.fileupload-validate":"//fenixrepo.fao.org/cdn/js/jquery-file-upload/9.10.4/js/jquery.fileupload-validate","draggabilly":"//fenixrepo.fao.org/cdn/js/draggabilly/dist/draggabilly.pkgd.min","packery":"//fenixrepo.fao.org/cdn/js/packery/dist/packery.pkgd.min","fx-ds/start":".//submodules/fenix-ui-dashboard/src/js/./start","fx-ds/templates":".//submodules/fenix-ui-dashboard/src/js/./templates/","fx-ds/config":".//submodules/fenix-ui-dashboard/src/js/../../config","fx-ds":".//submodules/fenix-ui-dashboard/src/js/./","fx-filter":".//submodules/fenix-ui-filter/src/js/src/js/","fx-filter/component_plugin":".//submodules/fenix-ui-filter/src/js/src/js/component_plugin/","fx-filter/filtercontroller":".//submodules/fenix-ui-filter/src/js/src/js/Fx-filter-controller","fx-filter/containerfactory":".//submodules/fenix-ui-filter/src/js/src/js/Fx-filter-containerFactory","fx-filter/componentfactory":".//submodules/fenix-ui-filter/src/js/src/js/Fx-filter-componentFactory","fx-filter/layoutfactory":".//submodules/fenix-ui-filter/src/js/src/js/Fx-filter-layoutFactory","fx-filter/filtermodule":".//submodules/fenix-ui-filter/src/js/src/js/Fx-filter-module","fx-filter/fluidGridBaseContainer":".//submodules/fenix-ui-filter/src/js/src/js/container_plugin/Fx-filter-fluidGridBaseContainer","fx-filter/baseContainer":".//submodules/fenix-ui-filter/src/js/src/js/container_plugin/baseContainer","fx-filter/fluidGridLayoutRender":".//submodules/fenix-ui-filter/src/js/src/js/layout_plugin/Fx-filter-fluidGridLayoutRender","fx-filter/componentcreator":".//submodules/fenix-ui-filter/src/js/src/js/Fx-filter-component-creator","fx-filter/widgetcommons":".//submodules/fenix-ui-filter/src/js/src/js/Fx-widgets-commons","fx-filter/start":".//submodules/fenix-ui-filter/src/js/src/js/start","fx-filter/utils":".//submodules/fenix-ui-filter/src/js/src/js/Fx-filter-utils","fx-filter/config":".//submodules/fenix-ui-filter/src/js/config","pnotify":"//fenixrepo.fao.org/cdn/js/pnotify/2.0.1/pnotify.core","jqwidgets":"//fenixrepo.fao.org/cdn/js/jqwidgets/3.1/jqx-light","jqueryui":".//submodules/fenix-ui-filter/src/js/src/lib/jquery-ui.min","jqueryuicustom":"//fenixrepo.fao.org/cdn/js/jquery-ui/1.10.3/jquery-ui-1.10.3.custom.min","nprogress":"//fenixrepo.fao.org/cdn/js/nprogress/0.1.6/nprogress","isotope":"//fenixrepo.fao.org/cdn/js/isotope/2.1.0/dist/isotope.pkgd.min","jstree":"//fenixrepo.fao.org/cdn/js/jstree/3.0.8/dist/jstree.min","jQAllRangeSliders":".//submodules/fenix-ui-filter/src/js/src/lib/jQAllRangeSliders-min","select2":"//fenixrepo.fao.org/cdn/js/select2/3.5.4/select2.min","fx-m-c/start":".//submodules/fenix-ui-map-creator/src/js/./start","fx-m-c/html":".//submodules/fenix-ui-map-creator/src/js/../html","fx-m-c/config":".//submodules/fenix-ui-map-creator/src/js/../../config","fx-m-c/adapters":".//submodules/fenix-ui-map-creator/src/js/./adapters","fx-m-c/templates":".//submodules/fenix-ui-map-creator/src/js/./templates","chosen":"//fenixrepo.fao.org/cdn/js/chosen/1.2.0/chosen.jquery.min","import-dependencies":"//fenixrepo.fao.org/cdn/js/FENIX/utils/import-dependencies-1.0","leaflet":"//fenixrepo.fao.org/cdn/js/leaflet/0.7.3/leaflet","jquery.power.tip":"//fenixrepo.fao.org/cdn/js/jquery.power.tip/1.2.0/jquery.powertip.min","jquery-ui":"//fenixrepo.fao.org/cdn/js/jquery-ui/1.10.3/jquery-ui-1.10.3.custom.min","jquery.i18n.properties":"//fenixrepo.fao.org/cdn/js/jquery/1.0.9/jquery.i18n.properties-min","jquery.hoverIntent":"//fenixrepo.fao.org/cdn/js/jquery.hoverIntent/1.8.0/jquery.hoverIntent.min","fenix-ui-map":".//submodules/fenix-ui-map/dist/fenix-ui-map.src","fenix-ui-map-config":".//config/submodules/fx-map/Config","fx-menu/start":".//submodules/fenix-ui-menu/js/./start","fx-menu/templates":".//submodules/fenix-ui-menu/js/../templates/","fx-t-c/start":".//submodules/fenix-ui-table-creator/src/js/./start","fx-t-c/html":".//submodules/fenix-ui-table-creator/src/js/../html","fx-t-c/config":".//submodules/fenix-ui-table-creator/src/js/../../config","fx-t-c/adapters":".//submodules/fenix-ui-table-creator/src/js/./adapters","fx-t-c/templates":".//submodules/fenix-ui-table-creator/src/js/./templates","jqxmenu":"//fenixrepo.fao.org/cdn/js/jqwidgets/3.1/jqxmenu","jqxgrid.pager":"//fenixrepo.fao.org/cdn/js/jqwidgets/3.1/jqxgrid.pager","jqxgrid.filter":"//fenixrepo.fao.org/cdn/js/jqwidgets/3.1/jqxgrid.filter","jqxgrid.grouping":"//fenixrepo.fao.org/cdn/js/jqwidgets/3.1/jqxgrid.grouping","backbone":"//fenixrepo.fao.org/cdn/js/backbone/1.1.2/backbone.min","chaplin":"//fenixrepo.fao.org/cdn/js/chaplin/1.0.1/chaplin.min","domReady":"//fenixrepo.fao.org/cdn/js/requirejs/plugins/domready/2.0.1/domReady","i18n":"//fenixrepo.fao.org/cdn/js/requirejs/plugins/i18n/2.0.4/i18n","rsvp":"//fenixrepo.fao.org/cdn/js/rsvp/3.0.17/rsvp","fx-c-c/config/creators/highcharts_template":".//config/submodules/fx-chart/highcharts_template","fx-ds/config/config":".//config/submodules/fx-dashboard/Config","fx-m-c/config/config":".//config/submodules/fx-chart-creator/Config","fx-filter/config/config":".//config/submodules/fx-filter/Config","nls":".//i18n","config":".//config","json":".//json"},"shim":{"highcharts":{"exports":"Highcharts","deps":["jquery"]},"highcharts-export":{"deps":["highcharts"]},"highcharts-export-csv":{"deps":["highcharts","highcharts-export"]},"amplify":{"deps":["jquery"],"exports":"amplify"},"jsoneditor":{"deps":["jquery","bootstrap"],"exports":"JSONEditor"},"bootstrap-datetimepicker":["jquery","bootstrap","moment"],"jquery.fileupload":{"deps":["jquery","jquery.ui.widget"]},"jquery.scrollto":{"deps":["jquery"]},"bootstrap":{"deps":["jquery"]},"underscore":{"exports":"_"},"jquery.i18n.properties":["jquery"],"jqwidget":{"export":"$","deps":["jquery"]},"jQAllRangeSliders":{"deps":["jquery","jqueryui","jqueryuicustom"]},"pnotify":{"deps":["bootstrap"]},"select2":{"deps":["jquery"]},"jquery-ui":["jquery"],"jquery.power.tip":["jquery"],"chosen":["jquery"],"jquery.hoverIntent":["jquery"],"fenix-ui-map":{"deps":["jquery","jquery-ui","leaflet","fenix-ui-map-config","jquery.power.tip","jquery.i18n.properties","import-dependencies","jquery.hoverIntent","chosen"]},"jqwidgets":{"deps":["jquery"]},"jqxmenu":{"deps":["jqwidgets"]},"jqxgrid.pager":{"deps":["jqwidgets"]},"jqxgrid.filter":{"deps":["jqwidgets"]},"jqxgrid.grouping":{"deps":["jqwidgets"]},"backbone":{"deps":["underscore","jquery"],"exports":"Backbone"},"handlebars":{"exports":"Handlebars"}},"i18n":{"locale":"en"},"baseUrl":"./src/js"});

//Start the application with the dynamically configured requireJS context
// Bootstrap the application
require([
    'application',
    'routes',
    'config/Config',
    'domReady!'
    ], function (Application, routes, C) {

    var app = new Application({
        routes: routes,
        controllerSuffix: C.CHAPLINJS_CONTROLLER_SUFFIX,
        root: C.CHAPLINJS_PROJECT_ROOT,
        pushState: C.CHAPLINJS_PUSH_STATE,
        scrollTo: C.CHAPLINJS_SCROLL_TO
    });
});