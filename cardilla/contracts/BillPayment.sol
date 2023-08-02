// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BillPayment {
    address public owner;
    mapping(address => uint256) public billAmounts;

    event BillPaid(address indexed user, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function payBill() external payable {
        require(billAmounts[msg.sender] > 0, "No pending bills to pay");
        uint256 billAmount = billAmounts[msg.sender];
        require(msg.value >= billAmount, "Insufficient payment");

        // Transfer the funds to the contract owner
        (bool success, ) = owner.call{value: billAmount}("");
        require(success, "Payment failed");

        // Reset the bill amount after successful payment
        billAmounts[msg.sender] = 0;
        emit BillPaid(msg.sender, billAmount);
    }

    function setBillAmount(address user, uint256 amount) external onlyOwner {
        billAmounts[user] = amount;
    }
}
