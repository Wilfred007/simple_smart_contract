// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;


contract Calculator {

    uint public areaSquare;
    uint public areaOfTriangle;
    uint public areaOfRectangle;
   

    function AreaOfSquare(uint8 side) external returns(uint){

        return
         areaSquare  = side * side;
    } 

    function AreaOfTriangle(uint8 height, uint base) external returns(uint){
        return
         areaOfTriangle  = (base * height)/2;
    } 
    function AreaOfRectangle(uint8 width, uint8 length) external returns(uint){
        return
         areaOfRectangle  = width * length;
    } 
}