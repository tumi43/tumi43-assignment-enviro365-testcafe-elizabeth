import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';


fixture `Getting Started`
    .page `https://etalente.co.za/main`;

test('Successful Login', async t => {

  const loginButton  = XPathSelector('/html/body/app-root/app-main/div/div/div[2]/div[2]/div/form/div[2]/div[1]/button');
  const profileName  = XPathSelector('//*[@id="etalente_sidenav"]/div/div/div[2]/div[2]');

  await t
      .typeText('#mat-input-0', 'test.codeceptjs@test.com')
      .typeText('#mat-input-1', 'Test@!2326')

      .click(loginButton)

      .expect(profileName.innerText).eql('test.codeceptjs@test.com');
});

test('Failed Login', async t => {
  const loginButton  = XPathSelector('/html/body/app-root/app-main/div/div/div[2]/div[2]/div/form/div[2]/div[1]/button');
  const errorMessage  = XPathSelector('/html/body/app-root/app-main/div/div/div[2]/div[2]/div/form/div[1]/p');

  await t
      .typeText('#mat-input-0', 'test.codeceptjs@test.com')
      .typeText('#mat-input-1', 'Test@!2sdfg326')


      .click(loginButton)

      // I could have done this better by looking for the xpath as there seems to be limitations are selectors
      .expect(errorMessage.innerText).eql('Invalid credentials provided');
});
