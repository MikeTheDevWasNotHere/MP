function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    if (password1 == '')
        alert ("Please enter a password.");
            
    else if (password2 == '')
        alert ("Please confirm your password.");
            
    // If Not same return False.    
    else if (password1 != password2) {
        alert ("\nThe password you entered did not match the comfirmiation password. Please try again...")
        return false;
    }

    // If same return True.
    else {
        alert("Your account has been created! Please login to activate your account.")
        return true;

        const name = document.getElementById('txtName');

        let Weekday = Date.prototype.getDay() + 1;
        let Month = Date.prototype.getMonth() + 1;
        let Day = Date.prototype.getDate();
        let Hour = Date.prototype.getHours() + 1;
        let Minutes = Date.prototype.getMinutes() + 1;
        let Seconds = Date.prototype.getSeconds() + 1;
        let MilliSec = Date.prototype.getMilliseconds();

        let ID = Weekday + Month + Day + Hour + Minutes + Seconds + MilliSec;

        let data = 
            `
                {
                    "username": "${name.value}",
                    "password": "${pass.value}",
                    "picture": "${pic.value}",
                    "ID": "${ID}"
                },
            `

        const fs = require('fs');
        
        fs.writeFile('../../Database/Accounts/accounts.js', data, err => {
            if (err) {
            console.error(err);
            }
            // file written successfully
        });
    }
}