const pm2 = require('pm2');

function stop() {
    pm2.connect(function (err) {
        if (err) {
            console.error(err);
            process.exit(2);
        }

        pm2.stop('Tasker', function (err, apps) {
            if (err) {
                console.error(err);
            }
            return pm2.disconnect();
        });
    });
}

module.exports = stop;
