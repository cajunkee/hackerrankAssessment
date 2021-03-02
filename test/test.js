const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);
const Promise = require("bluebird");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const {Builder, By, Key, until} = require('selenium-webdriver'),
	chrome = require('selenium-webdriver/chrome');
var driver;

const options = new chrome.Options();
options.addArguments(
    'headless'
);

describe('list view test', (done) => {

	before(function(done){
		driver = new Builder()
			.forBrowser('chrome')
            .setChromeOptions(options)
			.build();
		driver.get('http://localhost:8000')
			.then(()=>{
				done();
			});
	});

	after(function(){
		driver.quit();
	})

	it('should test load the page', async function(){
		let page = await driver.getPageSource();	
	});

	it('should click inside div 1',  async function(){
		let event1 = await driver.actions()
				 .mouseMove(driver.findElement(By.id('div1')), {x:0, y:0})
				 .click()
				 .click()
				 .perform();

		let Alert = await driver.switchTo().alert();
		if(Alert) {
			let val = await Alert.getText();
			expect(val).to.equal('Div 1');
			let closeAlert = await Alert.accept();
		} else {
			console.log('no alert detected');
		}

		let wt = await driver.sleep(1000);
		let event2 = await driver.actions()
				 .mouseMove(driver.findElement(By.id('div1')))
				 .click()
				 .perform();

		Alert = await driver.switchTo().alert();
		if(Alert) {
			let val = await Alert.getText();
			expect(val).to.equal('Div 3');
			let closeAlert = await Alert.accept();
		} else {
			console.log('no alert detected');
		}
	});

	it('should click inside div 2',  async function(){
		let event1 = await driver.actions()
				 .mouseMove(driver.findElement(By.id('div2')), {x:0, y:0})
				 .click()
				 .perform();

		let Alert = await driver.switchTo().alert();
		if(Alert) {
			let val = await Alert.getText();
			expect(val).to.equal('Div 2');
			let closeAlert = await Alert.accept();
		} else {
			console.log('no alert detected');
		}

		let wt = await driver.sleep(1000);
		let event2 = await driver.actions()
				 .mouseMove(driver.findElement(By.id('div2')))
				 .click()
				 .perform();

		Alert = await driver.switchTo().alert();
		if(Alert) {
			let val = await Alert.getText();
			expect(val).to.equal('Div 3');
			let closeAlert = await Alert.accept();
		} else {
			console.log('no alert detected');
		}
	});

	it('should click inside div 3',  async function(){
		let event1 = await driver.actions()
				 .mouseMove(driver.findElement(By.id('div3')), {x:0, y:0})
				 .click()
				 .perform();

		let Alert = await driver.switchTo().alert();
		if(Alert) {
			let val = await Alert.getText();
			expect(val).to.equal('Div 3');
			let closeAlert = await Alert.accept();
		} else {
			console.log('no alert detected');
		}

		let wt = await driver.sleep(1000);
		let event2 = await driver.actions()
				 .mouseMove(driver.findElement(By.id('div3')))
				 .click()
				 .perform();

		Alert = await driver.switchTo().alert();
		if(Alert) {
			let val = await Alert.getText();
			expect(val).to.equal('Div 3');
			let closeAlert = await Alert.accept();
		} else {
			console.log('no alert detected');
		}
	});

});
