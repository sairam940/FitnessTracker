const User = require('./models/User');

module.exports = app => {
    app.post('/api/signup', (req, res) => {
        console.log(req.body);
        /*const { body } = req;
        const { password } = body;
        const { email } = body;

        email = email.trim();
        const user = new User({
            email,
            password
        });

        user.save();
*/
        /*User.find({
            email: email
        }, (err, prevUsers) => {
            if(err) {
                return res.send({
                    success: false,
                    message: 'Error'
                })
            } else if(prevUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Account already exists'
                })
            }

            const newUser = new User();
            newUser.email = email;
            newUser.password = password;
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                      success: false,
                      message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up'
                });
            })
        })*/
    })
}