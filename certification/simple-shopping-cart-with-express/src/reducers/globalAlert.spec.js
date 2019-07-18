import globalAlert from './globalAlert'

describe('reducers', () => {
    describe('globalAlert', () => {
        const successState = {
            type: "success",
            text: "Checkout OK"
        }

        it('should handle G_RESET action', ()=>{
            expect(globalAlert({}, { type: 'G_RESET'})).toEqual({})
        })

        it('should handle G_SUCCESS action', ()=>{
            expect(globalAlert({}, { 
                type: 'G_SUCCESS',
                text: "Checkout OK"}))
                .toEqual(successState)
        })
    })
})