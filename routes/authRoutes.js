const passport = require('passport');
module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }
    ))

    app.get(
        '/auth/google/callback',
         passport.authenticate('google')
        );

    app.post(
        '/user/register',

    );    
    
    app.get('/api/user_id', (req, res) => {
        res.send(req.user);
    })

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    app.get(
            '/auth/facebook',
            passport.authenticate('facebook')
        );

    app.get(
        '/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

    /* app.get('/', 
        passport.authenticate('bearer', { session: false }),
        function(req, res) {
            console.log(req.user);
            //res.json(req.user);
        }) */;
        
}