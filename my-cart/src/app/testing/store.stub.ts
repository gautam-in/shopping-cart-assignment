import { Observable, Subject } from "rxjs"

export class StoreStub{
    subject = new Subject();
    categories = { 
        categories:
        [{
        category: "5b6899953d1a866534f516e2",
        description: "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        id: "5b6c6a7f01a7c38429530883",
        imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        name: "Fresho Kiwi - Green, 3 pcs",
        price: 87,
        sku: "fnw-kiwi-3",
        stock: 50
       }]   
    }
        
    cart = {
        addedProducts : {
        "5b6c6d3201a7c38429530888":{
            category: "5b6899123d1a866534f516de",
            description: "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.",
            id: "5b6c6d3201a7c38429530888",
            imageURL: "/static/images/products/bakery-cakes-dairy/bread.jpg",
            name: "Sandwich Bread - White, Chemical Free, 400 gm",
            price: 32,
            quantity: 1,
            sku: "bcd-bread-400",
            stock: 50
           }
        } 
    }   
    

    auth = {
        displayName: "",
        email: "athulnarayanan62@gmail.com",
        expiresIn: "3600",
        idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOGM3OTdlMDQ5YWFkZWViOWM5M2RiZGU3ZDAwMzJmNjk3NjYwYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hvcHBpbmctbGlzdC03NTNiYiIsImF1ZCI6InNob3BwaW5nLWxpc3QtNzUzYmIiLCJhdXRoX3RpbWUiOjE2MTc4OTk2MTIsInVzZXJfaWQiOiJsanZVU3Q1R2h2TUNoWXVxVGR2OUNnN0RxUXQxIiwic3ViIjoibGp2VVN0NUdodk1DaFl1cVRkdjlDZzdEcVF0MSIsImlhdCI6MTYxNzg5OTYxMiwiZXhwIjoxNjE3OTAzMjEyLCJlbWFpbCI6ImF0aHVsbmFyYXlhbmFuNjJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImF0aHVsbmFyYXlhbmFuNjJAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.h_1CoyXI-qoxUyZy3w30-ZiZpHK-3fYK4msRY2foGet_37MOnatxr3XaQvpKTNBGwlMTWbpgBbU6PFCJb9SdjZ9wbERcc3OPSiByiSDAn7_zZwO74BBYh02YcTO5k3syrVzsHWZV-cu7j8W4Kmx2_zGb1d4cAMTFHNOjSTxBG2aDaIj8h4QGvv7D--ZGCHPjuEbIVZBPYC1Byi4yHhI7DzcllNrbKDLpSEGpHK9DAmEjAWJvs1pCWKyvmHGe3tEU6PFzoj1nyN6EfbCX5i6FlyjYEQ8vvAfTIV0j9xcwLG_rk0fPO1deskXH7D8pddVbJQ2aMIjGGUjoHh0Lo7T7Qw",
        kind: "identitytoolkit#VerifyPasswordResponse",
        localId: "ljvUSt5GhvMChYuqTdv9Cg7DqQt1",
        refreshToken: "AGEhc0DFm9_JvxVDgu4POvLAgPa2Aj3OMISl0X98bu3nOSCyzhlbGEdHBS73kRCKxQQE_lqo9HSOPrzIhs3nsZhvHoQ0e7wyl1LXqlHCB5YfJrj1ESJMHz1dep9jO4eT9bw-rUMjgBOMW3bcPTJNDC1OMjLLq6rQY8NOulqCRPXVtlkU7lbD8Uj-Ae43h0q555eytDey-quTgudA5qcalCoKc-1zZuADrxbES7BGXGBBLrSuknALaDw",
        registered: true
    }

    select(type:string){
        switch(type){
            case 'categories' :
                this.subject.next(this.categories);
                return this.subject
            case 'auth' : 
                this.subject.next(this.auth)
                return this.subject
            case 'cart' : 
                this.subject.next(this.cart)
                return this.subject
            default :
                this.subject.next(null);
                return this.subject
        }
    }
}