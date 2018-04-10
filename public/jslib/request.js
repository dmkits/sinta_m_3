define(["dojo/request/xhr", "app", "dojo/domReady!"],
    function (xhr, APP) {
        return {
            jsonHeader: {"X-Requested-With": "application/json; charset=utf-8"},
            showRequestErrorDialog: false,
            /** getJSONData
             * params.url, params.condition, params.consoleLog
             * if success : callback(true,data), if not success callback(false,error)
             * @param params
             * @param callback
             */
            getJSONData: function (params, callback) {
                if (!params) return;
                var url = params["url"], condition = params["condition"], consoleLog = params["consoleLog"];
                if (condition) url = url + "?" + condition;
                var showRequestErrorDialog=this.showRequestErrorDialog;
                xhr.get(url, {headers: this.jsonHeader, handleAs: "json"}).then(
                    function (data) {
                        if (callback)callback(true, data);
                    }, function (error) {
                        if (showRequestErrorDialog) APP.doRequestErrorDialog();
                        if (consoleLog) console.log("getJSONData ERROR! url=", url, " error=", error);
                        if (callback)callback(false, error);
                    });
            },
            getTextData: function (params, callback) {
                if (!params) return;
                var url = params["url"], condition = params["condition"], consoleLog = params["consoleLog"];
                if (condition) url = url + "?" + condition;
                var showRequestErrorDialog=this.showRequestErrorDialog;
                xhr.get(url, {headers: this.jsonHeader, handleAs: "text"}).then(
                    function (data) {
                        if (callback)callback(true, data);
                    }, function (error) {
                        if (showRequestErrorDialog) APP.doRequestErrorDialog();
                        if (consoleLog) console.log("getTextData ERROR! url=", url, " error=", error);
                        if (callback)callback(false, error);
                    });
            },

            /** postJSONData
             * params.url, params.condition, params.data, params.consoleLog
             * if success : callback(true,data), if not success callback(false,error)
             * @param params
             * @param callback
             */
            postJSONData: function (params, callback) {
                if (!params) return;
                var url = params["url"], condition = params["condition"], consoleLog = params["consoleLog"];
                if (condition) url = url + "?" + condition;
                var showRequestErrorDialog=this.showRequestErrorDialog;
                xhr.post(url, {headers: this.jsonHeader, handleAs: "json", data: params["data"]}).then(
                    function (data) {
                        if (callback)callback(true, data);
                    }, function (error) {
                        if (showRequestErrorDialog)  APP.doRequestErrorDialog();
                        if (consoleLog) console.log("postJSONData ERROR! url=", url, " error=", error);
                        if (callback)callback(false, error);
                    });
            },
            postTextData: function (params,callback) {
                if (!params) return;
                var url = params["url"], condition = params["condition"], consoleLog = params["consoleLog"];
                if (condition) url = url + "?" + condition;
                var showRequestErrorDialog=this.showRequestErrorDialog;
                xhr.post(url, {headers: this.jsonHeader, handleAs: "text", data: params["data"]}).then(
                    function (data) {
                        if (callback)callback(true, data);
                    }, function (error) {
                        if (showRequestErrorDialog)  APP.doRequestErrorDialog();
                        if (consoleLog) console.log("postTextData ERROR! url=", url, " error=", error);
                        if (callback)callback(false, error);
                    });
            }
        }
    });