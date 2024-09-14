import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Calculator Test", function () { //description of 
    async function deployCalculatorContract() {
        const [owner, addr1, addr2, addr3] = await ethers.getSigners()
        const Calculator = await ethers.getContractFactory("Calculator");
        const calculator = await Calculator.deploy();
        return { calculator, owner, addr1, addr2, addr3 }
    }

    describe("Test Calculator Contract", function () {
        it("should return default value", async function () {
            const { calculator, addr1, owner } = await loadFixture(deployCalculatorContract)
            expect(await calculator.areaOfRectangle()).to.be.equal(0)
        })
    })

    describe("Test Calculator Contract", function () {
        it("should return default value", async function () {
            const { calculator, addr1, owner } = await loadFixture(deployCalculatorContract)
            expect(await calculator.areaOfTriangle()).to.be.equal(0)
        })
    })

    describe("Test Calculator Contract", function () {
        it("should return default value", async function () {
            const { calculator, addr1, owner } = await loadFixture(deployCalculatorContract)
            expect(await calculator.areaSquare()).to.be.equal(0)
        })
    })

    describe("Test Calculator Contract", function () {
        it("should return default value", async function () {
            const { calculator, addr1, owner } = await loadFixture(deployCalculatorContract)
            expect(await calculator.areaSquare()).to.be.equal(0)
        })
    })

    describe("Test Calculator Contract", function () {
        it("return the area of a square", async function () {
            const { calculator, addr1, owner } = await loadFixture(deployCalculatorContract)
            //run the function to calculate the area of square 2 x 2 = 4
            await calculator.AreaOfSquare(2);
            //get the result since we have save it to a variable storage in the contract
            const result = await calculator.areaSquare();
            //compare the result since you know the expected outcome
            expect(result).to.be.equal(4)
        })

        describe("Test Calculator Contract", function () {
            it("return the area of a triangle", async function () {
                const { calculator, addr1, owner } = await loadFixture(deployCalculatorContract)
                //run the function to calculate the area of square 2 x 2 = 4
                await calculator.AreaOfTriangle(2,6);
                //get the result since we have save it to a variable storage in the contract
                const result = await calculator.areaOfTriangle();
                //compare the result since you know the expected outcome
                expect(result).to.be.equal(6)
            })
    })

    describe("Test Calculator Contract", function () {
        it("return the area of a triangle", async function () {
            const { calculator, addr1, owner } = await loadFixture(deployCalculatorContract)
            //run the function to calculate the area of square 2 x 2 = 4
            await calculator.AreaOfRectangle(10,6);
            //get the result since we have save it to a variable storage in the contract
            const result = await calculator.areaOfRectangle();
            //compare the result since you know the expected outcome
            expect(result).to.be.equal(60)
        })
})


    // describe("Test Calculator Contract", function () {
    //     it("return the area of a square", async function () {
    //         const { calculator, addr1, owner } = await loadFixture(deployCalculatorContract)
    //         expect(await calculator.AreaOfTriangle(2,6)).to.be.equal(2)
    //     })
    // })
})

})