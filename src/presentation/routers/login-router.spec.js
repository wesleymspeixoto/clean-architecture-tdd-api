class loginRouter{
    route(httpRequest) {
        if(!httpRequest || !httpRequest.body){
            return {
                statusCode: 500
            }
        }
        const { email, password } = httpRequest.body
        if(!email || !password){
            return{
                statusCode: 400
            }
        }
    }
}


describe('Login Router', () => {
    test('Should return 400 if no email is provided', () => {
        const sut = new loginRouter()
        const httpRequest = {
            body: {
                password: "any_password"
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})


test('Should return 400 if no password is provided', () => {
    const sut = new loginRouter()
    const httpRequest = {
        body: {
            email: "any_email@mail.com"
        }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
})


test('Should return 500 if no httpRequest is provided', () => {
    const sut = new loginRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
})


test('Should return 500 if no httpRequest has no body', () => {
    const sut = new loginRouter()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
})