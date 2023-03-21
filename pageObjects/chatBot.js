class chatBot{
    constructor(page){
        this.page = page;
        this.bot = page.getByRole('heading', { name: 'McPizza Welcome to Pizza Shoppe' });
        this.getStarted =  page.getByRole('button', { name: 'Get Started' });
        this.firstName = page.frameLocator('iframe[name="avaamoIframe"]').getByPlaceholder('Your first name');
        this.lastName = page.frameLocator('iframe[name="avaamoIframe"]').getByPlaceholder('Your last name');
        this.email = page.frameLocator('iframe[name="avaamoIframe"]').getByPlaceholder('Email');
        this.nextBtn = page.frameLocator('iframe[name="avaamoIframe"]').getByRole('button', { name: 'Next' });
        this.veg = page.frameLocator('iframe[name="avaamoIframe"]').getByRole('link', { name: 'veg', exact: true });
        this.cheese = page.frameLocator('iframe[name="avaamoIframe"]').getByLabel('Cheese');
        this.tomoto = page.frameLocator('iframe[name="avaamoIframe"]').getByLabel('tomato');
    }

    async orderJourney(fName, lName, eMail){
        await this.bot.click();
        await this.getStarted.click();
        await  this.firstName.fill(fName);
        await  this.lastName .fill(lName);
        await this.email.fill(eMail);
        await this.nextBtn.click();
        

    }

    async goTo(){
        await this.page.goto('https://c0.avaamo.com/web_channels/d0880907-3408-4c8d-9226-7648880a94fa/demo.html?banner=true&demo=true&banner_text=%20&banner_title=This%20is%20how%20the%20chat%20agent%20shows%20up');
       
    }
}
module.exports = {chatBot}