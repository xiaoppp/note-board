
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { layout: false });
};

exports.login = function (req, res) {
    res.render('login');
}

exports.register = function (req, res) {
    res.render('register');
}

exports.test = function (req, res) {
    res.render('test');
}

exports.save = function (req, res, next) {
    //    var left = req.body.Left;
    //    var top = req.body.Top;
    //    var date = req.body.CreateDate;
    //    var color = req.body.Color;
    //    var content = req.body.Content;

    var data = JSON.stringify(req.body);
    var left = data.Left;
    console.log(data);
    console.log(left);

    res.redirect('/login');
}