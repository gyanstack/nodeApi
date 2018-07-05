module.exports = function (app) {
    var grainController = require('../controllers/grainController')
    var metricsController = require('../controllers/metricsController')

    app.route('/grain/list')
        .get(grainController.getAll)
        .post(grainController.postData);

    app.route('/grain/list/:Id')
        .get(grainController.getTask)
        .put(grainController.updateTask)
        .delete(grainController.deleteTask);

    app.route('/metrics/list')
        .get(metricsController.getAll)
        .post(metricsController.postData);

    app.route('/metrics/list/:Id')
        .get(metricsController.getMetrics);
};
