
//public/jslib/util/buildscripts/build.sh --profile sinta.profile.js
var profile = (function(){
    return {
        basePath: "./",
        releaseDir: "./tempDojo",
        releaseName: "jslib",
        action: "release",
        selectorEngine: "acme",
        //layerOptimize: "closure",
        //optimize: "closure",
        packages:[
            { name: "dojo", location: "public/jslib/dojo" },
            { name: "dijit", location: "public/jslib/dijit" },
            { name: "dojox", location: "public/jslib/dojox" },
            { name: "myDojoModules", location: "public/jslib/myDojoModules" }
        ],
        layers: {
            "dojo/dojo": {
                include: [
                    "dojo/dojo",
                    "dojo/_base/xhr",
                    "dojo/data/ItemFileReadStore",
                    "dojo/dom-construct",
                    "dojo/domReady",
                    "dojo/i18n",
                    "dojo/parser",
                    "dojo/ready",
                    "dojox/mobile",
                    "dojox/mobile/parser",
                    "dojox/layout/ContentPane",
                    "dojox/mobile/Container",
                    "dojox/mobile/Pane",
                    "dojox/mobile/SimpleDialog",
                    "dojox/mobile/TextBox",
                    "dijit/ConfirmDialog",
                    "dijit/form/Button",
                    "dijit/form/DateTextBox",
                    "dijit/form/TextBox",
                    "dijit/form/ToggleButton",
                    "dijit/layout/BorderContainer",
                    "dijit/layout/ContentPane",
                    "dijit/layout/LayoutContainer",
                    "dijit/layout/StackContainer",
                    "myDojoModules/app",
                    "myDojoModules/calendarView",
                    "myDojoModules/detailView",
                    "myDojoModules/pickUnitView",
                    "myDojoModules/request"
                ],
                customBase: true,
                boot: true
            }
        },
        staticHasFeatures: {
            "config-deferredInstrumentation": 0,
            "config-dojo-loader-catches": 0,
            "config-tlmSiblingOfDojo": 0,
            "dojo-amd-factory-scan": 0,
            "dojo-combo-api": 0,
            "dojo-config-api": 1,
            "dojo-config-require": 0,
            "dojo-debug-messages": 0,
            "dojo-dom-ready-api": 1,
            "dojo-firebug": 0,
            "dojo-guarantee-console": 1,
            "dojo-has-api": 1,
            "dojo-inject-api": 1,
            "dojo-loader": 1,
            "dojo-log-api": 0,
            "dojo-modulePaths": 0,
            "dojo-moduleUrl": 0,
            "dojo-publish-privates": 0,
            "dojo-requirejs-api": 0,
            "dojo-sniff": 1,
            "dojo-sync-loader": 0,
            "dojo-test-sniff": 0,
            "dojo-timeout-api": 0,
            "dojo-trace-api": 0,
            "dojo-undef-api": 0,
            "dojo-v1x-i18n-Api": 1,
            "dom": 1,
            "host-browser": 1,
            "extend-dojo": 1
        }
    };
})();