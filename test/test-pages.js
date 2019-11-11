import { expect } from "chai"
import {clearDB, creatTestUser, creatTestPost, creatTestComment, getallPosts} from "../src/index"
import sinon from 'sinon';
import controller from "../src/db/controller/dbController";

describe("index test", async  () => {
    describe("Clear tables function", async () => {
        it("should return Clear message!", async () => {
            let controllerStub;
            sinon.stub(controller, 'clearTables').returns('tables CLEARED!!!!')
            const str = await clearDB();
            expect(str).to.equal('tables CLEARED!!!!')
        })
    })

    describe("Create user  function", async () => {
        it("should return message!", async () => {
            let controllerStub;
            sinon.stub(controller, 'createUser').returns('{rowCount: 1, rows: []}')
            const str = await creatTestUser();
            expect(str).to.equal('{rowCount: 1, rows: []}')
        })
    })

    describe("Create post", async () => {
        it("should return  message!", async () => {
            let controllerStub;
            sinon.stub(controller, 'createPost').returns('{rowCount: 1, rows: []}')
            const str = await creatTestPost();
            expect(str).to.equal('{rowCount: 1, rows: []}')
        })
    })

    describe("Create comment", async () => {
        it("should return  message!", async () => {
            let controllerStub;
            sinon.stub(controller, 'placeComment').returns('{rowCount: 1, rows: []}')
            const str = await creatTestComment();
            expect(str).to.equal('{rowCount: 1, rows: []}')
        })
    })

    describe("Get Posts", async () => {
        it("should return message!", async () => {
            let controllerStub;
            sinon.stub(controller, 'getallPosts').returns('{rowCount: 1, rows: []}')
            const str = await getallPosts();
            expect(str).to.equal('{rowCount: 1, rows: []}')
        })
    })

    
    

    
    
    


    
    



})



