pragma solidity >=0.5.16;
 
contract RentAcarContract {
 
    string private customerName;
    string private customerSurname;
    string private dealerCompanyName;
    int private price;
    string private text;

    constructor() public {
        customerName = "Zorka";
        customerSurname = "Jocovic";
        price = 10;
    }

    function getPrice() public view returns(string memory){
        return customerName;
    }

  
}
