import RomanNumerals from "../src/RomanNumerals";
import {expect} from "chai";


describe("RomanNumerals", function () {

    it("should be I when 1", function () {
        var romanNumber = new RomanNumerals();
        expect('I').to.be.equal(romanNumber.calculate(1))
    })

    it("should be V when 5", function () {
        var romanNumber = new RomanNumerals();
        expect('V').to.be.equal(romanNumber.calculate(5))
    })

    it("should be II when 2", function () {
        var romanNumber = new RomanNumerals();
        expect('II').to.be.equal(romanNumber.calculate(2))
    })

    it("should be IV when 4", function () {
        var romanNumber = new RomanNumerals();
        expect('IV').to.be.equal(romanNumber.calculate(4))
    })

    it("should be VII when 7", function () {
        var romanNumber = new RomanNumerals();
        expect('VII').to.be.equal(romanNumber.calculate(7))
    })

    it("should be IX when 9", function () {
        var romanNumber = new RomanNumerals();
        expect('IX').to.be.equal(romanNumber.calculate(9))
    })

    it("should be XCIX when 99", function () {
        var romanNumber = new RomanNumerals();
        expect('XCIX').to.be.equal(romanNumber.calculate(99))
    })

    it("should be XLIX when 49", function () {
        var romanNumber = new RomanNumerals();
        expect('XLIX').to.be.equal(romanNumber.calculate(49))
    })

    it("should be X when 10", function () {
        var romanNumber = new RomanNumerals();
        expect('X').to.be.equal(romanNumber.calculate(10))
    })

    it("should be DXXXII when 532", function () {
        var romanNumber = new RomanNumerals();
        expect('DXXXII').to.be.equal(romanNumber.calculate(532))
    })

    it("should be DCCC when 800", function () {
        var romanNumber = new RomanNumerals();
        expect('DCCC').to.be.equal(romanNumber.calculate(800))
    })

    it("should be DCCCXCIX when 899", function () {
        var romanNumber = new RomanNumerals();
        expect('DCCCXCIX').to.be.equal(romanNumber.calculate(899))
    })

    it("should be CM when 900", function () {
        var romanNumber = new RomanNumerals();
        expect('CM').to.be.equal(romanNumber.calculate(900))
    })

    it("should be M when 1000", function () {
        var romanNumber = new RomanNumerals();
        expect('M').to.be.equal(romanNumber.calculate(1000))
    })

    it("should be M when 3732", function () {
        var romanNumber = new RomanNumerals();
        expect('MMMDCCXXXII').to.be.equal(romanNumber.calculate(3732))
    })




})