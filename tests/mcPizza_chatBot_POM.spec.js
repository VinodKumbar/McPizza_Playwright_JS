import { test, expect } from '@playwright/test';
const {chatBot} = require('../pageObjects/chatBot');






test('@Sanity Validate the Pizza Order Booking from McPizza ChatBot', async ({ page }) => {
 
 const fName = "Vinod";
 const lName = "Kumbar";
 const eMail = "im.vinod.kumbar@gmail.com";
  const bot = new chatBot(page);
  await bot.goTo();
  await bot.orderJourney(fName, lName, eMail); 


  await page.frameLocator('iframe[name="avaamoIframe"]').getByPlaceholder('Type a message...').fill('How are you ?');
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('button', { name: 'Send' }).click();

  await page.frameLocator('iframe[name="avaamoIframe"]').getByPlaceholder('Type a message...').fill('How old are you ?');
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('button', { name: 'Send' }).click();

  await page.frameLocator('iframe[name="avaamoIframe"]').getByPlaceholder('Type a message...').fill('Order');
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('option', { name: 'I want to order pizza' }).getByText('order').click();

  
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('link', { name: 'veg', exact: true }).click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByLabel('Cheese').check();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByLabel('tomato').check();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('button', { name: 'Submit' }).click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('link', { name: 'Thick Crust' }).first().click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('link', { name: 'Medium' }).click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByText('Your Pizza Will Look like this : Pizza Type : veg Toppings : tomato,cheese Crust').click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('link', { name: 'Yes' }).click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByText('CONGRATS ! ORDER PLACED .', { exact: true }).click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('button', { name: 'Thumbs up' }).click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByPlaceholder('Select').click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('option', { name: 'Excellent' }).click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('dialog', { name: 'Feedback' }).getByRole('button', { name: 'Submit' }).click();
  await page.frameLocator('iframe[name="avaamoIframe"]').getByRole('group', { name: 'Bot sent, Text.CONGRATS ! ORDER PLACED .' }).getByText('Thank You for Your Support').click();
});
