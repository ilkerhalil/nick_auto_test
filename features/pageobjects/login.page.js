const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('[name="email"]') }
    get inputPassword () { return $('[name="password"]') }
    get btnSubmit () { return $('input[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        (this.inputUsername).setValue(username);
        (this.inputPassword).setValue(password);
        (this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('giris');
    }
}

module.exports = new LoginPage();
