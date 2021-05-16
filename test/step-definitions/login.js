import { When, Then } from "cucumber";
import { assert } from 'chai'
import { DataLogin } from "../data/data.login";
import { LoginObject, LoginVerify } from "../object/login.ob"

Given("User Access Website", () => {
    browser.reloadSession()
    browser.url(DataLogin.url);
  });
When("User input correct UserName and Password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can login System Successfully", () => {
    assert.isObject($(LoginVerify.lbl_Message), DataLogin.message);
    assert.isObject($(LoginVerify.lbl_Message2), DataLogin.message2);
})