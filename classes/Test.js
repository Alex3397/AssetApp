export default class test {
    method1() {
        console.log('did some thing');
    }
    builder( user, password, organization, tenant) {
        return '<?xml version="1.0" encoding="utf-8"?>' +
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
        '    <Header>' +
        '        <Security xmlns="http://schemas.xmlsoap.org/ws/2002/04/secext">' +
        '            <UsernameToken>' +
        '                <Username>' + user + '@' + tenant + '</Username>' +
        '                <Password>' + password + '</Password>' +
        '            </UsernameToken>' +
        '        </Security>' +
        '        <SessionScenario xmlns="http://schemas.datastream.net/headers">terminate</SessionScenario>' +
        '        <Organization xmlns="http://schemas.datastream.net/headers">' + organization + '</Organization>' +
        '    </Header>' +
        '    <Body>' +
        '        <MP0222_GetIssueReturnTransactionDefault_001 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" verb="Get" noun="IssueReturnTransactionDefault" version="001" xmlns="http://schemas.datastream.net/MP_functions/MP0222_001">' +
        '            <ORGANIZATIONID entity="User" xmlns="http://schemas.datastream.net/MP_fields">' +
        '                <ORGANIZATIONCODE>GT</ORGANIZATIONCODE>' +
        '            </ORGANIZATIONID>' +
        '        </MP0222_GetIssueReturnTransactionDefault_001>' +
        '    </Body>' +
        '</Envelope>';
    }
}