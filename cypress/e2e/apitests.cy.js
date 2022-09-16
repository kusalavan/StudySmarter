/// <reference types="Cypress" />

const endpointurl = 'https://be.dev.studysmarter-test.de'

//Request for Sign Up a new user, Sign in and confirm and Create a Study Set

    it('Sign Up, Sign In and Confirm', function(){
        cy.request('POST', endpointurl + '/users/', {
            "email": "krishnakumar@me.com",
            "platform": "web",
            "language": "en",
            "signup_location": "webapp",
            "delayed_confirmation_possible": true,
            "university": null,
            "course_of_studies": null,
            "password": "luDRcHki8BI1ywtn",
            "tracking_number": 7447
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.user.email).to.eq('krishnakumar@me.com')
        }).then((res) =>{
            const userId = res.body.id
            cy.log("User id is: " + userId) 
            cy.request('POST', endpointurl + '/api-token-auth/', {
                "username":"krishnakumar@me.com","password":"luDRcHki8BI1ywtn"
                }).then((response) => {
                    expect(response.status).to.eq(200)
                }).then((res) => {
                    const tokenId = res.body.token
                    console.log("Token "+tokenId)
                    const uId = res.body.id
                    console.log("User ID is "+uId)
                    cy.request({
                        method : 'POST', 
                        url : endpointurl + '/users/'+uId+'/course-subjects/',
                        headers : {'authorization': 'Token ' + tokenId},
                        body : {"name":"Test Study Set","colorId":0,"shared":true,"exam_date":"2022-09-14T23:00:00.000Z","countries":[],"level":0}
                    }).then((response) => {
                            expect(response.body.name).to.eq('Test Study Set')
                         })
                })
        })
            
        
                
            
    })

