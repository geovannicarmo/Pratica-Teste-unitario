import voucherService from '../../src/services/voucherService'
import faker from '@faker-js/faker'

describe("CreatVoucher", ()=>{


    it("Voucher already exist", async ()=>{

        const code = "fcwasfcsedadfv"
        const discount = 50

        const result =  await voucherService.createVoucher(code, discount);

        console.log("_________________________________________")
        expect(result).toBe("");

        expect(result).toBe('Voucher already exist.');
    })

    it("Created Voucher", async ()=>{

        
        const code = 'bdbvbgfdnbdchfdhnbtd'
        const discount = 50

        const result =  await voucherService.applyVoucher(code, discount);

        expect(result).toBe(undefined);
    })
})


describe("applyVoucher", ()=>{


    it("Voucher does not exist.", async ()=>{

        const code = "fcwasfcsedadfv"
        const discount = 50

        const result =  await voucherService.applyVoucher(code, discount);

        console.log("_________________________________________")
        expect(result).toBe("");

        expect(result).toBe('Voucher does not exist.');
    })

    it("Voucher exist.", async ()=>{

        
        const code = 'bdbvbgfdnhfdhnbtd'
        const discount = 50

        const result =  await voucherService.createVoucher(code, discount);

        expect(result).toBe(undefined);
    })
})