const LoginObject = {
    txt_Username: 'input[name="username"]',
    txt_Password: 'input[name="password"]',
    btn_Login: 'input[name="submit"]',
}

const LoginVerify = {
    lbl_Message: '//*[contains(text(),"Login Successfully")]',
    lbl_Message2: '//*[contains(text()," Thank you for Loggin. ")]',
}

export { LoginObject, LoginVerify }